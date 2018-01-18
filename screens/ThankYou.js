import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import WelcomeHeader from "../components/WelcomeHeader";
import Welcome from "../components/Welcome";
import Title from "../components/MenuInputTitle";
import vault from "../assets/vaultLabel.png";
import { StackNavigator } from 'react-navigation';

export default class ThankYou extends Component {
  static navigationOptions = {
    header: null
  
  }
  render(){
  console.log(this.props.navigation.state.params);
  const submitted = this.props.navigation.state.params;
  
    return(
      <View style={styles.container}>
      <WelcomeHeader />
      <Title image={vault} />

      <Text style={styles.input}>
      Thank You For Your Submission</Text>
      <Text style={styles.input}>Serial Number: {submitted.values.serial}</Text>
      <Text style={styles.input}>Manufacturer: {submitted.values.manufacturer}</Text>
      <Text style={styles.input}>Purity: {submitted.values.purity}</Text>
      <Text style={styles.input}>Weight: {submitted.values.weight}</Text>
      <Text style={styles.input}>RFID: {submitted.values.RFID}</Text>
      <Text style={styles.input}>AGID: {submitted.values.AGID}</Text>
      </View>
    )
  } 
    }
  
    
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    // width: "100%",
    backgroundColor: '#021227',
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  menu: {
    height: 600,
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#021227',
  },
  input: {
    width: 400, 
    height: 50,
    textAlign: "center",
    backgroundColor: "#132c4a", 
    margin: .5,
    fontSize: 20.2,
    fontWeight: "600",
    borderColor: "#142535",
    color: "white",
    borderWidth: 1
  }
});