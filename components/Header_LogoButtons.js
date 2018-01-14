import React from "react";
import {View, Image, TouchableHighlight, StyleSheet } from 'react-native';

//import {Component} from "react";



export default function Header_LogoButtons() {
  return (
    <View style={styles.navbtns}>
      <TouchableHighlight>
        <Image
          style={{width: 50, height: 50}}
          source={require('../assets/icon_backarrow.png')}
        />
    </TouchableHighlight>
      <TouchableHighlight>
        <Image
          style={{width: 100, height: 40}}
          source={require('../assets/icon_logout.png')}
        />
    </TouchableHighlight>
   </View>
  )
}

var styles = StyleSheet.create({
  navbtns: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 51,
    justifyContent: "space-between",
    backgroundColor: "grey",    
    
    paddingRight:15,
    paddingLeft: 15
  }
 
  
})
;
