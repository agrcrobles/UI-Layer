import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Button } from 'react-native';
import TouchableHeader from '../components/TouchableHeader';
// import Welcome from '../components/Welcome';
import { StackNavigator } from 'react-navigation';
import Title from '../components/MenuInputTitle';
import pictures from '../assets/picturesLabel.png';
import csv from '../assets/csvLabel.png';
import Submit from '../components/SubmitBtn';
import { DocumentPicker } from 'expo';

export default class FileUp extends Component {
    static navigationOptions = {header: null };
      state = {
        document:{
            name: null,
            uri: null
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

render() {
    const { navigate } = this.props.navigation;
    
        let location = this.props.navigation.state.params.location;
        let locationLabel = location === 'destination' ? destination : origin;
        console.log(this.props.navigation.state.params, "this.props")
   
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