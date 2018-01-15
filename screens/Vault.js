import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Title from "../components/MenuInputTitle";
import Inputs from "../components/Inputs"
import WelcomeHeader from "../components/WelcomeHeader";
import MenuLogo from "../components/MenuLogo";
import Submit from "../components/SubmitBtn";
import vault from "../assets/vaultLabel.png";

export default class VaultPanel extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      values: {
        serial: "",
        manufacturer: "",
        purity: "",
        weight: "",
        AGID: "",
        RFID: ""  
      }
    } 
  };

  render(){
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

              
            </View>       
        
        
        
        <Submit onPress={() => navigate('Confirm', {values: this.state.values})} />
        
      
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
    justifyContent: 'center',
  }
});