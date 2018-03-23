import { ADD_ASSET, LIST_ASSETS, SELECT_ASSET, SET_PLACE, ADD_PHOTO, ADD_DOC, ADD_PROPS, INC_HERC_ID, GET_HERC_ID, CONFIRM_ASSET } from './types';
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
export function setPlace(place) {
    return (
        console.log(place, "inside set Location action"),
        {
            type: SET_PLACE,
            data: place
        }
    )
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

export function addProps(attributes) {
    return {
        type: ADD_PROPS,
        data: attributes
    }
}