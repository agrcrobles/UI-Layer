import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import logo from "../assets/teeLabel.png";
import params from "../assets/igvcParamsLabel.png";
import Title from "../components/MenuInputTitle";
import personal from "../assets/personalLegend.png";
import Submit from "../components/SubmitBtn";
// - Make Name an input field
// - Make Symbol an input field
// - Lock Decimals to "18"
// - Lock Total Market Supply to "40,000" <- this number subject to change after
 
export default class Tee extends Component {
     static navigationOptions = {
         header: null,
 
        }
    render(){
      const { navigate } = this.props.navigation;
      return(
          
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={logo} style={styles.menuLogo}/>
            <Image source={params} style={styles.label} image={personal} /> 
          </View>
         
          <View style={styles.legendInput}>
            <Text style={styles.inputLabel}> Name </Text>
            <TextInput style={styles.input}></TextInput>
         </View>
         
         <View style={styles.legendInput}>
            <Text style={styles.inputLabel}> Symbol </Text>
            <TextInput style={styles.input}></TextInput>
         </View>
         
         <View style={styles.legendInput}>
            <Text style={styles.inputLabel}> Decimals </Text>
            <Text style={styles.input}>18</Text>
         </View>
         
         <View style={styles.legendInput}>
            <Text style={styles.inputLabel}>Total Market Supply</Text>
            <Text style={styles.input}>40,000</Text>
         </View>
           
          
         

         <Submit />
          </View>


         )};
}

 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      // width: "100%",
      backgroundColor: '#02182d',
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    header: {
      height: "27%",
      width: 360,
      backgroundColor: '#02182d',
      alignSelf: 'center',
      alignItems: 'center',
      // margin: 5


    },
    menuLogo: {
        justifyContent: "center",
        alignItems: "center",
        height: 120,
        width: 200,
        resizeMode: "contain",
        backgroundColor: '#02182d',
      },
      label: {
        height: 50,
        width: '80%',
        resizeMode: 'contain'
      },
    legendInput: {
      // alignSelf: "center",
      padding: 5,
      width: 330, 
      height: 90,
      // alignItems: 'center',
      margin: 1,
      marginBottom: 5,
      backgroundColor: "#14283f",
      justifyContent:"space-between", 
      
      borderRadius: 4
      },
    input:{
      backgroundColor: '#14283f',
      width: 200,
      height:50,
      textAlign: "center",
      color: "white", 
      alignSelf: "center",
      fontSize: 20.2,
      fontWeight: "600"
    },
    icon: {
        height: 30,
        width: 80, 
        alignSelf:"center"
    },
    bigButton: {

      backgroundColor: "#14283f",
      height: 80,
      width: 350,
      justifyContent:"center",
      alignItems: "center",
      marginBottom: 10
    },
    inputLabel: {
      textAlign: 'right',
      alignSelf: 'flex-end',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      color:'white',
      height: 20,
      width: 120
    }
    })