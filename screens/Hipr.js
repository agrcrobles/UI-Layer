import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Hipr extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://herc.one/'}}
        style={{marginTop: 20, flex: 1}}
      />
    );
  }
}