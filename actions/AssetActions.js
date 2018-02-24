import { ADD_ASSET, GET_ASSET, LIST_ASSETS } from './types';
 import assets from '../reducers/assetListReducer';

export function listAssets() {
    return {
        type: LIST_ASSETS,
        assets

    }
}

export function getAsset(assetIndex) {
    return {
        type: GET_ASSET,

        asset: assets[assetIndex]
    }
}

export function addAsset(asset) {
    return {
        type: ADD_ASSET,
        newAsset: asset

    }
}