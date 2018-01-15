import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import Title from "./MenuInputTitle";
import welcome from "../assets/welcome.png";
import vendor from "../assets/vendorLabel.png";
import vault from "../assets/vaultLabel.png";
import { StackNavigator, } from "react-navigation";
//touchablestyles
export default class Welcome extends Component {
  _onPressButton(){
    Alert.alert('You Pressed it')
  }
  render(){
    return(
      <View style={styles.menu}> 
        <Title image={welcome} />
         <TouchableHighlight  onPress={() => navigate('Vault')}>
           <Image
              style={styles.button}
              source={require('../assets/vaultLabel.png')}
            />
        </TouchableHighlight>

        <TouchableHighlight  onPress={this._onPressButton}>
          <Image
            style={styles.button}
            source={require('../assets/vendorLabel.png')}
          />
        </TouchableHighlight> 
      </View>
           
    ) 
  };

}
const styles = StyleSheet.create({
  menu: {
    height: "40%",
    justifyContent: "space-around",
    backgroundColor: '#2cb6ed',
    // margin: .5,
  
    },
    button: {
      width: 250, 
      height: 50
    }
  });


  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // page: {
  //   flex: 1,
  //   padding: 1,
  //   //justifyContent: ", 
  //   alignItems:'center',
  //   // maxWidth: 1024,
  //   // minWidth: 235, 
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: '#021227',
    
  // },



  // header: {
    //   flex: 1,
    //   position: "absolute",
    //   justifyContent: "flex-start",
    //   alignItems: "center",
  //   margin: .5,
  //   height: 200,
  //   width: "80%",
  //   backgroundColor: '#021227',
  //   marginTop: 2
  //   // maxWidth: 500,
  //   // maxHeight: 250,
    
  //   // width: 1000
    
  // },