import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert } from 'react-native';

import Submit from "../components/SubmitBtn";
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";
import { StackNavigator } from 'react-navigation';
import { connect } from "react-redux";
import styles from "../assets/styles";
import fee from "../assets/hercLogoPillar.png";
{/* <Image style={styles.assetFee} source={fee} /> */ }



class Confirm extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

  }
  state = {};


  componentDidMount() {
    console.log(this.props.newProps, 'thisnewtransinfo')
    console.log(this.props, 'props')
    this.getPricesFromApi();

  }
  async getPricesFromApi() {
    try {
      let response = await fetch(
        'https://jsondata.herc.one/service-1.0-SNAPSHOT/JSON'
      );
      let responseJson = await response.json();
      let fctPrice = responseJson.list["0"].pricePerHercForFCT; // this is what I'm going with for now  
      console.log(fctPrice, 'newthing');
      this.setState({ fctPrice });

    } catch (error) {
      console.error(error);
    }
  }




  render() {
    let price = this.state.fctPrice;
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
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.assetFieldHeader}>
            <Image style={styles.assetButton} source={{ uri: logo }} />
            <Text style={styles.assetLabel}>{this.props.name}</Text>
            <Image style={styles.assetLocation} source={locationImage} />
          </View>




          {list}


          <Submit onPress={() => navigate('Splash3',{logo: this.props.logo, name: this.props.name})} />
          <View style={styles.assetFee}>
            <Image style={styles.assetFeeLabel} source={fee} />
            <Text style={styles.teePrice}>{price}</Text>
          </View>
        </ScrollView>
      </View>




    )
  }
}


const mapStateToProps = (state) => ({
  newProps: state.AssetReducers.transDat.properties,
  location: state.AssetReducers.transInfo.location,
  logo: state.AssetReducers.selectedAsset.Logo,
  name: state.AssetReducers.transInfo.name
  // newProperties: state.AssetReducers.selectedAsset.newProperties


});
// const mapDispatchToProps = (dispatch) => ({
//   commitAsset: (asset) =>
//       dispatch(commitAsset(asset)
//       )
// })
export default connect(mapStateToProps)(Confirm);


