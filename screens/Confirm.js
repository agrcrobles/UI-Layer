import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import Title from "../components/MenuInputTitle";
import WelcomeHeader from "../components/WelcomeHeader";
import Submit from "../components/SubmitBtn";
import destination from "../assets/destinationLabel.png";
import origin from "../assets/originLabel.png";
import { StackNavigator } from 'react-navigation';
// import Amplify, { API } from 'aws-amplify';
// import aws_exports from '../awsmobilejs/#current-backend-info/aws-exports.js';
// Amplify.configure(aws_exports);
  // Auth: {
  //   'aws_cognito_identity_pool_id': 'us-east-1:f0e40134-54a1-47b0-b297-d895a1e5a4ca', //REQUIRED - Amazon Cognito Identity Pool ID
  //   'aws_cognito_region': 'us-east-1', // REQUIRED - Amazon Cognito Region
  //  },
  // API: {
  //   endpoints: [
  //     {
  //       name: "barInf",
  //       endpoint: "https://0jl8r6ytha.execute-api.us-east-1.amazonaws.com/MobileHub_Deployments"
  //     }
  //   ]
  // }

export default class Confirm extends Component  {
  
  static navigationOptions = {
    header: null
  }
  
  constructor(props) {
    super(props);
    
  }
  
  
  componentDidMount(){
    let image = this.props.navigation.state.params.image === 'destination' ? destination : origin;
    
  
  
  }

   
  //  _onPressSubmit(values){
  //   const { navigate } = this.props.navigation;
  //     console.log(values, 'val');
  
  //     navigate('ThankYou', {values:values});
  //  }          
     
   
    
    render(){
      // debugger;
    const { navigate } = this.props.navigation;
      let values = this.props.navigation.state.params.values;
     console.log(values, 'val')
      // const id = values.Bar_Id;
     
    return(
     
      <View style={styles.container}>
        <WelcomeHeader />
        <Title image={image} />
        <Text style={styles.confirm}>CONFIRM</Text>
               
        {/* <Text style={styles.input}>Bar ID: {id}</Text>
        <Text style={styles.input}>Bar Serial {serial}</Text> */}
         
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
        
     

      <TouchableHighlight onPress={() => navigate('ThankYou', values={values})}
        >
        <Image
          style={{width: 200, height: 70, resizeMode: "cover"}}
          source={require('../assets/submitButton.png')}
          />
      </TouchableHighlight>
    
        
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