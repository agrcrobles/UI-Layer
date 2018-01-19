import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import WelcomeHeader from "../components/WelcomeHeader";
import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';
import Title from "../components/MenuInputTitle";
import pictures from "../assets/picturesLabel.png";
import csv from "../assets/csvLabel.png";
import Submit from "../components/SubmitBtn";

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
    height: "30%",
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

export default class FileUp extends Component {
  static navigationOptions = {header: null };
  _onPress(){
    Alert.alert("YOUtouchedit");
  };

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <WelcomeHeader />
        <View style={styles.menu}>
          <Title image={pictures} />
          <Text style={styles.input}>Spacer for ImagePicker</Text>
          <Text style={styles.input}>Spacer for ImagePicker</Text>
          <Text style={styles.input}>Spacer for ImagePicker</Text>
        </View>
        <View style={styles.menu}>
          <Title image={csv} />
          <Text style={styles.input}>Spacer for ImagePicker</Text>
        </View>
      <Submit onPress={() => this._onPress} />
      </View>
    )
  }
}