import {
    LIST_ASSETS,
    GOT_LIST_ASSETS,
    ADD_ASSET,
    SELECT_ASSET,
    START_TRANS,
    SEND_TRANS,
    ADD_PHOTO,
    ADD_DOC,
    ADD_PROPS,
    INC_HERC_ID,
    GET_HERC_ID,
    GOT_HERC_ID,
    CONFIRM_ASSET,
    SET_SET
} from '../actions/types';

// import assets from "./Assets";
import firebase from '../constants/Firebase';


const rootRef = firebase.database().ref();


//synchronous 
// let assets = [];
// rootRef.child('assets').on('value', (snapshot) => {
//     snapshot.forEach((obj) => {
//         console.log(obj.toJSON(), 'object in listassets');
//         assets.push({
//             name: obj.toJSON().Name,
//             key: obj.key,
//             logo: obj.toJSON().Logo,
//             // url: obj.toJSON().url
//         });

//     })

// })



const INITIAL_STATE = {

    assets: []
    // hercId: ""

};


const AssetReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GOT_LIST_ASSETS:
            console.log(action, 'listAssetsreducer');
            let assets = action.assets

            return Object.assign({}, state, {
                ...state,
                assets
            })


        case SELECT_ASSET:
            console.log(action, 'action in select reducer');
            let selectedAsset = action.selectedAsset;
            return Object.assign({}, state, {
                ...state,

                selectedAsset,

            })

        // this used to be  SET_PLACE
        case START_TRANS:
            let trans = action.data;
            console.log(state.selectedAsset.name, "selectedAssetName in startTrans reducer")

            return Object.assign({}, state, {


                selectedAsset: {
                    ...state.selectedAsset,
                    trans
                }

            }
            )

        case SEND_TRANS:
            let finTransDat = action.data;
            let finTransInfo = state.transInfo;
            let transDat = state.transDat;
            //  console.log(rootRef.ref(state.AssetReducers.transInfo.name.val()));
            console.log(state.transDat, "trans in send_trans reducer");
            console.log(finTransDat, 'fintrans in sendtrans redux')
            //    console.log([name], 'potential new txobject')
            rootRef.child('assets/' + state.transDat.assetKey).child('transactions').push({
                // dateTime: state.transInfo.dTime,
                // transLoc: finTransInfo.location,

                transDat


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

        case GOT_HERC_ID:
            let hercId = action.hercId;
            console.log(hercId, action, "hercidstuff")
            return Object.assign({}, state, {
                ...state,

                hercId: hercId
            })

        case INC_HERC_ID:
            let hercID = action.hercId;
            console.log(hercID, 'in increase reducer');

            rootRef.child('hercID').set(hercID);

            return Object.assign({}, state, {
                ...state,
                hercId: hercID
            })

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
            let documents = [...state.transDat.documents, doc]
            return Object.assign({}, state, {
                ...state,
                transDat: {
                    ...state.transDat,
                    documents
                }
            }
            )

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
            let assetRef = rootRef.child('assets').push();
            rootRef.child('assets').push(asset);

            let partAsset = {
                name: asset.Name,
                logo: asset.Logo,
                key: assetRef,

            }
            return Object.assign({}, state, {
                ...state,
                assets: [...state.assets, partAsset]


            }
            )

        case SET_SET:
            const setName = action.item.name;
            const setNum = action.item.value;
            console.log(setName, setNum, 'setset');
            rootRef.child('assets').push(asset);

            return Object.assign({}, state, {
                ...state,
                transDat: {
                    ...state.transDat,
                    editName: setName,
                    editNum: setNum
                }


            }
            )


        default:
            return state;
    }
}


export default AssetReducers;