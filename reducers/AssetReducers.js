import { LIST_ASSETS, ADD_ASSET, SELECT_ASSET, SET_PLACE, ADD_PHOTO, ADD_DOC, ADD_PROPS } from '../actions/types';
import assets from './assetList';


const INITIAL_STATE = {
    assets: assets,
    selectedAsset: {
        Images: [],
        csv: [],
    },

    newAsset: {}

};

const AssetReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_ASSETS:
            return Object.assign({}, state, {
                assets
            });

        case SELECT_ASSET:
            let selectedAsset = action.data;
            console.log(action.data, "actiondatafrom in reducer")
            return Object.assign({}, state, {

                selectedAsset
            })


        case SET_PLACE:
            let place = action.data;
            console.log(state.selectedAsset, "selectedAsset Reduction")
            return Object.assign({}, state, {
                selectedAsset: {
                    ...state.selectedAsset,
                    place

                }

            })

        case ADD_PHOTO:
            let image = [action.data];
            console.log('adding photo', image);
            return Object.assign({}, state, {
                ...state.selectedAsset,
                  Images:[...state.selectedAsset.Images, image]
                }
            )
        case ADD_DOC:
            let doc = action.data;
            console.log('adding doc', doc);
            return Object.assign({}, state, {
                ...state.selectedAsset,
                csv:[ action.data.docUri]
                
            })

        case ADD_PROPS:
            let attr = action.data;
            console.log(attr, "updating attributes in reducers");
            return Object.assign({}, state, {
                ...state.selectedAsset.Properties,
                attr
            })
            

        case ADD_ASSET:
return Object.assign({}, state, {
    ...state,
    newAsset: {
        Name: action.newAsset.Name,
        ID: action.newAsset.ID,
        place: action.newAsset.place,
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