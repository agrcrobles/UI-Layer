import React, {Component} from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import NavButtons from "./Header_LogoButtons";
import MenuLogo from "./MenuLogo";

export default class MenuHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <NavButtons />
        <MenuLogo />
      </View>
       
        );
  }
}

var styles = StyleSheet.create({
  header: {
  
    // remove width and height to override fixed static size
    height: 175,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",   
    backgroundColor: "green"

  }
  // ,
  // hdrbtns: {
  //   flex: 1,
  //   flexDirection: "row",
  //   width: "95%",
  //   height: 50,
  //   justifyContent: "space-between"
    
  // },
  // menuLogo: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 170,
  //   width: "50%",
  //   // #021227
  //   backgroundColor: '#e04759',
  //   // margin: .5
       
  // }
 
  
})
;

