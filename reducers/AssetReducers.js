import { LIST_ASSETS, GET_ASSET, ADD_ASSET } from '../actions/types';
import assets from './assetListReducer';


const INITIAL_STATE = {
    assets: assets,
    selectedAsset: {},
    assetIdx: 0,
    newAsset: {}

};

const AssetReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_ASSETS:
            return Object.assign({}, state, {
                ...state,
               });
        case GET_ASSET:
            return Object.assign({}, state, {
                ...state,
                selectedAsset: GET_ASSET.asset
            })
        case ADD_ASSET:
            return Object.assign({}, state, {
                ...state,
                newAsset: {
                    Name: action.newAsset.Name,
                    ID: action.newAsset.ID,
                    Location: action.newAsset.Location,
                    Logo: action.newAsset.Logo,
                    Properties: {
                        input1: action.newAsset.input1,
                        input2: action.newAsset.input2,
                        input3: action.newAsset.input3,
                        input4: action.newAsset.input4,
                        input5: action.newAsset.input5,
                        input6: action.newAsset.input6,
                        input7: action.newAsset.input7,
                        input8: action.newAsset.input8,
                    }
                }
            })
        default:
            return state;
    }
}

export default AssetReducers;