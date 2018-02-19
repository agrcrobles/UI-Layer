import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class AnthemWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://anthembunker.com/'}}
        style={{marginTop: 20, flex: 1}}
      />
    );
  }
}