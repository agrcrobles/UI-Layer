import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import logo from "../assets/hercLogoBreak.png";
import Title from "../components/MenuInputTitle";
import personal from "../assets/personalLegend.png";

 export default class Legend extends Component {
     static navigationOptions = {
         header: null,
 
        }
    render(){
            
          const { navigate } = this.props.navigation;
         return(
            <View style={styles.container}>
           
            <Image source={logo} style={styles.menuLogo}/>
            
            <Title image={personal} /> 
            <TextInput style={styles.legendInput} />
            
            
            </View>

         )};
}

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      // width: "100%",
      backgroundColor: '#021227',
      // backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'space-around',
    },
    menuLogo: {
        justifyContent: "center",
        alignItems: "center",
        height: 140,
        width: 200,
        resizeMode: "contain",
        backgroundColor: '#021227',
      },
      legendInput: {
        width: 350, 
        height: 80,
        alignItems: 'center',
        margin: 1,
        backgroundColor: "blue"
        
      }
    })