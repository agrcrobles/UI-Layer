import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import WelcomeHeader from "../components/WelcomeHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";


import vendorSupply from "../assets/vendorAndSupplier.png";
import pictures from "../assets/picturesLabel.png";



export default class SplashPanel extends Component {
 
  render(){

    const { navigate } = this.props.navigation;
    console.log(this.props, "this.props")
    return(
      <View style={styles.container}>
       
      
        <View style={styles.menu}> 
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
      </View>
           
    ) 
  };
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
    button: {
      width: 250, 
      height: 50
    }
  });


// export default StackNavigator({
//   Splash: {
//     screen: Splash
//   }
// })