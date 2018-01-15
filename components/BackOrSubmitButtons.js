import React, {Component} from "react";
import {View, Image, TouchableHighlight, StyleSheet } from 'react-native';

//import {Component} from "react";

export default class BackOrSubmitButtons extends Component {
  constructor(props){
    super(props);
  }
  
// _onPressBack(){
//   this.props._onPressBack
// }
  render(){
  return (
    <View style={styles.navbtns}>
      <TouchableHighlight _onPress={this._onPressBack} >
        <Image
          style={{width: 50, height: 50}}
          source={require('../assets/icon_backarrow.png')}
        />
    </TouchableHighlight>
      <TouchableHighlight _onPress={this.props._onPressSubmit}>
        <Image
          style={{width: 120, height: 70, resizeMode: "cover"}}
          source={require('../assets/submitButton.png')}
        />
    </TouchableHighlight>
   </View>
  )
}
}
var styles = StyleSheet.create({
  navbtns: {
    flexDirection: "row",
    width: "90%",
    height: 60,
    justifyContent: "space-between",
    backgroundColor: "grey",    
    
    paddingRight:15,
    paddingLeft: 15
  }
 
  
})
;
