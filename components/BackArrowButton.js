import React, { Component } from "react";
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import backArrow from '../assets/icon_backarrow.png';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';

export default class BackButton extends Component {
  constructor(props){
    super(props)
  }
  // _onPress = () => {
  //   console.log('backArrowComponent onpress', this.props);
  //   navigate.goBack();
  // }
  render(){
    // const { navigate } = this.props.navigation;
    return(
      <Image
      
      source={backArrow}
      style={{height: 50, width: 50}}
     
      />

    )
  } 
}
