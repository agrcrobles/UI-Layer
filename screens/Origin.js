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
    
    // this.state = {
    //   Bar_Id: "",
    //   Bar_Serial: "",
    //   Vault_Location: "",
    //   Weight: "",
    //   Purity: "",
    //   Date_Received: "",
    //   Date_Processed: "",
    //   Mint: "",
    //   Supplier: ""  
    //   }
    } 
  
    componentDidMount(){
      this.setState({location: 'origin'})
    }
    render(){
      const { navigate } = this.props.navigation;
      return(
        <View style={styles.container}>
          
            <TouchableHeader onPress={() => navigate('Splash')} />
          
          <Title image={origin} />
        
          <ScrollView contentContainerStyle={styles.menu}> 
            <View style={styles.scrollContent}>
          
              <View style={styles.field}>
               <Text style={styles.label}>Bar ID</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(Bar_Id) => this.setState({Bar_Id})}
                  placeholder="Bar ID"
                />
               </View>  
  
              <View style={styles.field}>
               <Text style={styles.label}>Bar Serial</Text> 
                <TextInput
                  style={styles.input}
                  onChangeText={(Bar_Serial) => this.setState({Bar_Serial})}
                  placeholder="Bar Serial"
                />
              </View>  
  
              <View style={styles.field}>
               <Text style={styles.label}>Vault Location</Text> 
                <TextInput
                  style={styles.input}
                  onChangeText={(Vault_Location) => this.setState({Vault_Location})}
                  placeholder="Vault Location"
                />
              </View>
  
              <View style={styles.field}>
               <Text style={styles.label}>Weight</Text> 
                <TextInput
                  style={styles.input}
                  onChangeText={(Weight) => this.setState({Weight})}
                  placeholder="Weight"
                />
              </View>
  
              <View style={styles.field}>
               <Text style={styles.label}>Purity</Text> 
                <TextInput
                  style={styles.input}
                  onChangeText={(Purity) => this.setState({Purity})}
                  placeholder="Purity"
  
                />
              </View>
  
              <View style={styles.field}>
               <Text style={styles.label}>Date Received</Text> 
                <TextInput
                  style={styles.input}
                  onChangeText={(Date_Received) => this.setState({Date_Received})}
                  placeholder="Date Recieved"
                  />
              </View>
  
              <View style={styles.field}>
               <Text style={styles.label}>Date Processed</Text> 
                <TextInput
                  style={styles.input}
                  onChangeText={(Date_Processed) => this.setState({Date_Processed})}
                  placeholder="Date Processed"
                />
              </View>
              
              <View style={styles.field}>
               <Text style={styles.label}>Mint</Text>  
                <TextInput
                  style={styles.input}
                  onChangeText={(Mint) => this.setState({Mint})}
                  placeholder="Mint"
                />
              </View>
  
              <View style={styles.field}>
               <Text style={styles.label}>Supplier</Text>     
                <TextInput
                  style={styles.input}
                  onChangeText={(Supplier) => this.setState({Supplier})}
                  placeholder="Supplier"
                />
              </View>
             </View>   
            </ScrollView>       
                
                <Next onPress={() => {
                  console.log(this.state);
                  navigate('Confirm', {values: this.state })}} 
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