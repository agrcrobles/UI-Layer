import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import TouchableHeader from "../components/TouchableHeader";
import menuOptions from "../components/buttons/menuOptions.png";
import picture from "../assets/picturesLabel.png";
import styles from "../assets/styles";
import { StackNavigator } from 'react-navigation';

export default class FileThanks extends Component {
  constructor(props) {
    super(props);
  }
 
 
  
  render(){
    const { navigate } = this.props.navigation;
 
  
  
  
    return(
        <View style={styles.container}>
            <Text style={styles.thanks}>Thank You for Your Submission</Text>
            
            <TouchableHeader onPress={() => navigate('MenuOptions')} />
              <Image style={styles.button} source={menuOptions}/>
            
            


        </View>

        )   
     } 
    }
  
    
 
  