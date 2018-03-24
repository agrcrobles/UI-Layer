import { LIST_ASSETS, ADD_ASSET, SELECT_ASSET, START_TRANS, ADD_PHOTO, ADD_DOC, ADD_PROPS, INC_HERC_ID, GET_HERC_ID, CONFIRM_ASSET } from '../actions/types';
import ApiKeys from '../constants/apiKeys';
import * as firebase from 'firebase';

firebase.initializeApp(ApiKeys.FirebaseConfig);

const rootRef = firebase.database().ref();


const INITIAL_STATE = {
    hercId: "003",
    assets: [],

    // leave this until the tx bundle is set
    // newAsset: {
    //     Name: "",
    //     coreProps:{},
    //     Logo: ""
    // }

};

// key: obj.key,
// name: obj.toJSON().Name,
// logo: obj.toJSON().Logo
const AssetReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_ASSETS:
            let assets = [];
            rootRef.on('value', (snapshot) => {
                //    let asset = snapshot.toJSON();
                // var size = Object.keys(asset).length;
                //    let keys = Object.keys(obj.coreProps);//this might not work
                snapshot.forEach((obj) => {
                    assets.push({
                        name: obj.toJSON().Name,
                        key: obj.key,
                        logo: obj.toJSON().Logo
                    });
                    console.log(obj.child('CoreProps').val(), 'haschilds?')//this is coreProps!! that's how! 
                })
                console.log(assets, 'assets')
            })
            return Object.assign({}, state, {
                assets
            })

        case SELECT_ASSET:
            let assetKey = action.data;
            let assetRef = rootRef.child(assetKey);
            console.log(assetRef, 'assetRef')
            let selectedAsset = {};
            console.log(selectedAsset, 'selected');
            assetRef.on('value', (snapshot) => {
                selectedAsset = snapshot.val();
                console.log(snapshot.val(), 'snapshot val');
                console.log(selectedAsset, 'selectedAsset var')

            })
            console.log(selectedAsset, "outside of promise")
            return Object.assign({}, state, {
                ...state,

                selectedAsset
            })

        // this used to be  SET_PLACE
        case START_TRANS:
            let transInfo = action.data;
            console.log(state.selectedAsset, "selectedAsset Reduction")

           
            
            return Object.assign({}, state, {

                ...state,

               transInfo

            }

            )

        case INC_HERC_ID:
            let hercId = state.hercId + 1;
            console.log(action.data, "actiondatafrom in reducer")
            return Object.assign({}, state, {
                ...state,
                hercId
            }), console.log('Hercincrease', state)


        case ADD_PHOTO:
            let image = [action.data];
            console.log('adding photo', image);
            return Object.assign({}, state, {
                ...state.selectedAsset,
                Images: [...state.selectedAsset.Images, image]
            }
            )
        case ADD_DOC:
            let doc = action.data;
            console.log('adding doc', doc);
            return Object.assign({}, state, {
                ...state.selectedAsset,
                csv: [action.data.docUri]

            })

        case ADD_PROPS:
            const newProps = action.data;
            console.log(newProps, "updating attributes in reducers");
            return Object.assign({}, state, {

                ...state,
               
               ...state.transInfo,  
                newProps
               }

            )


        case ADD_ASSET:
            const newAsset = action.newAsset;
            return Object.assign({}, state, {
                ...state,

                newAsset

            }
            )

        case CONFIRM_ASSET:
            const asset = action.asset;
            console.log(asset, 'asset in reducerconfirm', state, 'state')
            rootRef.push(asset);

            return Object.assign({}, state, {
                ...state,
                ...state.assets,

                assets: [...assets, asset]


            }
            )

        default:
            return state;
    }
}


export default AssetReducers;