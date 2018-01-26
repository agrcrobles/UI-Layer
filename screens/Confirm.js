import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import Title from "../components/MenuInputTitle";
import WelcomeHeader from "../components/WelcomeHeader";
import Submit from "../components/SubmitBtn";
import destination from "../assets/destinationLabel.png";
import { StackNavigator } from 'react-navigation';

import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyB4c-dlOic0fYfcCUwNbfDtwxj-QDcujOA",
//     authDomain: "hercone-8025f.firebaseapp.com",
//     databaseURL: "https://hercone-8025f.firebaseio.com",
//     projectId: "hercone-8025f",
//     storageBucket: "hercone-8025f.appspot.com",
//     messagingSenderId: "329151475948"
// };
// firebase.initializeApp(firebaseConfig);

export default class Confirm extends Component  {
  
  static navigationOptions = {
    header: null
  }
  
  constructor(props) {
    super(props);
    
     
  }
  
  componentDidMount(){
  
  
  }
 
  // _onPressBack(){
  //    Alert.alert("you touched BAck")
  //  }
   
  //  _onPressSubmit(amt){
  //   const { navigate } = this.props.navigation;
  //     console.log(amt);
  //     let id = amt.Bar_Id;
  //     let serial = amt.Bar_Serial;
  //     var database = firebase.database();
  //     var barRef = database.ref().child(id);
          
  //     barRef.set({
  //       Bar_Serial: serial
        // Weight: amt.Weight
        // Vault_Location: amt.Vault_Location,
        // Purity: amt.Purity,
        // Date_Received: amt.Date_Received,        
        // Date_Processed: amt.Date_Processed,
        // Mint: amt.Mint,
        // Supplier: amt.Supplier,  
      
     // });

      // navigate('ThankYou', amt={Bar_Id: amt.Bar_Id, Bar_Serial: amt.Bar_Serial});
               
     
   
    
    render(){
      // debugger;
      const { navigate } = this.props.navigation;
      let serial = this.props.navigation.state.params.amt.Bar_Serial;
      const id = this.props.navigation.state.params.amt.Bar_Id;
      // let serial = amt.Bar_Serial;
      // const image = this.props.navigation.state.params.image;
      var database = firebase.database();
      var barRef = database.ref('bars').child(id);
      // let id = amt.Bar_Id;
    return(
     
      <View style={styles.container}>
        <WelcomeHeader />
        <Title image={destination} />
        <Text style={styles.confirm}>CONFIRM</Text>
               
        <Text style={styles.input}>Bar ID: {id}</Text>
        <Text style={styles.value}>Bar Serial {serial}</Text>

        {/* <ScrollView contentContainerStyle={styles.menu}>
          <View style={styles.content}>
            {Object.keys(amt).map((keyName, keyIndex) => {
              return(
              <View key={keyIndex} style={styles.view}>
                <Text style={styles.input}>{keyName}</Text>
                <Text style={styles.value}> {amt[keyName]}</Text>
              </View>
              )
            })}
          </View>
        </ScrollView> */}

      <TouchableHighlight onPress={() => {
        barRef.set({
          Bar_Serial: serial,
          image: destination

        })
        navigate('ThankYou', amt={Bar_Id: id, Bar_Serial: serial})
        }}
        >
        <Image
          style={{width: 200, height: 70, resizeMode: "cover"}}
          source={require('../assets/submitButton.png')}
          />
      </TouchableHighlight>
    
        
       </View>
       
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021227',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    height: 500,
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'blue',
    paddingTop: 5,
    paddingBottom: 5,
  },
  scrollContent: {
    flex: 1,
    padding: 2,
    justifyContent: "space-around"
  }, 
  view: {
    width: 200,
    height: 60,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#021227",
      margin: .5
      // marginBottom: 1
    },
  input: {
    width: 170, 
    height: 30,
    textAlign: "center",
    backgroundColor: "#132c4a", 
    margin: .5,
    fontSize: 25,
    fontWeight: "600",
    borderColor: "#142535",
    color: "yellow",
    borderWidth: 1
  },
 
  confirm: {
    fontSize: 40,
    color: "red",
  },
  value: {
    
    color: "white",
    fontSize: 20,
    fontWeight: "200",
    textAlign: "center",
    justifyContent: "center",
    height: 25,
    width: 100
    
  },
  button: {
  height: 70,
  width: 120,
  resizeMode: 'cover'
  }
 
 

});