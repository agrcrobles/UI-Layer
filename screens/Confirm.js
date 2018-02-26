import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert } from 'react-native';
import Title from "../components/MenuInputTitle";
import WelcomeHeader from "../components/WelcomeHeader";
import Submit from "../components/SubmitBtn";
import destination from "../assets/destinationLabel.png";
import origin from "../assets/originLabel.png";
import { StackNavigator } from 'react-navigation';
import { connect } from "react-redux";
import styles from "../assets/styles";

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


class Confirm extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

  }


  componentDidMount() {




  }


  // _onPressSubmit(values) {

  //   const { navigate } = this.props.navigation;


  //   navigate('BlockScan');
  // }



  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.selectedAsset, "confirmselasset")

    let locationImage = this.props.selectedAsset.place === 'destination' ? destination : origin;
    let logo = this.props.selectedAsset.Logo;
    console.log(this.props.Assets);

    let list = Object.keys(this.props.Properties).map((propName, idx) => {
      let name = propName;
      return (

        <View key={idx} style={styles.field}>
          <Text style={styles.label}>{name}</Text>
          <Text style={styles.input}>{this.props.Properties[name]}</Text>
        </View>
      )
    });

    return (
      <View style={styles.containerCenter}>

        <View style={styles.subHeader}>
          <Image style={styles.assetLocation} source={locationImage} />
          <Image style={styles.assetButton} source={logo} />
        </View>


        <View style={styles.inputMenu}>

          {list}
        </View>

        {/* <Text>{this.props.selectedAsset.csv[0]}</Text>
            <Text>{this.props.selectedAsset.Images[0]}</Text> */}


        <Submit onPress={() => navigate('BlockScanner')} />
      </View>




    )
  }
}


const mapStateToProps = (state) => ({
  Properties: state.AssetReducers.Properties,
  selectedAsset: state.AssetReducers.selectedAsset
  // newProperties: state.AssetReducers.selectedAsset.newProperties


});
// const mapDispatchToProps = (dispatch) => ({
//   commitAsset: (asset) =>
//       dispatch(commitAsset(asset)
//       )
// })
export default connect(mapStateToProps)(Confirm);


