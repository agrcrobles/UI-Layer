import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Title from "./MenuInputTitle";
import Inputs from "./Inputs"
import MenuHeader from "./MenuHeader";
import MenuLogo from "./MenuLogo";
import Submit from "./SubmitBtn";
import vault from "../assets/vaultLabel.png";

export default class VaultPanel extends Component {
  render(){
    return(
      <View style={styles.container}>
        <MenuHeader />
        <Title image={vault} />

        
          <Inputs />
        
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