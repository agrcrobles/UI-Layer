import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import WelcomeHeader from "../components/WelcomeHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";
import agld from "../assets/AG_logo.png";
import arrow from "../assets/icon_backarrow.png";
import styles from "../assets/styles";
import AgldHead from "../components/NavButtons";
import vendorSupply from "../assets/vendorAndSupplier.png";
import pictures from "../assets/picturesLabel.png";




export default class Splash2 extends Component {
  

  render() {



    const { navigate } = this.props.navigation;
    console.log(this.props, "this.props")
    return (
      <View style={styles.container}>
 
      {/* // <View style={styles.container}>
      //   <TouchableHighlight onPress={navigate(() => 'MenuOptions')}>
      //     <Image source={agld} style={styles.headerLogo} />
      //   </TouchableHighlight> */}
        
          <Image style={styles.assetButton} source={agld} />
          
          
        
        <View style={{height: 200, width: '80%', alignItems:'center', backgroundColor: 'yellow', justifyContent:'space-between'}}>
          <TouchableHighlight onPress={() => navigate('Splash3', { location: 'destination' })}>
            <Image
              style={styles.menuInputTitle}
              source={require('../assets/destinationLabel.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('Splash3', { location: 'origin' })}>
            <Image
              style={styles.menuInputTitle}
              source={require('../assets/originLabel.png')}
            />
          </TouchableHighlight>
        </View>
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

//   },
//   button: {
//     width: 250,
//     height: 50
//   }
// });


// export default StackNavigator({
//   Splash: {
//     screen: Splash
//   }
// })