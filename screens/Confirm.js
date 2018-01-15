import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import Title from "./MenuInputTitle";
import WelcomeHeader from "./WelcomeHeader";
import Submit from "./SubmitBtn";
import vault from "../assets/vaultLabel.png";
import SubOrBack from "./BackOrSubmitButtons";

export default class Confirm extends Component  {
  constructor(props) {
    super(props);
  }
  componentDidMount(){

  }
   _onPressBack(){
     Alert.alert("you touched BAck")
   }
   
   _onPressSubmit(){
    Alert.alert("you touched Submit")

   }
  
  render(){
    console.log(this.props.navigation.state.params);
    return(

      <View style={styles.container}>
        <WelcomeHeader />
        <Title image={vault} />
        <Text style={styles.confirm}>CONFIRM</Text>

       <ScrollView contentContainerStyle={styles.view}> 
          <Text style={styles.input}>Serial Number: </Text> 
            <Text style={styles.value}>{this.props.values.serial}</Text>
          <Text style={styles.input}>Manufacturer:</Text>
            <Text style={styles.value}>{this.props.values.manufacturer}</Text>
          <Text style={styles.input}>Purity:</Text>
            <Text style={styles.value}>{this.props.values.purity}</Text>
          <Text style={styles.input}>Weight:</Text>
            <Text style={styles.value}>{this.props.values.weight}</Text>
          <Text style={styles.input}>AGID:</Text>
            <Text style={styles.value}> {this.props.values.AGID}</Text>
          <Text style={styles.input}>RFID:</Text>
            <Text style={styles.value}> {this.props.values.RFID}</Text>
       </ScrollView>
        
      <View style={styles.navbtns}>  
       <TouchableHighlight onPress={this._onPressBack}>
        <Image
          style={{width: 50, height: 50}}
          source={require('../assets/icon_backarrow.png')}
        />
      </TouchableHighlight>
     
      <TouchableHighlight onPress={this._onPressSubmit}>
        <Image
          style={{width: 120, height: 70, resizeMode: "cover"}}
          source={require('../assets/submitButton.png')}
        />
      </TouchableHighlight>
      </View>
      </View>  
       
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    // paddingTop: 30,
    width: "100%",
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
      width:"100%",
      height: 400,
      alignItems: "center",
      backgroundColor: "blue",
      justifyContent: "space-between",
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
    
    paddingRight:15,
    paddingLeft: 15
  }

});