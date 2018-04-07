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
    CONFIRM_ASSET,
    SET_SET
} from '../actions/types';

import ApiKeys from '../constants/apiKeys';
import * as firebase from 'firebase';

firebase.initializeApp(ApiKeys.FirebaseConfig);

const rootRef = firebase.database().ref();

let assets = [];
rootRef.child('assets').on('value', (snapshot) => {
    snapshot.forEach((obj) => {
        console.log(obj.toJSON(), 'object in listassets');
        assets.push({
            name: obj.toJSON().Name,
            key: obj.key,
            logo: obj.toJSON().Logo,
            // url: obj.toJSON().url
        });

    })

})


let hercId;
rootRef.child('hercID').on('value', (snapshot) => {
       console.log(snapshot.val(), 'snaps')
        hercId = snapshot.val();
    }
);



const INITIAL_STATE = {
    assets: assets,
    hercId: hercId
};


const AssetReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case LIST_ASSETS:
        //     let assets = [];
        //     rootRef.child('assets').on('value', (snapshot) => {
        //         //    let asset = snapshot.toJSON();
        //         // var size = Object.keys(asset).length;
        //         //    let keys = Object.keys(obj.coreProps);//this might not work
        //         snapshot.forEach((obj) => {
        //             console.log(obj.toJSON(), 'object in listassets');
        //             assets.push({
        //                 name: obj.toJSON().Name,
        //                 key: obj.key,
        //                 logo: obj.toJSON().Logo
        //             });

        //         })

        //     })
        //     return Object.assign({}, state, {
        //         ...state,

        //         assets
        //     })

        case SELECT_ASSET:
            let assetKey = action.data;
            let assetRef = rootRef.child('assets/' + assetKey);
            let jsonRef = rootRef.child('assets/' + assetKey).toJSON();

            console.log(jsonRef, 'asset ref in Reducer');
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
                    images: [],
                    documents: [],
                    properties: {}
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

        // case GET_HERC_ID:
        //     let hercNum;
        //     rootRef.child('hercID').once('value').then(
        //         (snap) => {
        //             console.log(snap.val(), 'snaps')
        //             hercNum = snap.val();

        //         });
        //     return Object.assign({}, state, {
        //         ...state,

        //         hercId: hercNum
        //     })

        case INC_HERC_ID:

            hercId = hercId + 1;
            // hercId = "00" + (Number(hercId)+1).toString()
            return Object.assign({}, state, {
                ...state,
                hercId
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
            rootRef.child('assets').push(asset);

            return Object.assign({}, state, {
                ...state,
                assets: [...assets, asset]


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