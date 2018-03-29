import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import Button from 'react-native-button';
import TouchableHeader from '../components/TouchableHeader';
// import Welcome from '../components/Welcome';
import { StackNavigator } from 'react-navigation';
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

  static navigationOptions = { header: null };
  state = {
    document: {
      name: null,
      uri: null
    }
  };

  _onSubmit = () => {
    let uri = this.state.document.uri;
    let docName = this.state.document.name;
    const { navigate } = this.props.navigation;

    console.log(uri, docName, "onsubmitcsv")
    this.props.addDoc(uri, docName);
    console.log(this.props.selectedAsset, "selectedAsset in onsubmitCSV")
    navigate('Splash3');
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
          uri: docResult.uri
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
      <View style={styles.containerCenter}>
        <View style={styles.assetField}>
          <Image style={styles.assetButton} source={{ uri: logo }} />
          <Text style={styles.assetLabel}>{asset.name}</Text>
        </View>
          <Image style={styles.assetLocation} source={locationImage} />

        {/* <Image source={document} style={styles.menuInputTitle} /> */}

        {/* <View style={styles.imageContainer}> */}
        <Button

          style={styles.picButton}

          onPress={() => this._pickImage()}>
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


});
const mapDispatchToProps = (dispatch) => ({

  addDoc: (uri, docName) =>
    dispatch(addDoc(uri, docName)),

})
export default connect(mapStateToProps, mapDispatchToProps)(DocUp);
