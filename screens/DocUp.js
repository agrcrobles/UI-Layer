import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Button } from 'react-native';

export default class DocUp extends Component {
  static navigationOptions = { header: null };

  state = {
    document: {
      name: null,
      uri: null
    }
    // imageName: null,
    // docUri: null,
    // docName: null,
  }


  _pickDocument = async () => {

    let docResult = await DocumentPicker.getDocumentAsync({
      //MIME type 
    });
    alert(docResult.uri);
    console.log(docResult, "docPickResult");


    console.log(docResult.name, "docResultName");

    if (!docResult.cancelled) {
      this.setState({
        document: {
          name: docResult.name,
          uri: docResult.uri
        }
      });
    }
  }


  render() {
    return (

      <Button
        title="Select Document"
        onPress={this._pickDocument}
        style={styles.label}
      />
    )
  }
}