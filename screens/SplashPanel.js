import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import WelcomeHeader from "../components/WelcomeHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";

import vendorSupply from "../assets/vendorAndSupplier.png";
import pictures from "../assets/picturesLabel.png";


const firebaseConfig = {
  apiKey: "AIzaSyB4c-dlOic0fYfcCUwNbfDtwxj-QDcujOA",
    authDomain: "hercone-8025f.firebaseapp.com",
    databaseURL: "https://hercone-8025f.firebaseio.com",
    projectId: "hercone-8025f",
    storageBucket: "",
    messagingSenderId: "329151475948"
};
firebase.initializeApp(firebaseConfig);

export default class SplashPanel extends Component {
  static navigationOptions = {
    header: null,
  
  }
  render(){

    var query = firebase.database().ref('/bars');
     
    console.log(
       query.once('value').then((snapshot) => {
         snapshot.forEach((bar) => {
           bar.getKey();
           bar.val();
          });
       })
    )
  

    const { navigate } = this.props.navigation;
    console.log(this.props, "this.props")
    return(
      <View style={styles.container}>
        <WelcomeHeader />
        
        <Title image={vendorSupply} />
      
        <View style={styles.menu}> 
          <TouchableHighlight  onPress={() => navigate('Destination')}>
            <Image
                style={styles.button}
                source={require('../assets/destinationLabel.png')}
              />
          </TouchableHighlight>

          <TouchableHighlight  onPress={() => navigate('Origin')}>
            <Image
              style={styles.button}
              source={require('../assets/originLabel.png')}
            />
          </TouchableHighlight> 

          <TouchableHighlight  onPress={() => navigate('FileUp')}>
            <Image
              style={styles.button}
              source={pictures}
            />
          </TouchableHighlight> 

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