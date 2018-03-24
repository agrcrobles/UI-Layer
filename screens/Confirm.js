import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert } from 'react-native';

import Submit from "../components/SubmitBtn";
import originator from "../assets/originator.png";
import recipient from "../assets/recipient.png";
import { StackNavigator } from 'react-navigation';
import { connect } from "react-redux";
import styles from "../assets/styles";
import fee from "../assets/hercFEE.jpg";
{/* <Image style={styles.assetFee} source={fee} /> */}



class Confirm extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

  }


  componentDidMount() {
    console.log(this.props.newProps, 'thisnewtransinfo')
    console.log(this.props, 'props')


  }


 


  render() {
    
    const { navigate } = this.props.navigation;
    console.log(this.props.newProps, "txNewProps")

    let locationImage = this.props.location === 'originator' ? originator : recipient;
    let logo = this.props.logo;
    // console.log(this.props.Assets);

    let list = Object.keys(this.props.newProps).map((propName, idx) => {
      let name = propName;
      return (

        <View key={idx} style={styles.field}>
          <Text style={styles.label}>{name}</Text>
          <Text style={styles.input}>{this.props.newProps[name]}</Text>
        </View>
      )
    });

    return (
      <View style={styles.containerCenter}>

        <View style={styles.subHeader}>
          <Image style={styles.assetLocation} source={locationImage} />
          <Image style={styles.assetButton} source={{uri: logo}} />
        </View>


        <View style={styles.inputMenu}>

          {list}
        </View>

        {/* <Text>{this.props.selectedAsset.csv[0]}</Text>
            <Text>{this.props.selectedAsset.Images[0]}</Text> */}


        <Submit onPress={() => navigate('BlockScan')} />
        <Image style={styles.assetFee} source={fee} />

      </View>




    )
  }
}


const mapStateToProps = (state) => ({
  newProps: state.AssetReducers.newProps,
  location: state.AssetReducers.transInfo.location,
  logo: state.AssetReducers.transInfo.logo
  // newProperties: state.AssetReducers.selectedAsset.newProperties


});
// const mapDispatchToProps = (dispatch) => ({
//   commitAsset: (asset) =>
//       dispatch(commitAsset(asset)
//       )
// })
export default connect(mapStateToProps)(Confirm);


