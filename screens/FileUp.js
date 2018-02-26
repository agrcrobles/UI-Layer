import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Button } from 'react-native';
import TouchableHeader from '../components/TouchableHeader';
import menuOptions from '../components/buttons/menuOptions.png';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';
import pictures from '../assets/picturesLabel.png';
import { connect } from 'react-redux';
import agld from '../assets/AG_logo.png';
import origin from "../assets/originLabel.png";
import destination from "../assets/destinationLabel.png";
import Submit from '../components/SubmitBtn';
import { ImagePicker } from 'expo';
import { addPhoto } from '../actions/AssetActions';

// import Amplify, { Storage } from 'aws-amplify';
// import aws_exports from '../awsmobilejs/#current-backend-info/aws-exports.js';
// console.log(aws_exports);
// Amplify.configure({
//     Auth: {
//     identityPoolId: 'us-east-1:f0e40134-54a1-47b0-b297-d895a1e5a4ca', //REQUIRED - Amazon Cognito Identity Pool ID
//     region: 'us-east-1', // REQUIRED - Amazon Cognito Region

//   },
//   Storage: {
//     bucket: 'hercone-deployments-mobilehub-1541391316', //REQUIRED -  Amazon S3 bucket
//     region: 'us-east-1', //OPTIONAL -  Amazon service region
//   }
//   });




class FileUp extends Component {
  static navigationOptions = {
    header: null

  }
     state = {
      image: null
    }
 
  

    // _takePhoto = async () => {
      
    //   console.log('taking photo');
    //   let snappedPhoto = await ImagePicker.launchCameraAsync({
    //     allowsEditing: false,
    //     aspect: [4, 3],
    //   });
    //   console.log(snappedPhoto);

    //   if (!snappedPhoto.cancelled) {
    //     console.log(snappedPhoto, "snapped Photo");
    //     debugger
    //     this.setState({
    //       image: snappedPhoto.uri
    //     })
    //   };
    // }
    _pickImage = async () => {
      console.log("picking Image")
      let result = await ImagePicker.launchCameraAsync({
        // base64: true
        // allowsEditing: false,
        // aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        console.log(result);
        this.setState({ 
          
            image: result.uri  
           
         
        });
      }
    };
    _onSubmit = (photoUri) => {

      console.log(photoUri, "onsubmitphoto")
      this.props.addPhoto(photoUri)
      // navigate('Splash3')
    };


    render() {
      
      let  { image }  = this.state;
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




          <Image source={pictures} style={styles.menuInputTitle} />



          <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'space-around' }}>
            <Button
              title="Take a Photo"
              onPress={this._pickImage}
            />

            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
          </View>

          <Submit onPress={() => this._onSubmit(image)} />

        </View>
      )
    }
  }

  const mapStateToProps = (state) => ({
    selectedAsset: state.AssetReducers.selectedAsset,

  });
  const mapDispatchToProps = (dispatch) => ({

    addPhoto: (uri) =>
      dispatch(addPhoto(uri)),

  })
  export default connect(mapStateToProps, mapDispatchToProps)(FileUp);
