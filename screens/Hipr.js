import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Hipr extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://hipr.one/'}}
        style={{flex: 1, width: '100%', margin: null, padding: null}}
      />
    );
  }
}