import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import arrow from "../assets/icon_backarrow.png";
import styles from "../assets/styles";
import { connect } from "react-redux";
import { startTrans } from '../actions/AssetActions';
import agldLogo from "../assets/AG_logo.png";
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";



class Splash2 extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null

  }
  _onPress = (place) => {
    let time = new Date();

    const { navigate } = this.props.navigation;
    console.log(place, 'pressing place');
    let asset = this.props.asset;
    let transBase = {
      name: asset.Name,
      logo: asset.Logo,
      location: place,
      coreProps: asset.CoreProps,
      dTime: time
    
    }
    console.log(transBase.time, 'txbase')
    this.props.startTrans(transBase);
  
    navigate('Splash3');
  }

  componentDidMount() {
    console.log(this.props.asset.name, 'this.props.asset');


  }
  render() {
    let image = this.props.asset.Logo;


    return (
      <View style={styles.containerCenter}>
        <View style={styles.assetField}>
          <Image style={styles.assetButton} source={{ uri: image }} />
          <Text style={styles.assetLabel}>{this.props.asset.Name}</Text>
        </View>
        <View style={styles.smallMenu}>
          <TouchableHighlight onPress={() => this._onPress('originator')}>
            <Image
              style={styles.menuInputTitle}
              source={originator}
            />
          </TouchableHighlight>
          
          <TouchableHighlight onPress={() => this._onPress('recipient')}>
            <Image
              style={styles.menuInputTitle}
              source={recipient}
            />
          </TouchableHighlight>

        </View>


      </View>


    )
  };
}

const mapStateToProps = (state) => ({
  asset: state.AssetReducers.selectedAsset
});
const mapDispatchToProps = (dispatch) => ({
  startTrans: (trans) =>
    dispatch(startTrans(trans))

})
export default connect(mapStateToProps, mapDispatchToProps)(Splash2);