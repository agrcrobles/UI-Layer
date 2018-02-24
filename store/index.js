//this potentially will change to an array of logos to dynamically generate the list
import { createStore } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers);

export default store;



