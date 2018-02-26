import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';

import agld from "../assets/AG_logo.png";



export default class Splash1 extends Component {

  render() {

    const { navigate } = this.props.navigation;
    console.log(this.props, "this.props")
    return (
      <View style={styles.container}>
            <Text style={styles.assetMenuLabel}> Press Asset to Select </Text>
        <View style={styles.assetMenu}>

            <TouchableHighlight style={{ justifyContent: 'center', height: 100, width: 100 }} onPress={() => navigate('Splash2')} >
              <Image style={styles.assetButton} source={agld} />
            </TouchableHighlight>
          </View>
        </View>
      


    )
  };
}