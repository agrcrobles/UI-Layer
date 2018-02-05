import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import TouchableHeader from "../components/TouchableHeader";

import picture from "../assets/picturesLabel.png";
import { StackNavigator } from 'react-navigation';

export default class FileThanks extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  
  }
  
 
  
  render(){
    const { navigate } = this.props.navigation;
 
  
  
  
    return(
        <View style={styles.container}>
            <TouchableHeader onPress={() => navigate('MenuOptions')} />
        
            <Text style={styles.thanks}>Thank You for Your Submission</Text>
        </View>

        )   
     } 
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
        thanks:{
            width: 300,
            height: 60,
            fontSize: 20.2,
            fontWeight: "600",
            borderColor: "#021227",
            color: "white",
          },
    })