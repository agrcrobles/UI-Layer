import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Button } from 'react-native';
import TouchableHeader from "../components/TouchableHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";
import pictures from "../assets/picturesLabel.png";
import csv from "../assets/csvLabel.png";
import Submit from "../components/SubmitBtn";
import { ImagePicker } from 'expo';
import Imagepicker from  "../components/ImagePicker";

export default class FileUp extends Component {
  static navigationOptions = {header: null };
    state = {
        image: null,
      };
    
  
 
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <TouchableHeader onPress={() => navigate('Splash')}/>
        <Title image={pictures} />
        <Imagepicker />
        {/* <ScrollView contentContainerStyle={styles.imagePick}>
        */}

          {/* <View style={styles.imageContainer}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Pick an image from camera roll"
              onPress={this._pickImage}
              />
          {image &&
              <Image source={{ uri: image }} style={{ width: 75, height: 75 }} />}
            </View>
          </View> */}
          {/* <View style={styles.imageContainer} >
            <ImagePicker />
          </View>
          <View style={styles.imageContainer} >
            <ImagePicker />
          </View> */}

        {/* </ScrollView> */}
       
      </View>
    )
  }
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
    height: "60%",
    width: "95%",
    // justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: 'blue'
    // paddingTop: 5,
    // paddingBottom: 5
  },
  imageContainer: {
   height: "20%" ,
    padding: 2,
    justifyContent: "center"
  },
  label: {
    color: "green",
    width: 120,
    fontSize: 20.2,
    fontWeight: "600"

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