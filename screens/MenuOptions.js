import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
// import WelcomeHeader from "../components/WelcomeHeader";
import menuOpts from "../components/buttons/menuOptions.png";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";
import MenuHeader from "../components/MenuHeader";
import home from "../components/buttons/homeBtn.png";


export default class MenuOptions extends Component {
  static navigationOptions = {
    header: null,
  
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <MenuHeader />
        <Title image={menuOpts} />
          
          <View style={styles.menu}>
        
           
        
            <TouchableHighlight style={styles.button} onPress={() => navigate('Destination')}>
              <Image
                  style={styles.button}
                  source={home}
                />
            </TouchableHighlight>
          </View>
          {/* <TouchableHighlight  onPress={() => navigate('Origin')}>
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
          </TouchableHighlight>  */}

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
    height: 400,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#021227'
    // paddingTop: 50
    // margin: .5,
  
    },
    button: {
      width: 250, 
      height: 50,
      resizeMode: 'cover'
    },
    input: {
      width: 150, 
      height: 40,
      textAlign: "center",
      backgroundColor: "#132c4a", 
      // margin: .5,
      fontSize: 20.2,
      fontWeight: "600",
      borderColor: "#142535",
      color: "white",
      borderWidth: 1,
      marginTop: 100
    },
    welcomeBtn: {
    //  marginTop: 10
    }
  });