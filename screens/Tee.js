import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Platform, View, Image, TouchableHighlight, Alert } from 'react-native';
import logo from "../assets/teeLabel.png";
import params from "../assets/igvcParamsLabel.png";
import { connect } from "react-redux";
import styles from "../assets/styles";
import { addAsset } from "../actions/AssetActions";
import next from "../assets/nextLabel.png";
import { STATUS_BAR_HEIGHT } from '../constants';


class Tee extends Component {
  static navigationOptions = {
    headerStyle: {
      height: Platform.OS === 'android' ? 50 + STATUS_BAR_HEIGHT : 50,
      backgroundColor: '#021227',

  },
    headerTitle: <Image style={{
      height: 80,
      width: 200,
      marginLeft: 10,
      resizeMode: 'contain'
  }}
      source={logo} />,

  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  _onSubmit = () => {
    const { navigate } = this.props.navigation;
    console.log(this.state, "thisstate confimrmtee");
    let CoreProperties = this.state;
    this.props.addAsset(CoreProperties);
    console.log(CoreProperties, "ewasset");
    navigate('NewAssetConfirm');
  }
  render() {

   

    return (

      <View style={styles.container}>
          <Image style={styles.teeLabel} source={params} />

          <View style={styles.field}>
            <Text style={styles.label}>Input1</Text>
            <TextInput
              style={styles.input}
              onChangeText={Input1 => this.setState({ Input1 })}
              placeholder="Input1"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Input2</Text>
            <TextInput
              style={styles.input}
              onChangeText={Input2 => this.setState({ Input2 })}
              placeholder="Input2"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Input3</Text>
            <TextInput
              style={styles.input}
              onChangeText={Input3 => this.setState({ Input3 })}
              placeholder="Input3"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Input4</Text>
            <TextInput
              style={styles.input}
              onChangeText={Input4 => this.setState({ Input4 })}
              placeholder="Input4"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Input5</Text>
            <TextInput
              style={styles.input}
              onChangeText={Input5 => this.setState({ Input5 })}
              placeholder="Input5"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Input6</Text>
            <TextInput
              style={styles.input}
              onChangeText={Input6 => this.setState({ Input6 })}
              placeholder="Input5"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Input7</Text>
            <TextInput
              style={styles.input}
              onChangeText={Input7 => this.setState({ Input7 })}
              placeholder="Input7"
            />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Input8</Text>
            <TextInput
              style={styles.input}
              onChangeText={Input8 => this.setState({ Input8 })}
              placeholder="Input8"
            />
          </View>


        <TouchableHighlight onPress={this._onSubmit}>
          <Image style={styles.button} source={next} />
        </TouchableHighlight>
      </View>


    )
  };
}

const mapStateToProps = (state) => ({
  coreProperties: state.AssetReducers.newAsset.CoreProperties,
  // newProperties: state.AssetReducers.selectedAsset.newProperties


});
const mapDispatchToProps = (dispatch) => ({
  addAsset: (CoreProperties) =>
    dispatch(addAsset(CoreProperties)
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(Tee);

// // const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       paddingTop: 30,
// //       // width: "100%",
// //       backgroundColor: '#02182d',
// //       // backgroundColor: '#fff',
// //       alignItems: 'center',
// //       justifyContent: 'space-between',
// //     },
// //     header: {
// //       height: "27%",
// //       width: 360,
// //       backgroundColor: '#02182d',
// //       alignSelf: 'center',
// //       alignItems: 'center',
// //       // margin: 5


// //     },
// //     menuLogo: {
// //         justifyContent: "center",
// //         alignItems: "center",
// //         height: 120,
// //         width: 200,
// //         resizeMode: "contain",
// //         backgroundColor: '#02182d',
// //       },
// //       label: {
// //         height: 50,
// //         width: '80%',
// //         resizeMode: 'contain'
// //       },
// //     legendInput: {
// //       // alignSelf: "center",
// //       padding: 5,
// //       width: 330, 
// //       height: 90,
// //       // alignItems: 'center',
// //       margin: 1,
// //       marginBottom: 5,
// //       backgroundColor: "#14283f",
// //       justifyContent:"space-between", 

// //       borderRadius: 4
// //       },
// //     input:{
// //       backgroundColor: '#14283f',
// //       width: 200,
// //       height:50,
// //       textAlign: "center",
// //       color: "white", 
// //       alignSelf: "center",
// //       fontSize: 20.2,
// //       fontWeight: "600"
// //     },
// //     icon: {
// //         height: 30,
// //         width: 80, 
// //         alignSelf:"center"
// //     },
// //     bigButton: {

// //       backgroundColor: "#14283f",
// //       height: 80,
// //       width: 350,
// //       justifyContent:"center",
// //       alignItems: "center",
// //       marginBottom: 10
// //     },
// //     inputLabel: {
// //       textAlign: 'right',
// //       alignSelf: 'flex-end',
// //       justifyContent: 'flex-end',
// //       alignItems: 'flex-end',
// //       color:'white',
// //       height: 20,
// //       width: 120
// //     },
// //     button: {
// //       height: 70,
// //       width: 120
// //     }
// //     })