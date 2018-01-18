import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Title from "../components/MenuInputTitle";
import Inputs from "../components/Inputs"
import WelcomeHeader from "../components/WelcomeHeader";
import MenuLogo from "../components/MenuLogo";
import Next from "../components/NextBtn";
import destination from "../assets/destinationLabel.png";
 import { StackNavigator, } from 'react-navigation';


 //  For the HERC database input, the fields that I believe we will need for the Bunker Office input are:
// • text-validators   Bar ID (a code system I’ll be using with bar number and date - eg: 0001–1-11-18)
// • text-validators   Vault Location ID (a placement within the vault system I’ll be using - eg: 1B1, which is Row 1, back wall, spot 1 from left)
// •    Bar Serial #
// •    Mint (eg: Royal Canadian Mint)
// •    Weight
// •    Purity
// •    Date Received
// •    Date Processed
// •    Supplier
// •    Picture 1 upload
// •    Picture 2 upload
// •    Picture 3 upload
// •    Analysis CSV upload
// Inpu Validators

export default class Destination extends Component {
  static navigationOptions = {
    header: null
  
  }
  constructor(props){
    super(props);
    // serial
    // manufacturer: "",
    //     purity: "",
    //     weight: "",
    //     AGID: "",
    //     RFID: ""  
    this.state = {
      
        barId: "",
        barSerial: "",
        vaultLoc: "",
        weight: "",
        purity: "",
        dateRec: "",
        dateProc: "",
        mint: "",
        supplier: ""  
      }
    } 
  

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <WelcomeHeader />
        <Title image={destination} />
      
          <ScrollView contentContainerStyle={styles.menu}> 
          <View style={styles.content}>
            <View style={styles.field}>
             <Text style={styles.label}>Bar Serial</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(barSerial) => this.setState({barSerial})}
                placeholder="Bar Serial"
              />
             </View>  

            <View style={styles.field}>
             <Text style={styles.label}>Bar ID</Text>
              <TextInput
                style={styles.input}
                onChangeText={(barId) => this.setState({barId})}
                placeholder="Bar ID"
              />
            </View>  
            <View style={styles.field}>
             <Text style={styles.label}>Mint</Text>  
              <TextInput
                style={styles.input}
                onChangeText={(mint) => this.setState({mint})}
                placeholder="Mint"
              />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Vault Location</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(vaultLoc) => this.setState({vaultLoc})}
                placeholder="Vault Location"
              />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Weight</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(weight) => this.setState({weight})}
                placeholder="Weight"
              />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Purity</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(purity) => this.setState({purity})}
                placeholder="Purity"

              />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Date Received</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(dateRec) => this.setState({dateRec})}
                placeholder="Date Recieved"
                />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Date Processed</Text> 
              <TextInput
                style={styles.input}
                onChangeText={(dateProc) => this.setState({dateProc})}
                placeholder="Date Processed"
              />
            </View>

            <View style={styles.field}>
             <Text style={styles.label}>Supplier</Text>     
              <TextInput
                style={styles.input}
                onChangeText={(supplier) => this.setState({supplier})}
                placeholder="Supplier"
              />
            </View>
           </View>   
          </ScrollView>       
              
              <Next onPress={() => {
                console.log(this.state);
                navigate('Confirm', {values: this.state})}} 
                />
      </View>
    )
  }
}
// herc background color #021227
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 30,
    // width: "100%",
    backgroundColor: '#021227',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  menu: {
    height: 500,
    width: "90%",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'blue',
    paddingTop: 5,
    paddingBottom: 5
  },
  content: {
    flex: 1,
    padding: 2,
    justifyContent: "space-around"
  },
  label: {
    color: "green",
    width: 120,
    fontSize: 20.2,
    fontWeight: "600"

  },
  field: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "yellow",
    // marginTop: 5,
    // marginBottom: 5,
    alignItems: "center",
    paddingLeft: 5
  },

  input: {
    width: 150, 
    height: 40,
    textAlign: "center",
    backgroundColor: "#132c4a", 
    // margin: .5,
    fontSize: 20.2,
    fontWeight: "600",
    borderColor: "#142535",
    color: "white",
    borderWidth: 1,
    // paddingLeft: 1
  }
});