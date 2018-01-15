import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Vault from "./screens/Vault";
import Splash from "./screens/SplashPanel";
import Confirm from "./screens/Confirm";
import ThankYou from "./screens/ThankYou";

const HercDemo = StackNavigator({
  Splash: { screen: Splash },
  Vault: { screen: Vault },
  Confirm: { screen: Confirm },
  ThankYou: { screen: ThankYou}
 
  }
)

export default class App extends Component {
  static navigationOptions = { header: null }
    render() {
      return <HercDemo />
    }
  }
  



  // constructor(props){
  //   super(props);
  //   this.state = {
  //     values: {
  //           serial: "kix",
  //           manufacturer: "hello",
  //           purity: "changed",
  //           weight: "5pound",
  //           AGID: "changedagain",
  //           RFID: "9999"  
  //         }
  //       }
  //     }     
  // render() {
   
  //   return (
  //     <ScrollView contentContainerStyle={styles.container}>
  //       <Splash />
  //       <Vault />
  //       <Confirm values={this.state.values} />
    

  //     </ScrollView>
        // <Confirm state={this.state}/>
        // <Inputs />
        // <View style={styles.page}>
    
        //   <MenuHeader />
         
        //   <Image source={require('./assets/vaultLabel.png')} style={{width: 250, height: 50}} />
        //    <ScrollView contentContainerStyle={styles.menu}>
        //       <Inputs />
           
        //     <Submit />
        //     </ScrollView>          
   
        // </View>

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 800
//   },
//   page: {
//     flex: 1,
//     paddingTop: 30,
//     justifyContent: 'center', 
//     alignItems:'center',
//     alignContent: 'center',
//     // maxWidth: 1024,
//     // minWidth: 235, 
//     width: "100%",
    
//     backgroundColor: '#021227',
    
//   },
//   menu: {
//     margin: .5,
//     height: 500,
//     width: "90%",
//     justifyContent: "space-around",
//     alignItems: "center",
//     backgroundColor: 'blue',
//   },

//   menuLabel: {
//     alignSelf: 'center',
//     height: 50,
//     width: 200,
    
//   }
//   });
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
