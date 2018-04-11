import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Hipr extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://hipr.one/'}}
        style={{margin: 0, padding: 0, flex: 1, width: '100%'}}
      />
    );
  }
}