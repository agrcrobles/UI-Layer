import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Button } from 'react-native';
import TouchableHeader from '../components/TouchableHeader';
// import Welcome from '../components/Welcome';
import { StackNavigator } from 'react-navigation';
import Title from '../components/MenuInputTitle';
import pictures from '../assets/picturesLabel.png';
import csv from '../assets/csvLabel.png';
import origin from "../assets/originLabel.png";
import destination from "../assets/destinationLabel.png";
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
    let locationImage = this.props.selectedAsset.place === 'destination' ? destination : origin;
    let logo = this.props.selectedAsset.Logo;

    console.log(this.props.selectedAsset, 'splash3 this.props.selectedAsset ');

    return (
      <View style={styles.containerCenter}>

        <View style={styles.subHeader}>
          <Image style={styles.assetLocation} source={locationImage} />
          <Image style={styles.assetButton} source={logo} />
        </View>

        <Image source={csv} style={styles.menuInputTitle} />

        {/* <View style={styles.imageContainer}> */}
        <Button
          title="Select Document"
          onPress={this._pickDocument}
          style={styles.label}
        />
        <Text style={styles.label}>
          {this.state.document.name}
        </Text>


        <Submit onPress={this._onSubmit} />

      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  selectedAsset: state.AssetReducers.selectedAsset,

});
const mapDispatchToProps = (dispatch) => ({

  addDoc: (uri, docName) =>
    dispatch(addDoc(uri, docName)),

})
export default connect(mapStateToProps, mapDispatchToProps)(DocUp);
