import { ADD_ASSET, LIST_ASSETS, SELECT_ASSET, START_TRANS, SEND_TRANS, ADD_PHOTO, ADD_DOC, ADD_PROPS, INC_HERC_ID, GET_HERC_ID, CONFIRM_ASSET, SET_SET } from './types';
import firebase from '../constants/Firebase';
const rootRef = firebase.database().ref();

// export function incHercId() {


//     return {
//         type: INC_HERC_ID,
//         hercId
//     }
// }

export function getHercId() {
    let hercId;
    rootRef.child('hercID').on('value', (snapshot) => {
        console.log(snapshot.val(), 'snaps')
        hercId = snapshot.toJSON();
    }
    );
    console.log('getting ID')
    return ({
        type: GET_HERC_ID,
        hercId

    })
}

export function listAssets() {
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
    return {
        type: LIST_ASSETS,
        assets
    }
}

export function selectAsset(asset) {
    let assetRef = rootRef.child('assets/' + asset.key);
    let selectedAsset = {};
    assetRef.on('value', (snapshot) => {
        selectedAsset = snapshot.val();

    });
    selectedAsset = Object.assign({}, selectedAsset, {
        ...selectedAsset,
        key: asset.key
    })
    console.log(selectedAsset, 'selecteasset in action')
    return (

        {
            type: SELECT_ASSET,
            selectedAsset
        }
    )
}
export function addAsset(newAsset) {
    return {
        type: ADD_ASSET,
        newAsset

    }
}
export function confirmAsset(asset) {
    return {
        type: CONFIRM_ASSET,
        asset

    }
}
export function startTrans(trans) {
    let newtrans = trans;

    return (
        console.log(txBase, "inside set Location action"),
        {
            type: START_TRANS,
            data: newtrans
        }
    )
}

export function sendTrans(trans) {
    return (
        console.log(trans, "inside set Location action"),
        {
            type: SEND_TRANS,
            data: trans
        }
    )
}

export function addProps(newProps) {
    return {
        type: ADD_PROPS,
        data: newProps
    }
}

export function addPhoto(uri) {
    return ({
        type: ADD_PHOTO,
        data: uri
    }
    )
}

export function addDoc(uri, docName) {
    return {
        type: ADD_DOC,
        data: {
            docUri: uri,
            docName
        }
    }
}

export function setSet(item) {
    return {
        type: SET_SET,
        item
    }
}
