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
import { ImagePicker, DocumentPicker } from 'expo';
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
    imaget: null,
    imagep: null,
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

        imagep: result.uri

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

        imaget: result.

      });
    }
  };
  _onSubmit = (photoUri) => {
    const { navigate } = this.props.navigation;
    console.log(photoUri, "onsubmitphoto")
    this.props.addPhoto(photoUri)
    console.log(this.props.selectedAsset, "selectedAsset in onsubmit")
    navigate('Splash3')
  };


  render() {

    let { imaget, imagep } = this.state;

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
        
        <View style={styles.picker}>
            <Button
              title="Pick a Photo"
              onPress={this._pickImage}
            />
            {imagep &&
              <Image source={{ uri: imagep }} style={{ width: 100, height: 100 }} />
            }
          </View>


        <View style={styles.picker}>
          <Button
            title="Take a Photo"
            onPress={this._takeImage}
          />
          {imaget &&
            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
          }
        </View>

        <Submit onPress={() => this._onSubmit(imagep)} /> 
{/* // pass mult images as array */}
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
