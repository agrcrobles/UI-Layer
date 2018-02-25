import { ADD_ASSET, GET_ASSET, LIST_ASSETS, SELECT_ASSET } from './types';
import assets from '../reducers/assetListReducer';

export function listAssets() {
    return {
        type: LIST_ASSETS,
        assets

    }
}


export function selectAsset(assetIndex) {

    return (
        console.log(assetIndex, 'assetIndex'),
        {
            type: SELECT_ASSET,
            assetIndex: assetIndex
        }
    )
}
export function getAsset(assetIndex) {
    return {
        type: GET_ASSET,

        selectedAsset: assets[assetIndex]
    }
}

export function addAsset(asset) {
    return {
        type: ADD_ASSET,
        newAsset: asset

    }
}