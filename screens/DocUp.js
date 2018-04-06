import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import Button from 'react-native-button';
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';

import Title from '../components/MenuInputTitle';
import pictures from '../assets/picturesLabel.png';
import document from '../assets/docs.png';
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";
import Submit from '../components/SubmitBtn';
import { DocumentPicker } from 'expo';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import { addDoc } from '../actions/AssetActions';

class DocUp extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {

      headerTitle:
        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{
            height: 80,
            width: 80,
            alignSelf: 'center',
            borderRadius: 120,
            resizeMode: 'contain'
          }}
            source={{ uri: params.logo }} />
          <Text style={styles.assetHeaderLabel}>{params.name}</Text>
        </View>,

      headerStyle: {
        height: Platform.OS === 'android' ? 100 + STATUS_BAR_HEIGHT : 100,
        backgroundColor: '#021227',

      },
      headerTitleStyle: {
        marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
        textAlign: 'center',
        alignSelf: 'center',
        // textAlignVertical: 'center',
        backgroundColor: '#021227',

      },
      headerRight: <View></View>
    }
  }
  state = {
    document: {
      name: null,
      uri: null,
      size: null
    }
  };

  _onSubmit = () => {
    let uri = this.state.document.uri;
    let docName = this.state.document.name;
    let docSize = this.state.document.size;
    const { navigate } = this.props.navigation;
    pickedDoc = Object.assign({}, this.state, {
      uri,
      size: docSize,
      name: docName
    }
  ) 
    console.log(pickedDoc, "onsubmitcsv")
    this.props.addDoc(pickedDoc);
    
    navigate('Splash3', {logo: this.props.logo, name: this.props.name});
  };


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
          uri: docResult.uri,
          size: docResult.size
        }
      });
    }
  };

  render() {

    const { navigate } = this.props.navigation;
    // let image = this.props.asset.Images ? this.props.asset.Images[0] : null;
    let locationImage = this.props.transInfo.location === 'recipient' ? recipient : originator;
    let logo = this.props.transInfo.logo;
    let asset = this.props.transInfo;
    let hercId = this.props.hercId;

    return (
      <View style={styles.container}>
      
          <Image style={styles.assetLocation} source={locationImage} />

        <Button

          style={styles.picButton}

          onPress={() => this._pickDocument()}>
          Upload Document
      </Button>
        <Text style={styles.label}>
          {this.state.document.name}
        </Text>


        <Submit onPress={this._onSubmit} />

      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  transInfo: state.AssetReducers.transInfo,
  logo: state.AssetReducers.selectedAsset.Logo,
  name: state.AssetReducers.transInfo.name

});
const mapDispatchToProps = (dispatch) => ({

  addDoc: (uri, docName) =>
    dispatch(addDoc(uri, docName)),

})
export default connect(mapStateToProps, mapDispatchToProps)(DocUp);
