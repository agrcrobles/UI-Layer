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
        <View style={{ height: 400, width: 300, flexDirection: 'row' }}>
          <Text> Press to Create </Text>
        
        <TouchableHighlight onPress={() => navigate('Splash2')} >
          <Image style={{ justifyContent: 'center', height: 100, width: 100 }} source={agld} />
        </TouchableHighlight>
        </View>
        {/* <View style={styles.menu}> 
          <TouchableHighlight  onPress={() => navigate('InputMan',{image: 'destination'})}>
            <Image
                style={styles.button}
                source={require('../assets/destinationLabel.png')}
              />
          </TouchableHighlight>

          <TouchableHighlight  onPress={() => navigate('InputMan', {image: 'origin'})}>
            <Image
              style={styles.button}
              source={require('../assets/originLabel.png')}
            />
          </TouchableHighlight> 

          {/* <TouchableHighlight  onPress={() => navigate('FileUp')}>
            <Image
              style={styles.button}
              source={pictures}
            />
          </TouchableHighlight>  */}

      </View>


    )
  };
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     // width: "100%",
//     backgroundColor: '#021227',
//     // backgroundColor: '#fff',
//     alignItems: 'center',
//     // justifyContent: 'space-around',
//   },
//   menu: {
//     height: 300,
//     justifyContent: "space-around",
//     backgroundColor: '#021227',
//     // margin: .5,

//     },
//     button: {
//       width: 250, 
//       height: 50
//     }
//   });


// // export default StackNavigator({
// //   Splash: {
// //     screen: Splash
// //   }
// // })