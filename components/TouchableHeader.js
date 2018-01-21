import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
// import { StackNavigator, } from 'react-navigation';


export default class TouchableHeader extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight style={styles.hercLogo} onPress={this.props.onPress} >
        
        <Image source={require('../assets/hercLogoBreak.png')} style={styles.container} />
     
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  container: {
  
    // remove width and height to override fixed static size
    height: 200,
    width: 300,
    resizeMode: 'contain',
    
    
  },
  hercLogo: {
    // justifyContent: "center",
    
    alignItems: "center",
    height: 200,
    width: 300,
    // #021227
    backgroundColor: '#021227',
    // margin: .5
       
  }
 
  
})
;

