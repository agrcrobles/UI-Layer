import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import Title from "../components/MenuInputTitle";
import WelcomeHeader from "../components/WelcomeHeader";
import Submit from "../components/SubmitBtn";
import vault from "../assets/vaultLabel.png";
import SubOrBack from "../components/BackOrSubmitButtons";

export default class Confirm extends Component  {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    console.log(this.props.values)

  }
   _onPressBack(){
     Alert.alert("you touched BAck")
   }
   
   _onPressSubmit(){
    Alert.alert("you touched Submit")

   }
  
  render(){
    // debugger;
    console.log(this.props.navigation.state.params);

    let amt = this.props.navigation.state.params;
    console.log(amt.values.serial, "values serial");
    let serial = amt.values.serial;
    console.log(serial, "serial")
    
    return(
     
      <View style={styles.container}>
        <WelcomeHeader />
        <Title image={vault} />
        <Text style={styles.confirm}>CONFIRM</Text>

      <ScrollView contentContainerStyle={styles.view}>
          <Text style={styles.input}>Serial Number: {amt.values.serial}</Text> 
            <Text style={styles.value} value={serial}>{serial}</Text>
          <Text style={styles.input}>Manufacturer:</Text>
            <Text style={styles.value}>{amt.values.manufacturer}</Text>
          <Text style={styles.input}>Purity:</Text>
            <Text style={styles.value}>{amt.values.purity}</Text>
          <Text style={styles.input}>Weight:</Text>
            <Text style={styles.value}>{amt.values.weight}</Text>
          <Text style={styles.input}>AGID:</Text>
            <Text style={styles.value}> {amt.values.AGID}</Text>
          <Text style={styles.input}>RFID:</Text>
            <Text style={styles.value}> {amt.values.RFID}</Text>
       </ScrollView>
        
      
      <TouchableHighlight onPress={this._onPressSubmit}>
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
    
    // paddingTop: 30,
    width: "100%",
    height: 400,
    backgroundColor: 'purple',
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    width: 170, 
    height: 30,
    textAlign: "center",
    backgroundColor: "#132c4a", 
    margin: .5,
    fontSize: 20.2,
    fontWeight: "600",
    borderColor: "#142535",
    color: "yellow",
    borderWidth: 1
  },
  view: {
    flex: 1,
      // width:"80%",
      height: 400,
      alignItems: "center",
      backgroundColor: "blue",
      justifyContent: "space-around",
      marginBottom: 1
    },
  confirm: {
    fontSize: 40,
    color: "red",
  },
  value: {
    color: "white",
    fontSize: 25,
    fontWeight: "600"
    
  },
  button: {
  height: 70,
  width: 120,
  resizeMode: 'cover'
  },
  navbtns: {
    flexDirection: "row",
    width: "90%",
    height: 60,
    justifyContent: "space-between",
    backgroundColor: "grey",    
    marginTop: 1,
    paddingRight:15,
    paddingLeft: 15
  },
  list: {
    height: 600,
    width: "80%",
    justifyContent: "space-around"
  }

});