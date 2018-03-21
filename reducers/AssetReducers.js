import { LIST_ASSETS, ADD_ASSET, SELECT_ASSET, SET_PLACE, ADD_PHOTO, ADD_DOC, ADD_PROPS, INC_HERC_ID, GET_HERC_ID, CONFIRM_ASSET } from '../actions/types';
import assets from './assetList';


const INITIAL_STATE = {
    hercId: "003",
    assets: assets,

    selectedAsset: {},

    newAsset: {
        Name: "",
        CoreProperties:{},
        Logo: ""
    }

};

const AssetReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST_ASSETS:
            return Object.assign({}, state, {
                assets
            })

        case SELECT_ASSET:
            let selectedAsset = action.data;
            console.log(action.data, "actiondatafrom in reducer")
            return Object.assign({}, state, {

                selectedAsset
            })

        case INC_HERC_ID:
            let hercId = state.hercId + 1;
            console.log(action.data, "actiondatafrom in reducer")
            return Object.assign({}, state, {
                ...state,
                hercId
            }), console.log('Hercincrease', state)

       
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
                Images: [...state.selectedAsset.Images, image]
            }
            )
        case ADD_DOC:
            let doc = action.data;
            console.log('adding doc', doc);
            return Object.assign({}, state, {
                ...state.selectedAsset,
                csv: [action.data.docUri]

            })

        case ADD_PROPS:
            const Properties = action.data;
            console.log(Properties, "updating attributes in reducers");
            return Object.assign({}, state, {

                ...state.selectedAsset,
                selectedAsset: {
                    Properties
                }

            })


        case ADD_ASSET:
            const newAsset = action.newAsset;
            return Object.assign({}, state, {
                ...state,
                
                newAsset
                
            }
            )

            case CONFIRM_ASSET:
            const asset = action.asset;
            console.log(asset, 'asset in reducerconfirm', state, 'state')
            return Object.assign({}, state, {
                ...state,
                
                assets:[...assets, asset]
                    
                
            }
            )

        default:
            return state;
    }
}


export default AssetReducers;