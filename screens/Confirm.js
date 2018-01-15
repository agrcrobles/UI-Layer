import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert} from 'react-native';
import Title from "../components/MenuInputTitle";
import WelcomeHeader from "../components/WelcomeHeader";
import Submit from "../components/SubmitBtn";
import vault from "../assets/vaultLabel.png";
import SubOrBack from "../components/BackOrSubmitButtons";

export default class Confirm extends Component  {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
   
   
  }
  
  componentDidMount(){
    

  }
   _onPressBack(){
     Alert.alert("you touched BAck")
   }
   
   _onPressSubmit(amt){
     console.log(amt);
    

     fetch('mongodb://agld:herculese@ds257627.mlab.com:57627/hercgold', {
       method: 'POST',
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
        },
        body: {
          serialNum : amt.serial,
          manufacturer: amt.manufacturer,
          weight : amt.weight,
          RFID: amt.RFID,
          AGID: amt.AGID
          
        }
      }).then(function(res){console.log(res)})
      
    }
    
    render(){
      const { navigate } = this.props.navigation;
      const amt = this.props.navigation.state.params.values;
      console.log(amt);
    
    return(
     
      <View style={styles.container}>
        <WelcomeHeader />
        <Title image={vault} />
        <Text style={styles.confirm}>CONFIRM</Text>

      <ScrollView contentContainerStyle={styles.view}>
          <Text style={styles.input}>Serial Number:</Text> 
            <Text style={styles.value}>{amt.serial}</Text>
          <Text style={styles.input}>Manufacturer:</Text>
            <Text style={styles.value}>{amt.weight}</Text>
          <Text style={styles.input}>Purity:</Text>
            <Text style={styles.value}>{amt.purity}</Text>
          <Text style={styles.input}>Weight:</Text>
            <Text style={styles.value}>{amt.weight}</Text>
          <Text style={styles.input}>AGID:</Text>
            <Text style={styles.value}> {amt.AGID}</Text>
          <Text style={styles.input}>RFID:</Text>
            <Text style={styles.value}> {amt.RFID}</Text>
       </ScrollView>
        
      
      <TouchableHighlight onPress={() => {
        this._onPressSubmit(amt)
        navigate('Vault')}}
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
    
    // paddingTop: 30,
    width: "100%",
    height: 400,
    backgroundColor: 'purple',
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    width: 170, 
    height: 30,
    textAlign: "center",
    backgroundColor: "#132c4a", 
    margin: .5,
    fontSize: 20.2,
    fontWeight: "600",
    borderColor: "#142535",
    color: "yellow",
    borderWidth: 1
  },
  view: {
    flex: 1,
      // width:"80%",
      height: 400,
      alignItems: "center",
      backgroundColor: "blue",
      justifyContent: "space-around",
      marginBottom: 1
    },
  confirm: {
    fontSize: 40,
    color: "red",
  },
  value: {
    color: "white",
    fontSize: 25,
    fontWeight: "600"
    
  },
  button: {
  height: 70,
  width: 120,
  resizeMode: 'cover'
  },
  navbtns: {
    flexDirection: "row",
    width: "90%",
    height: 60,
    justifyContent: "space-between",
    backgroundColor: "grey",    
    marginTop: 1,
    paddingRight:15,
    paddingLeft: 15
  },
  list: {
    height: 600,
    width: "80%",
    justifyContent: "space-around"
  }

});