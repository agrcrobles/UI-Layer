import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import TouchableHeader from "../components/TouchableHeader";
import Welcome from "../components/Welcome";
import Title from "../components/MenuInputTitle";
import origin from "../assets/originLabel.png";
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

  }
  
  render(){
  const { navigate } = this.props.navigation;
  console.log(this.props.navigation.state.params);
  let image;
  let values = this.props.navigation.state.params.values;
  console.log(values, 'valuesthanks')
  
  
 
  values.location === 'origin' ? image = origin : image = destination;
  //let image = this.props.navigation.state.params.image
  
    return(
      <View style={styles.container}>
      <TouchableHeader onPress={() =>{navigate('MenuOptions', values={values})}} />
      <Title image={image} />

      <Text style={styles.thanks}>Thank You For Your Submission</Text>
      
      <View style={styles.menu}>
      {Object.keys(values).map((keyName, keyIndex) => {
        return(
        <View key={keyIndex} style={styles.field}>
          <Text style={styles.input}>{keyName}</Text>
          <Text style={styles.value}> {values[keyName]}</Text>
        </View>
        )
      })}
    </View>
        
      </View>
 
    )
  } 
    }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#021227',
        alignItems: 'center',
        justifyContent: 'center',
      },
      menu: {
        height: 300,
        width: "90%",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#021227',
        paddingTop: 5,
        paddingBottom: 5
      },
      scrollContent: {
        flex: 1,
        padding: 2,
        justifyContent: "space-around"
      }, 
      view: {
        width: 200,
        height: 60,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#021227",
          margin: .5
          // marginBottom: 1
        },
        label: {
          color: "white",
          width: 120,
          fontSize: 20.2,
          fontWeight: "600",
          paddingLeft: 5

      
        },
        field: {
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          backgroundColor: "#021227",
          // marginTop: 5,
          // marginBottom: 5,
          alignItems: "center",
          paddingLeft: 5
        },
        thanks:{
          width: 300,
          height: 60,
          fontSize: 20.2,
          fontWeight: "600",
          borderColor: "#021227",
          color: "white",
        },
      
        input: {
          width: 150, 
          height: 25,
          textAlign: "center",
          backgroundColor: "#021227", 
          // margin: .5,
          fontSize: 20.2,
          fontWeight: "600",
          borderColor: "#021227",
          color: "white",
          borderWidth: 1,
          // paddingLeft: 1
        },
     
      confirm: {
        fontSize: 40,
        color: "red",
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
      button: {
      height: 70,
      width: 120,
      resizeMode: 'cover'
      }
     
     
    
    });

