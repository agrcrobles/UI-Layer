//this potentially will change to an array of logos to dynamically generate the list
import { createStore } from 'redux';
import reducers from '../reducers';
//REDUX devtools integration
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;



