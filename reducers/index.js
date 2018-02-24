import { combineReducers } from 'redux';
import assets from './assetListReducer';
import AssetReducers from './AssetReducers';

const rootReducer = combineReducers({
    AssetReducers,
    assets
})

export default rootReducer