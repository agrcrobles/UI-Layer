import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import TouchableHeader from "../components/TouchableHeader";
import Welcome from "../components/Welcome";
import Title from "../components/MenuInputTitle";
import destination from "../assets/destinationLabel.png";
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

export default class ThankYou extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  
  }
  
  componentDidMount(){
    const id = this.props.navigation.state.params.id;
  
  
  }
  
  render(){
  const { navigate } = this.props.navigation;
  console.log(this.props.navigation.state.params);
  let amt = this.props.navigation.state.params;
  //let image = this.props.navigation.state.params.image
  
    return(
      <View style={styles.container}>
      <TouchableHeader onPress={() =>{navigate('Splash')}}/>
      <Title image={destination} />

      <Text style={styles.input}>
      Thank You For Your Submission</Text>

      <ScrollView contentContainerStyle={styles.menu}>
      <View style={styles.content}>
        {Object.keys(amt).map((keyName, keyIndex) => {
          return(
          <View key={keyIndex} style={styles.view}>
            <Text style={styles.input}>{keyName}</Text>
            <Text style={styles.value}> {amt[keyName]}</Text>
          </View>
          )
        })}
      </View>
    </ScrollView>
      {/* <ScrollView contentContainerStyle={styles.menu}>
          <View style={styles.content}>
            {Object.keys(amt).map((keyName, keyIndex) => {
              return(
                <View key={keyIndex} style={styles.view}>
                  <Text style={styles.input}>{keyName}</Text>
                  <Text style={styles.value}> {amt[keyName]}</Text>
                </View>
              )
            })}
          </View>
        </ScrollView> */}
      </View>
    )
  } 
    }
  
    
 
 