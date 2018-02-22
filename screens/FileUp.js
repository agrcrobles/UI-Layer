import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Button } from 'react-native';
import TouchableHeader from '../components/TouchableHeader';
import menuOptions from '../components/buttons/menuOptions.png';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';
import pictures from '../assets/picturesLabel.png';
import csv from '../assets/csvLabel.png';
import agld from '../assets/AG_logo.png';
import origin from "../assets/originLabel.png";
import destination from "../assets/destinationLabel.png";
import Submit from '../components/SubmitBtn';
import { DocumentPicker, ImagePicker } from 'expo';
import Amplify, { Storage } from 'aws-amplify';
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




export default class FileUp extends Component {

  state = {
    image: null,
  };



  _takePhoto = async () => {
    let snappedPhoto = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
    });

    if (!snappedPhoto.cancelled) {
      console.log(snappedPhoto, "snapped Photo");
      this.setState({

        image: snappedPhoto.uri


      });
    }
    console.log(this.state, 'thisState')
  };


  render() {
    const { navigate } = this.props.navigation;
    
        let location = this.props.navigation.state.params.location;
        let locationLabel = location === 'destination' ? destination : origin;
        console.log(this.props.navigation.state.params, "this.props")
    let { image } = this.state;
    let imageFile = this.state.image;
    return (
      <View style={styles.container}>

        <View style={styles.subHeader}>
          <Image style={styles.assetLocation} source={locationLabel} />
          <Image style={styles.assetButton} source={agld} />
        </View>

        <Image source={pictures} style={styles.menuInputTitle}/>


        {/* <View style={styles.imageContainer}> */}
        <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'space-around' }}>
          <Button
            title="Take a Photo"
            onPress={this._takePhoto}
          />

          <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
        </View>

        <Submit onPress={() => navigate('Splash3', {image: imageFile})} />

      </View>
    )
  }
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // paddingTop: 30,
//     // width: "100%",
//     backgroundColor: '#021227',
//     // backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   imagePick: {
//     height: 500,
//     width: 300,
//     justifyContent: "space-around",
//     alignItems: "center",
//     backgroundColor: 'blue'
//     // paddingTop: 5,
//     // paddingBottom: 5
//   },
//   imageContainer: {
//     height: 150,
//     padding: 1,
//     justifyContent: "center"
//   },

//   label: {
//     color: "green",
//     width: 120,
//     fontSize: 20.2,
//     fontWeight: "600",
//     margin: 1

//   },
//   field: {
//     height: 60,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     backgroundColor: "yellow",
//     // marginTop: 5,
//     // marginBottom: 5,
//     alignItems: "center",
//     paddingLeft: 5
//   },
//   button: {
//     width: 50,
//     height: 30
//   },
//   input: {
//     width: 150,
//     height: 40,
//     textAlign: "center",
//     backgroundColor: "#132c4a",
//     // margin: .5,
//     fontSize: 20.2,
//     fontWeight: "600",
//     borderColor: "#142535",
//     color: "white",
//     borderWidth: 1,
//     // paddingLeft: 1
//   }
// });