import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import arrow from "../assets/icon_backarrow.png";
import styles from "../assets/styles";
import { connect } from "react-redux";
import { startTrans } from '../actions/AssetActions';
import agldLogo from "../assets/AG_logo.png";
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";



class Splash2 extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
   
    return {

      headerTitle:
        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
         <TouchableHighlight onPress={() => navigation.navigate('MenuOptions')}>
          <Image style={{
            height: 80,
            width: 80,
            // alignSelf: 'center',
            borderRadius: 120,
            resizeMode: 'contain'
          }}
            source={{ uri: params.logo }} />
        </TouchableHighlight>
          <Text style={styles.assetHeaderLabel}>{params.name}</Text>
        </View>,

      headerStyle: {
        height: Platform.OS === 'android' ? 100 + STATUS_BAR_HEIGHT : 100,
        backgroundColor: '#021227',

      },
      headerTitleStyle: {
        marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
        textAlign: 'center',
        alignSelf: 'center',
        // textAlignVertical: 'center',
        backgroundColor: '#021227',

      },
      headerRight: <View></View>
    }
  }
  constructor(props) {
    super(props);
  }
  _onPress = (place) => {
    const { navigate } = this.props.navigation;
    let time = new Date();

    console.log(place, 'pressing place');
    let asset = this.props.asset;
    let transBase = {
      name: asset.Name,
      location: place,
      dTime: time
    }
    console.log(transBase.time, 'txbase')
    this.props.startTrans(transBase);

    navigate('Splash3', { logo: this.props.asset.Logo, name: this.props.asset.Name });
  }
  // let values = this.props.navigation.state.params;
  componentDidMount() {
    console.log(this.props.asset.name, 'this.props.asset');


  }
  render() {


    return (
      <View style={styles.container}>

        {/* <View style={styles.assetFieldHeader}>
          <Image style={styles.assetHeaderImage} source={{ uri: image }} />
          <Text style={styles.assetHeaderLabel}>{this.props.asset.Name}</Text>
        </View>
        <View style={styles.smallMenu}> */}
        <TouchableHighlight
          style={{ marginTop: 50 }} onPress={() => this._onPress('originator')}>
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

        {/* </View> */}


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