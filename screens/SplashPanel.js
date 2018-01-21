import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import WelcomeHeader from "../components/WelcomeHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";
import welcome from "../assets/welcome.png";


export default class SplashPanel extends Component {
  static navigationOptions = {
    header: null,
  
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <WelcomeHeader />
        
        <Title image={welcome} />
      
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
              source={require('../assets/skipButton.png')}
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