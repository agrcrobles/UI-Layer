import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import Button from 'react-native-button';
import menuOptions from '../components/buttons/menuOptions.png';

import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';
import camera from '../assets/camera.png';
import { connect } from 'react-redux';
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";

import Submit from '../components/SubmitBtn';

import { ImagePicker, DocumentPicker } from 'expo';
import { addPhoto } from '../actions/AssetActions';

class FileUp extends Component {

  // static navigationOptions = {
  //   header: null

  // }
  state = {
    image: null,
  }
  _pickImage = async () => {
    console.log("picking Image")
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result);
      this.setState({

        image: "data:image/png;base64," + result.base64

      });
    }
  };


  _takeImage = async () => {
    console.log("picking Image")
    let result = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result);
      this.setState({

        image: "data:image/png;base64," + result.base64

      });
    }
  };
  _onSubmit = (imgString) => {
    const { navigate } = this.props.navigation;

    this.props.addPhoto(imgString)
    navigate('Splash3')
  };


  render() {

    let { image } = this.state;
    let transInfo = this.props.transInfo;
    let locationImage = this.props.transInfo.location === 'recipient' ? recipient : originator;
    let logo = this.props.logo;

    return (
      <View style={styles.containerCenter}>

        <View style={styles.assetField}>
          <Image style={styles.assetButton} source={{ uri: logo }} />
          <Text style={styles.assetLabel}>{transInfo.name}</Text>
        </View>

          <Image source={locationImage} style={styles.assetLocation} />
        {/* <Image source={camera} style={styles.menuInputTitle} /> */}

        <View style={styles.picker}>
          {/* <Button style={styles.picButton}
            title="Upload a Photo"
            onPress={this._pickImage}
          />  
          { fontSize: 20, color: 'white', borderColor:"red", backgroundColor:"#021227" } */}
          <Button

            style={styles.picButton}

            onPress={() => this._pickImage()}>
            Upload Image
      </Button>

          <Button
            style={styles.picButton}

            onPress={() => this._takeImage()}>

            Take Photo
  </Button>
        </View>



        {
          image &&
          <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
        }

        <Submit onPress={() => this._onSubmit(image)} />
        {/* // pass mult images as array */}
      </View >
    )
  }
}

const mapStateToProps = (state) => ({
  transInfo: state.AssetReducers.transInfo,
  logo: state.AssetReducers.selectedAsset.Logo

});
const mapDispatchToProps = (dispatch) => ({

  addPhoto: (uri) =>
    dispatch(addPhoto(uri)),

})
export default connect(mapStateToProps, mapDispatchToProps)(FileUp);
