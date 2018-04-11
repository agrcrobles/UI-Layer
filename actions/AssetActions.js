import { ADD_ASSET, LIST_ASSETS, GOT_LIST_ASSETS, SELECT_ASSET, START_TRANS, SEND_TRANS, ADD_PHOTO, ADD_DOC, ADD_PROPS, INC_HERC_ID, GET_HERC_ID, GOT_HERC_ID, CONFIRM_ASSET, SET_SET, DELETE_ASSET } from './types';
import firebase from '../constants/Firebase';
const rootRef = firebase.database().ref();

export function incHercId(hercid) {
    console.log(hercid, 'hercid')
    console.log((Number(hercid) + 1).toString(), 'transformed to string')
    let hercId = "00" +
    console.log(hercId, 'after refact')
    return {
        type: INC_HERC_ID,
        hercId

    }
}


export function getHercId() {
    return (dispatch) => {
        dispatch({

            type: GET_HERC_ID

        })
        let hercId;
        rootRef.child('hercID').once('value').
            then((snapshot) => {
                console.log(snapshot.val(), 'snaps')
                hercId = snapshot.toJSON();
            }).then(() => dispatch(gotHercId(hercId)));


    }
}
export function gotHercId(hercId) {
    let id = hercId;
    console.log(id, 'gotHercId');
    return {
        type: GOT_HERC_ID,
        hercId: id

    }

}

export function listAssets() {
    return (dispatch) => {
        dispatch({
            type: "LIST_ASSETS"
        });
        let assets = [];
        rootRef.child('assets').once('value').
            then((snapshot) => {
                snapshot.forEach((obj) => {
                    console.log(obj.toJSON(), 'object in listassets');
                    assets.push({
                        name: obj.toJSON().Name,
                        key: obj.key,
                        logo: obj.toJSON().Logo,
                        // url: obj.toJSON().url
                    });

                })

            }).then(() => dispatch(gotListAssets(assets)))

    }
}
export function gotListAssets(assetList) {
    let assets = assetList;
    console.log('got the list');
    return {
        type: GOT_LIST_ASSETS,
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

export function confirmAsset(ConfAsset) {
    let data = ConfAsset;
    console.log(ConfAsset);
    return {
        type: CONFIRM_ASSET,
        asset: data

    }
}

export function deleteAsset(key) {
    let delKey = key;
    console.log(delKey, "deletekey");
    return {
        type: DELETE_ASSET,
        delKey

    }
}


export function startTrans(trans) {
    let newtrans = trans;

    return (
        {
            type: START_TRANS,
            data: newtrans
        }
    )
}

export function sendTrans(trans) {
    console.log(trans, "inside set Location action")
    return (
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

export function addDoc(doc) {
    let document = doc;
    return {
        type: ADD_DOC,
        document
    }
}

export function setSet(item) {
    return {
        type: SET_SET,
        item
    }
}

