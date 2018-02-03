import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import backArrow from '../assets/icon_backarrow.png';
export default function NavButtons(props)   {
    
      return (
        <View style={styles.headerBtns}>
        
        <Image
        </View>
         
          );
    
  }
  
  var styles = StyleSheet.create({
    headerBtns: {
    
      // remove width and height to override fixed static size
      height: 175,
      width: "100%",
      justifyContent: "space-between",
    //   alignItems: "center",   
      backgroundColor: "#021227"
  
    },
    iconsArrow: {
        width: 35,
        height: 35
    },
    iconsLogout: {
        width: 45,
        height: 25
    }
)}