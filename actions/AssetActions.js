import { ADD_ASSET, LIST_ASSETS, SELECT_ASSET, START_TRANS, SEND_TRANS, ADD_PHOTO, ADD_DOC, ADD_PROPS, INC_HERC_ID, GET_HERC_ID, CONFIRM_ASSET } from './types';
// import assets from '../reducers/assetListReducer';

export function incHercId() {
    return {
        type: INC_HERC_ID,

    }
}

export function getHercId() {
    return ({
        type: GET_HERC_ID,
        hercId: state.hercId,
    },
        dispatch(incHercId)

    )

}
export function listAssets() {
    return {
        type: LIST_ASSETS,
    
    }
}

export function selectAsset(assetKey) {

    return (
       
        {
            type: SELECT_ASSET,
            data: assetKey
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
export function startTrans(txBase) {
    return (
        console.log(txBase, "inside set Location action"),
        {
            type: START_TRANS,
            data: txBase
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
