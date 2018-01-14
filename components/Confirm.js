import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Title from "./MenuInputTitle";
import Inputs from "./Inputs"
import MenuHeader from "./MenuHeader";
import MenuLogo from "./MenuLogo";
import Submit from "./SubmitBtn";
import vault from "../assets/vaultLabel.png";

export default class VaultPanel extends Component {
  // componentDidMount(){
  //   let values = this.state; 
  // }
  render(){
    return(
      <View style={styles.container}>
        <MenuHeader />
        <Title image={vault} />

        <View contentContainerStyle={styles.menu}> 
        <Text>Purity: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(purity) => this.setState({purity})}
            value={this.props.state.purity}
          />
          <Text>Manufacturer: {this.props.state.manufacturer}</Text>
            {/* style={styles.input}
            onChangeText={(manufacturer) => this.setState({manufacturer})}
            value={this.props.manufacturer}
          /> */}
          {/* <TextInput
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
          /> */}
         </View>
        
        <Submit />
        
      
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