import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import logo from "../assets/logo.png";
import label from "../assets/digiViewerLabel.png";
import persWal from "../assets/personalWalletLabel.png";
import stakeTxt from "../assets/stakeText.png";
import Submit from "../components/SubmitBtn";
import hLogo from "../assets/hLogo.png";
import feeLabel from "../assets/hercFeeLabel.png";
import viewBtn from "../assets/veiwBtn.png";
// import TouchableHeader from "../components/TouchableHeader";

// - make the "personal wallet" filled with 10,000 Hercs
// - make the menu drop down to another "My Hercs" wallet
//  - remove the hydra input field completely 
// -  change Stake to Fee
// -  put a "1" in the HERC field
// - View should open a native browser in app for the site http://anthembunker.com/(edited)
 
export default class DigiViewer extends Component {
     static navigationOptions = {
         header: null,
 
        }
    render(){
      const { navigate } = this.props.navigation;
      return(
          
        <View style={styles.container}>
          <View style={styles.header}>
           <TouchableHighlight onPress={() => navigate('MenuOptions')}>
             <Image source={logo} style={styles.menuLogo}/>
            </TouchableHighlight>  
            <Image source={label} style={styles.label} image={persWal} /> 
          </View>
        <Image source={stakeTxt} style={{height: 100, width: 320, resizeMode: 'contain'}}/>


        <View style={styles.wallet}>
            
            <Image source={persWal} style={styles.walletLabel}/>
            
            <View style={styles.walletBalance}>
                <Image source={hLogo} style={styles.icon}/> 
                <Text style={styles.input}>10,000</Text>
            </View>

     
        </View>
          <View style={styles.walletFee}>
          
            <Text style={styles.hercLabel}>MY HERC</Text>
              <View style={styles.feeBalance}>
                <Text style={styles.input}>1</Text>
                <Image source={feeLabel} style={styles.feeLabel}/> 
              </View>
            <TouchableHighlight style={{marginTop: 15}} onPress={() => navigate('Anthem')}>
              <Image source={viewBtn} style={styles.button}/>
              </TouchableHighlight>
            </View>
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
      width: 100,
      height: 30,
      textAlign: "center",
      color: "white", 
      alignSelf: "center",
      fontSize: 20.2,
      fontWeight: "600",
      justifyContent: "center",
      // marginRight: 10,
      // marginTop: 7
    },
    icon: {
        height: 50,
        width: 60, 
        alignSelf: 'flex-start',
        marginLeft: 10
        
    },
    feeLabel: {
        height:50,
        width: 125,
        resizeMode: 'cover'
    },
    wallet: {
      padding: 3,
      backgroundColor: "#02182d",
      height: 150,
      width: '80%',
      justifyContent: 'flex-start',
      alignItems: "center",
      margin:5
    },
    walletBalance: {
       width: '100%', 
        flexDirection: 'row',
        backgroundColor: '#14283f',
        padding: 2,
        justifyContent: 'space-between'
        
        // height: 

    },
    walletLabel: {
        width: '100%',
        height: 60,
        resizeMode: 'cover',
       
        justifyContent:'center',
        alignItems: 'center',
        
    },
    walletFee: {
      width: '80%',
      height: 200,
      // justifyContent: 'center',
      backgroundColor: '#06112e',
      padding: 3,
      alignItems: 'center',
      margin: 7
    },
    feeBalance: {
      width: '100%', 
       flexDirection: 'row',
       backgroundColor: '#14283f',
       padding: 2,
       justifyContent: 'space-between'
       
       // height: 

   },
    hercLabel: {
      textAlign: 'left',
      alignSelf: 'flex-start',
     
      alignItems: 'flex-end',
      color:'white',
      height: 20,
      width: 120
    },
    button: {
      width: 250, 
      height: 50,
      marginTop: 30
    },
    })