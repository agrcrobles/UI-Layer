import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Title from "../components/MenuInputTitle";
import Inputs from "../components/Inputs"
import WelcomeHeader from "../components/WelcomeHeader";
import MenuLogo from "../components/MenuLogo";
import Submit from "../components/SubmitBtn";
import vault from "../assets/vaultLabel.png";
 import { StackNavigator, } from 'react-navigation';

export default class VaultPanel extends Component {
  static navigationOptions = {
    header: null
  
  }
  constructor(props){
    super(props);
    
    this.state = {
      
        serial: "",
        manufacturer: "",
        purity: "",
        weight: "",
        AGID: "",
        RFID: ""  
      }
    } 
  

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <WelcomeHeader />
        <Title image={vault} />
      
          <View contentContainerStyle={styles.menu}> 
              <TextInput
                  style={styles.input}
                  onChangeText={(serial) => this.setState({serial})}
                  placeholder="Serial Number"
                />
                
                <TextInput
                  style={styles.input}
                  onChangeText={(purity) => this.setState({purity})}
                  placeholder="Purity"
                
                />
                <TextInput
                  style={styles.input}
                  onChangeText={(manufacturer) => this.setState({manufacturer})}
                  placeholder="Manufacturer"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={(weight) => this.setState({weight})}
                  placeholder="Weight"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={(AGID) => this.setState({AGID})}
                  placeholder="AGID"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={(RFID) => this.setState({RFID})}
                  placeholder="RFID"
                />
              
              <Submit onPress={() => {
                console.log(this.state);
                navigate('Confirm', {values: this.state})}} 
                />

              
            </View>       
        
        
        
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    // width: "100%",
    backgroundColor: 'purple',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    height: 600,
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'yellow',
  },
   
   
  
  input: {
    width: 200, 
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