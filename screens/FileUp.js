import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import Button from 'react-native-button';
import menuOptions from '../components/buttons/menuOptions.png';
import { STATUS_BAR_HEIGHT } from '../constants';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';
import camera from '../assets/camera.png';
import { connect } from 'react-redux';
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";
import BackButton from "../components/BackButton";


import Submit from '../components/SubmitBtn';

import { ImagePicker, DocumentPicker } from 'expo';
import { addPhoto } from '../actions/AssetActions';

class FileUp extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {

      headerTitle:
        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{
            height: 80,
            width: 80,
            alignSelf: 'center',
            borderRadius: 40,
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
      headerRight: <View></View>,
      headerLeft: <BackButton navigation={navigation} />
    }
  }
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

        image: "data:image/png;base64," + result.base64,
        size: result.size

      });
    }
  };


  _takeImage = async () => {
    console.log("picking Image")
    let result = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 4],
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result.size, 'this is how big');
      this.setState({

        image: "data:image/png;base64," + result.base64,
        size: result.size
      });
    }
  };
  _onSubmit = (imgString) => {
    const { navigate } = this.props.navigation;

    this.props.addPhoto(imgString)
    navigate('Splash3',{logo: this.props.logo, name: this.props.transInfo.name})
  };


  render() {

    let { image } = this.state;
    let transInfo = this.props.transInfo;
    let locationImage = this.props.transInfo.location === 'recipient' ? recipient : originator;
    let logo = this.props.logo;

    return (
      <View style={styles.container} >

        <Image source={locationImage} style={[styles.assetLocation,{marginTop: 5, marginBottom: 50}]} />

         {
            image &&
            <Image source={{ uri: image }} style={{ width: 200, height: 200, margin: 10 }} />
          }
        
        <View style={[styles.picker,{marginTop: 0}]}>
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



         

          <Submit onPress={() => this._onSubmit(image)} />
        </View >
        </View>
        )}
      
    }
  
const mapStateToProps= (state) => ({
          transInfo: state.AssetReducers.trans.header,
          logo: state.AssetReducers.selectedAsset.Logo

        });
        const mapDispatchToProps= (dispatch) => ({

          addPhoto: (uri) =>
            dispatch(addPhoto(uri)),

        })
      
export default connect(mapStateToProps, mapDispatchToProps)(FileUp);
