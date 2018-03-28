import React, { Component } from "react";
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import backArrow from '../assets/icon_backarrow.png';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';

export default class BackButton extends Component {
  constructor(props){
    super(props)
  }
  _onPress = () => {
    const { navigate } = this.props.navigation;
    console.log('backArrowComponent onpress', this.props);
    navigate.goBack();
  }
  render(){
    return(
      <Image
      onPress={this._onPress}
      source={backArrow}
      style={{height: 50, width: 50}}
     
      />

    )
  } 
}
