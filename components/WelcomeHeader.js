import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

export default class WelcomeHeader extends React.Component {
  render() {
    return (
      <View style={styles.hercLogo}>
        
      <Image source={require('../assets/hercLogoBreak.png')} style={styles.container} />
     
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
  
    // remove width and height to override fixed static size
    width: 275,
    resizeMode: 'contain',
    height: 180
    
  },
  hercLogo: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: "80%",
    // #021227
    backgroundColor: '#e04759',
    // margin: .5
       
  }
 
  
})
;

