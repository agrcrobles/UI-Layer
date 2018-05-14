import React, { PureComponent } from 'react';

import 'babel-preset-react-native-web3/globals';

import Web3 from 'web3';
import store from './store';

import { Provider } from 'react-redux';
import MainNavigation from './navigation/MainNavigation';

import truffleConfig from './truffle';
const network = truffleConfig.networks.ropsten;

// const TESTRPC_ADDRESS = `${network.protocol}://${network.host}:${network.port}`;
const TESTRPC_ADDRESS = `${network.protocol}://${network.host}/${network.key}`;

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    // Initialize web3 and set the provider to the testRPC.
    // set the provider you want from Web3.providers
    const web3Provider = new Web3.providers.HttpProvider(TESTRPC_ADDRESS);
    this.web3 = new Web3(web3Provider);
  }
	render() {
    return (
      <Provider store={store}>
        <MainNavigation web3={this.web3}/>
      </Provider>
		);
	}
}
