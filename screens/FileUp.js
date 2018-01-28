import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Button } from 'react-native';
import TouchableHeader from "../components/TouchableHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";
import pictures from "../assets/picturesLabel.png";
import csv from "../assets/csvLabel.png";
import Submit from "../components/SubmitBtn";
import { DocumentPicker, ImagePicker } from 'expo';
import aws from 'aws-sdk/dist/aws-sdk-react-native';

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }
// import multer from 'multer';
// import multerS3 from 'multer-s3';

// import app from 'express';
//  aws.config.loadFromPath('./config.json');
const s3 = new aws.S3({
  accessKeyId: "",
  secretAccessKey: "",
  region: "us-east-1",
  
});

export default class FileUp extends Component {
  static navigationOptions = {header: null };
    state = {
        image: null,
        document:{
          name: null,
          uri: null
        }
        // imageName: null,
        // docUri: null,
        // docName: null,
      };
    
  
 
  _pickImage = async () => {
    console.log("picking Image")
    let result = await ImagePicker.launchImageLibraryAsync({
      // base64: true
      // allowsEditing: false,
      // aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ 
        
          image: result.uri  
         
       
      });
    }
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

  _submitDoc = async docResult => {
   
      const file = docResult.uri;
      console.log(file);
      // const fileName = this.state.imageName;
      // console.log(fileName);
      if (!file.length) {
        return alert('Please choose a file to upload first.');
      }
      // var albumPhotosKey = encodeURIComponent(fileName) + '//';
    
      var params = {Bucket:'herctest', Key:'tester', Body:file};
      s3.upload(params), function(err, data) {
        if (err) {
          return alert('There was an error uploading your photo: ', err.message);
        }
        console.log(data)
        alert('Successfully uploaded photo.');
        
      };
    };
   
 
  

  render() {
    const { navigate } = this.props.navigation;
    let { image } = this.state; 
        return(
      <View style={styles.container}>
        <TouchableHeader onPress={() => navigate('Splash')}/>
        <Title image={pictures} />
        {/* <Imagepicker /> */}
        
        {/* <ScrollView contentContainerStyle={styles.imagePick}> */}
       

          {/* <View style={styles.imageContainer}> */}
            <View style={{ height:100, width: 100, alignItems: 'center', justifyContent: 'center' }}>
              <Button
                title="Pickimage"
                onPress={this._pickImage}
                />
              
                <Image source={{ uri: image }} style={{ width: 75, height: 75 }} />
              </View>
            {/* </View> */}
          
          <Button
            title="Select Document"
            onPress={this._pickDocument}
            style={styles.label}
            />
            <Text style={styles.label}>
            {this.state.document.name}
            </Text>
        {/* </ScrollView> */}
       <Submit onPress={() => {this._submitDoc(this.state.document)}} />
      </View>
    )
  }_submitDoc
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    // width: "100%",
    backgroundColor: '#021227',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imagePick: {
    height: 500,
    width: 300,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: 'blue'
    // paddingTop: 5,
    // paddingBottom: 5
  },
  imageContainer: {
   height: 150,
    padding: 1,
    justifyContent: "center"
  },
  
  label: {
    color: "green",
    width: 120,
    fontSize: 20.2,
    fontWeight: "600",
    margin: 1

  },
  field: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "yellow",
    // marginTop: 5,
    // marginBottom: 5,
    alignItems: "center",
    paddingLeft: 5
  },
  button: {
    width: 50,
    height: 30
  },
  input: {
    width: 150, 
    height: 40,
    textAlign: "center",
    backgroundColor: "#132c4a", 
    // margin: .5,
    fontSize: 20.2,
    fontWeight: "600",
    borderColor: "#142535",
    color: "white",
    borderWidth: 1,
    // paddingLeft: 1
  }
});