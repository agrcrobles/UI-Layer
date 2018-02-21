import React, { Component } from "react";
import { View, Text, Platform, StyleSheet, Image, TouchableHighlight } from 'react-native';
import backArrow from '../assets/icon_backarrow.png';
import agld from "../assets/AG_logo.png";
import { STATUS_BAR_HEIGHT } from '../constants';

export default function NavButtons(props) {
  const navigationOptions = {
    header: null,
  
  }
  return (
    <View style={styles.headerStyle}>
      
        <Image style={styles.headerLeft} source={backArrow} />
       
      <View style={styles.headerTitleStyle}>
        <Image style={styles.title} source={agld} />
      </View>
    </View>

  );

}

const styles = StyleSheet.create({

  headerStyle: {
    height: Platform.OS === 'android' ? 80 + STATUS_BAR_HEIGHT : 80,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 30

  },

  title: {
    height: 90,
    width: 100,
    resizeMode: 'contain'
    // marginBottom: 10 
  },
   

  headerTitleStyle: {
    // marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
    // color: 'white',
    // textAlign: 'left',
    // textAlignVertical: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    width: 300,
    height: 150,
    backgroundColor: '#021227',
    // margin: .5

  },
  headerLeft: {
   height: 40,
   width: 50,
   resizeMode: "contain",
    marginLeft: 3,

  }
})