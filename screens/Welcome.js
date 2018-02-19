import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import WelcomeHeader from "../components/WelcomeHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";
import welcome from "../assets/welcome.png";
import aws_exports from '../src/aws-exports.js';
import Amplify , { API } from 'aws-amplify';
Amplify.configure(aws_exports);
console.log(aws_exports);


export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: ""
    }
  }
  static navigationOptions = {
    header: null,
  
  }

  _onPress(pin){
    
     console.log(pin)
     
  //   let apiName = 'barInf';
  //   let path = 'bars';
  //   let myInit = {
  //     headers: {
  //       bar_Id: pin,
  //       bar_Id: {
  //         bar_Serial: '5432'
  //       }
  //     }
  //   }
  //   API.post(apiName, path, myInit).then(response => {
  //     console.log(response);
  //   })

  // }
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <WelcomeHeader />
          <View style={styles.menu}>
        
            <TextInput onChangeText={(pin) => this.setState({pin})} placeholder="PIN" underlineColorAndroid='transparent' style={styles.input}/>
        
            <TouchableHighlight style={styles.welcomeBtn} onPress={() => navigate('MenuOptions')}>
              <Image
                  style={styles.button}
                  source={welcome}
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
      height: 50
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
