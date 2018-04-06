import { combineReducers } from 'redux';

import AssetReducers from './AssetReducers';
import EDIT from './Edi-T-Sets'
const rootReducer = combineReducers({
    AssetReducers,
  EDIT
})

export default rootReducer