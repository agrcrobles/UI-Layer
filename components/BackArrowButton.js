import React, { Component } from "react";
import { View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import backArrow from '../assets/icon_backarrow.png';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';

const BackButton = ({ navigation }) => {
  const onPress = () => {
  navigation.goBack();
  console.log('gooooogg');

  //  console.log('presssssed');
  // }
  return (
    <TouchableHighlight
      onPress={onPress}>
      <Image
        source={backArrow}
        style={{ height: 50, width: 50 }}
      />
    </TouchableHighlight>
  )

}
}
export default BackButton;
//   // _onPress = () => {
//   //   console.log('backArrowComponent onpress', this.props);
//   //   navigate.goBack();
//   // }
//   render(){
//     // const { navigate } = this.props.navigation;
//     return(
//       <Image

//       source={backArrow}
//       style={{height: 50, width: 50}}

//       />

//     )
//   } 
// }
