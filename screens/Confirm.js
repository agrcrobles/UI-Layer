import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import Title from "../components/MenuInputTitle";
import WelcomeHeader from "../components/WelcomeHeader";
import Submit from "../components/SubmitBtn";
import destination from "../assets/destinationLabel.png";
import { StackNavigator } from 'react-navigation';
import Amplify, { API } from 'aws-amplify-react-native';
import aws_exports from '../awsmobilejs/#current-backend-info/aws-exports.js';
Amplify.configure({
  Auth: {
    'aws_cognito_identity_pool_id': 'us-east-1:f0e40134-54a1-47b0-b297-d895a1e5a4ca', //REQUIRED - Amazon Cognito Identity Pool ID
    'aws_cognito_region': 'us-east-1', // REQUIRED - Amazon Cognito Region
   },
  API: {
    endpoints: [
      {
        name: "barInf",
        endpoint: "https://0jl8r6ytha.execute-api.us-east-1.amazonaws.com/MobileHub_Deployments"
      }
    ]
  }
});

export default class Confirm extends Component  {
  
  static navigationOptions = {
    header: null
  }
  
  constructor(props) {
    super(props);
    
  }
  
  
  componentDidMount(){
  
  
  }
 
  // _onPressBack(){
  //    Alert.alert("you touched BAck")
  //  }
   
   _onPressSubmit(amt){
    const { navigate } = this.props.navigation;
      console.log(amt);
     let myApi = 'barInf';
     let path = '/bars/' + amt.Bar_Id;
     let myInit = {body: {barSerial: amt.Bar_Serial}};

     API.post(myApi, path, myInit).then(response => {
       console.log(response);
     })
     .then(err => {
       if(err){
         console.log(err, "whoops");
       };
      }
     );     
     
      
     

      navigate('ThankYou', amt={amt});
   }          
     
   
    
    render(){
      // debugger;
      // const { navigate } = this.props.navigation;
      let values = this.props.navigation.state.params.amt;
      let serial = values.Bar_Serial;
      const id = values.Bar_Id;
     
    return(
     
      <View style={styles.container}>
        <WelcomeHeader />
        <Title image={destination} />
        <Text style={styles.confirm}>CONFIRM</Text>
               
        <Text style={styles.input}>Bar ID: {id}</Text>
        <Text style={styles.input}>Bar Serial {serial}</Text>

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

      <TouchableHighlight onPress={() => this._onPressSubmit(values)}
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
    height: 500,
    width: "100%",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'blue',
    paddingTop: 5,
    paddingBottom: 5,
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
  input: {
    width: 170, 
    height: 30,
    textAlign: "center",
    backgroundColor: "#132c4a", 
    margin: .5,
    fontSize: 25,
    fontWeight: "600",
    borderColor: "#142535",
    color: "yellow",
    borderWidth: 1
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