import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import WelcomeHeader from "../components/WelcomeHeader";
import Welcome from "../components/Welcome";
import Title from "../components/MenuInputTitle";
import vault from "../assets/vaultLabel,png";
import { StackNavigator } from 'react-navigation';

export default function ThankYou(props){
  return(
    <View style={styles.container} >

      <WelcomeHeader />
      <Title image={vault} />
      

    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // width: "100%",
    backgroundColor: '#021227',
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  menu: {
    height: 300,
    justifyContent: "space-around",
    backgroundColor: '#021227',
    // margin: .5,
  
    },