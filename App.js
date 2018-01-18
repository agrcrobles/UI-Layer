import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Origin from "./screens/Origin";
import Destination from "./screens/Destination";
import Splash from "./screens/SplashPanel";
import Confirm from "./screens/Confirm";
import ThankYou from "./screens/ThankYou";

const HercDemo = StackNavigator({
  Splash: { screen: Splash },
  Origin: { screen: Origin},
  Destination: { screen: Destination },
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
  
// TO-DO 1.  Change Vendor Supplier label -> Origin
// 2. Change Vault  label-> Destination 
// 3.  Make the HERC logo go to the now Origin / Destination (home) page
// 4. Make the now Origin page have the same functionality as the demo'd Destination page
// 5. Change the "Submit" button to "Next" under the manual inputs.
// 6. Add Skip button on the bottom to go directly to Image / File Uploader if User wants just this functionality
// 7.  Add Image Uploader and File Finder on the panel that is linked to the Next and Skip buttons. 
// 8. String the db to the panels for testing of uploading of files / images
// 9. Push to Expo by 1/22


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
