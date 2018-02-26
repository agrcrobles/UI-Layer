import { ADD_ASSET, LIST_ASSETS, SELECT_ASSET, SET_PLACE, ADD_PHOTO, ADD_DOC, ADD_PROPS } from './types';
import assets from '../reducers/assetListReducer';

export function listAssets() {
    return {
        type: LIST_ASSETS,
        assets

    }
}


export function selectAsset(asset) {

    return (
        console.log(asset, 'assetSelected'),
        {
            type: SELECT_ASSET,
            data: asset
        }
    )
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

export function addAsset(asset) {
    return {
        type: ADD_ASSET,
        newAsset: asset

    }
}
export function addDoc(uri, docName) {
    return {
        type: ADD_DOC,
       data:{
        docUri: uri,
        docName
       }
    }
}

export function addProps (attributes) {
    return {
        type: ADD_PROPS,
        data: attributes
    }
}