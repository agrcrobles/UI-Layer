import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Title from "../components/MenuInputTitle";
import Inputs from "../components/Inputs"
import TouchableHeader from "../components/TouchableHeader";
import MenuLogo from "../components/MenuLogo";
import Next from "../components/NextBtn";
import origin from "../assets/originLabel.png";
 import { StackNavigator, } from 'react-navigation';

 export default class Origin extends Component {
  static navigationOptions = {
    header: null
  
  }
  constructor(props){
    super(props);
    
    this.state = {
        barId: "",
        barSerial: "",
        manufacturer: "",
        purity: "",
        weight: "",
        AGID: "",
        RFID: ""  
      }
    } 
  
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
         <TouchableHeader onPress={() => navigate('Splash')} />
        <Title image={origin} />
      
          <ScrollView contentContainerStyle={styles.menu}> 
            <View style={styles.content}>
              <View style={styles.field}>
              <Text style={styles.label}>Bar ID</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(barId) => this.setState({barId})}
                  placeholder="Bar ID"
                />
              </View>  
                
              <View style={styles.field}>
              <Text style={styles.label}>Bar Serial</Text> 
                <TextInput
                  style={styles.input}
                  onChangeText={(barSerial) => this.setState({barSerial})}
                  placeholder="Bar Serial"
                />
              </View>  

              <View style={styles.field}>
              <Text style={styles.label}>Manufacturer</Text>  
                <TextInput
                  style={styles.input}
                  onChangeText={(mint) => this.setState({manufacturer})}
                  placeholder="Manufacturer"
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
              <Text style={styles.label}>AGID</Text> 
                <TextInput
                  style={styles.input}
                  onChangeText={(AGID) => this.setState({AGID})}
                  placeholder="AGID"
                />
              </View>

              <View style={styles.field}>
              <Text style={styles.label}>RFID</Text>     
                <TextInput
                  style={styles.input}
                  onChangeText={(RFID) => this.setState({RFID})}
                  placeholder="RFID"
                />
              </View>
            </View>  
          </ScrollView>       
              
              <Next onPress={() => {
                console.log(this.state);
                navigate('Confirm', {amt: this.state, image: origin})}} 
                />
      </View>
    )
  }
}
// herc background color #021227
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021227',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  menu: {
    height: 500,
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
    width: "100%",
    backgroundColor: "#021227",
    // marginTop: 5,
    // marginBottom: 5,
    alignItems: "center",
    paddingLeft: 5
  },

  input: {
    width: 150, 
    height: 40,
    textAlign: "center",
    backgroundColor: '#021227', 
    // margin: .5,
    fontSize: 20.2,
    fontWeight: "600",
    borderColor: "#142535",
    color: "white",
    borderWidth: 1,
    // paddingLeft: 1
  }
});