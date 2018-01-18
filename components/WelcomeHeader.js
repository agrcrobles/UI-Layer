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

