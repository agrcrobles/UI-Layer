import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import WelcomeHeader from "./WelcomeHeader";
import Welcome from "./Welcome";


export default class SplashPanel extends Component {
  render(){
    return(
      <View style={styles.container}>
        <WelcomeHeader />
        
        <Welcome />
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    width: "100%",
    backgroundColor: '#021227',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
  // page: {
  //   justifyContent: 'center', 
  //   alignItems:'center',
  //   alignContent: 'center',
  //   // maxWidth: 1024,
  //   // minWidth: 235, 
  //   width: "100%",
    
    
  // },