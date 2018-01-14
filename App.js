import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import WelcomeHeader from "./components/WelcomeHeader";
import Welcome from "./components/Welcome";
import welcome from "./assets/welcome.png";
import Vault from "./components/Vault";
import Splash from "./components/SplashPanel";
import Inputs from "./components/Inputs";

// import NavButtons from "./components/Header_LogoButtons";

export default class App extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
       
      serial: "serial",
      manufacturer: "",
      purity: "",
      weight: "",
      AGID: "",
      RFID: ""  
    }
};
  render() {

    return (

        <Inputs />
        // <View style={styles.page}>
    
        //   <MenuHeader />
         
        //   <Image source={require('./assets/vaultLabel.png')} style={{width: 250, height: 50}} />
        //    <ScrollView contentContainerStyle={styles.menu}>
        //       <Inputs />
           
        //     <Submit />
        //     </ScrollView>          
   
        // </View>
     );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center', 
    alignItems:'center',
    alignContent: 'center',
    // maxWidth: 1024,
    // minWidth: 235, 
    width: "100%",
    
    backgroundColor: '#021227',
    
  },
  menu: {
    margin: .5,
    height: 500,
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: 'blue',
  },

  menuLabel: {
    alignSelf: 'center',
    height: 50,
    width: 200,
    
  }
  });
  // header: {
  //   flex: 1,
  //   position: "absolute",
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  //   margin: .5,
  //   height: 200,
  //   width: "80%",
  //   backgroundColor: '#021227',
  //   marginTop: 2
  //   // maxWidth: 500,
  //   // maxHeight: 250,
    
  //   // width: 1000
    
  // },
  // menu: {
  //   height: 150,
  //   justifyContent: "space-around",
  //   backgroundColor: '#2cb6ed'
  //   }
