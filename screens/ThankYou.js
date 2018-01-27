import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import TouchableHeader from "../components/TouchableHeader";
import Welcome from "../components/Welcome";
import Title from "../components/MenuInputTitle";
import destination from "../assets/destinationLabel.png";
import { StackNavigator } from 'react-navigation';

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
  
    
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    // width: "100%",
    backgroundColor: '#021227',
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  menu: {
    height: 600,
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#021227',
  },
  input: {
    width: 400, 
    height: 50,
    textAlign: "center",
    backgroundColor: "#132c4a", 
    margin: .5,
    fontSize: 20.2,
    fontWeight: "600",
    borderColor: "#142535",
    color: "white",
    borderWidth: 1
  },
  view: {
    width:"80%",
    height: 60,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#021227",
      // marginBottom: 1
    },
    value: {
    
      color: "white",
      fontSize: 20,
      fontWeight: "200",
      textAlign: "center",
      justifyContent: "center",
      height: 25,
      width: 100
      
    },
    content: {
      width:"100%",
      padding: 2,
      justifyContent: "space-around"
    }
});