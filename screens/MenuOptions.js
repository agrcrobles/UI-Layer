import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
// import WelcomeHeader from "../components/WelcomeHeader";
import menuOpts from "../components/buttons/menuOptions.png";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";
import logo from "../assets/hercLogoBreak.png";
import menuOptions from "../components/buttons/menuOptions.png";
import home from "../components/buttons/homeBtn.png";
import lore from "../components/buttons/loreBtn.png";
import hiprBtn from "../components/buttons/hiprBtn.png";
import igvc from "../components/buttons/igvc.png";
import verifyBtn from "../components/buttons/verifyBtn.png";
import digiView from "../components/buttons/digitalViewBtn.png";
import blockScan from "../components/buttons/blockScannerBtn.png";
import settings from "../components/buttons/settingsBtn.png";
import wallet from "../components/buttons/walletBtn.png";



export default class MenuOptions extends Component {
  static navigationOptions = {
    header: null,
  
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
      <Image source={logo} style={styles.menuLogo}/>
        <Title image={menuOpts} />
          
          <View style={styles.menu}>
        
           
        
            <TouchableHighlight onPress={() => navigate('Welcome')}>
              <Image style={styles.button}
                  
                  source={home}
                />
            </TouchableHighlight>

            <TouchableHighlight  onPress={() => navigate('FileUp')}>
            <Image
              style={styles.button}
              source={wallet}
            />
          </TouchableHighlight> 
          
          {/* <TouchableHighlight  onPress={() => navigate('Origin')}>
            <Image
              style={styles.button}
              source={lore}
            />
          </TouchableHighlight>  */}

          <TouchableHighlight  onPress={() => navigate('FileUp')}>
            <Image
              style={styles.button}
              source={hiprBtn}
            />
          </TouchableHighlight> 
          
          <TouchableHighlight  onPress={() => navigate('Legend')}>
            <Image
              style={styles.button}
              source={igvc}
            />
          </TouchableHighlight> 
          
          <TouchableHighlight  onPress={() => navigate('FileUp')}>
            <Image
              style={styles.button}
              source={verifyBtn}
            />
          </TouchableHighlight> 
          
          <TouchableHighlight  onPress={() => navigate('FileUp')}>
            <Image
              style={styles.button}
              source={digiView}
            />
          </TouchableHighlight> 
          
          <TouchableHighlight  onPress={() => navigate('FileUp')}>
            <Image
              style={styles.button}
              source={blockScan}
            />
          </TouchableHighlight> 
                  
          <TouchableHighlight  onPress={() => navigate('FileUp')}>
            <Image
              style={styles.button}
              source={settings}
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
    height: 450,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#021227'
    // paddingTop: 50
    // margin: .5,
  
    },
    button: {
      width: 350, 
      height: 50,
      alignItems: 'center',
      margin: 1
      
    },
    btnImg: {
        resizeMode: 'cover',

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
    menuLogo: {
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    width: 200,
    resizeMode: "contain",
    backgroundColor: '#021227',
    // margin: .5
       
  }
 
  });