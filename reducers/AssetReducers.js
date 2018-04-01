import {
    LIST_ASSETS,
    ADD_ASSET,
    SELECT_ASSET,
    START_TRANS,
    SEND_TRANS,
    ADD_PHOTO,
    ADD_DOC,
    ADD_PROPS,
    INC_HERC_ID,
    GET_HERC_ID,
    CONFIRM_ASSET
} from '../actions/types';
import ApiKeys from '../constants/apiKeys';
import * as firebase from 'firebase';

firebase.initializeApp(ApiKeys.FirebaseConfig);

const rootRef = firebase.database().ref();


const INITIAL_STATE = {
    hercId: "003",
    assets: [],
};


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
                        Logo: obj.toJSON().Logo
                    });

                })

            })
            return Object.assign({}, state, {
                assets
            })

        case SELECT_ASSET:
            let assetKey = action.data;
            let assetRef = rootRef.child(assetKey);

            let selectedAsset = {};
            assetRef.on('value', (snapshot) => {
                selectedAsset = snapshot.val();

            })

            return Object.assign({}, state, {
                ...state,

                selectedAsset: {
                    ...selectedAsset,
                    assetKey
                }
            })

        // this used to be  SET_PLACE
        case START_TRANS:
            let transInfo = action.data;
            console.log(state.selectedAsset.name, "selectedAssetName in startTrans reducer")

            return Object.assign({}, state, {

                ...state,

                transInfo,
                transDat: {
                    assetKey: state.selectedAsset.assetKey,
                    images:[],
                    documents: [],
                    properties:{}
                }

            }

            )

        case SEND_TRANS:
            let finTransDat = action.data;
            let  finTransInfo = state.transInfo;
            let transDat = state.transDat;
            //  console.log(rootRef.ref(state.AssetReducers.transInfo.name.val()));
            console.log(state.transDat, "trans in send_trans reducer");
            console.log(finTransDat, 'fintrans in sendtrans redux')
            //    console.log([name], 'potential new txobject')
             rootRef.child(state.transDat.assetKey).child('transactions').push({
                 dateTime: state.transInfo.dTime,
                 location: finTransInfo.location,
                 data: {
                     transDat
                 }

             })   
             rootRef.child('transactions').push(finTransDat);
            // rootRef.ref()

            return Object.assign({}, state, {

                ...state,

                transactions: {
                    ...state.transactions,
                    finTransDat

                }

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
            let image = action.data;
            console.log('adding photo');
            
            return Object.assign({}, state, {
                ...state,
                transDat: {
                    ...state.transDat,
                    images: [...state.transDat.images, image]

                }
            }

            )
        case ADD_DOC:
            let doc = action.data;
            console.log('adding doc', doc);
            return Object.assign({}, state, {
                ...state,
                transDat: {
                    ...state.transDat,
                    documents: {
                        ...state.transDat.documents,
                        doc
                    }
                }
            })

        case ADD_PROPS:
            const newProps = action.data;
            console.log(newProps, "updating attributes in reducers");
            return Object.assign({}, state, {

                ...state,

                transDat: {
                    ...state.transDat,
                    properties: newProps
                }
            }

            )


        case ADD_ASSET:
            const newAsset = action.newAsset;
            console.log('adding asset', newAsset.name)
            return Object.assign({}, state, {
                ...state,

                newAsset

            }
            )

        case CONFIRM_ASSET:
            const asset = action.asset;
            console.log(asset.name, 'asset in reducerconfirm', state, 'state')
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