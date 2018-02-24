import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import styles from '../assets/styles';

import agldLogo from "../assets/AG_logo.png";
// import { listAssets, getAsset } from '../actions/AssetActions';

// this.state = {
//   images:[
//     require('../assets/AG_logo.png'),
//     require('../assets/icon_logout.png'),
    
//   ]
// }


class Splash1 extends Component {
  componentDidMount() {
    console.log("this.props.assets!!",this.props.assets);



  }

  // onPress={navigate('Splash2', { asset: asset })}

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, "this.props");
    console.log(this.state)
    let list = this.props.assets.map((asset, index) => {
      console.log(asset, 'asset');
      return (
        <View key={index} style={styles.field}>
          <TouchableHighlight  >
            <Image style={styles.assetButton} source={{uri: asset.Logo }} />
          </TouchableHighlight>
          <Text style={styles.label}>{asset.Name}</Text>
        </View>
      )
    });

    return (

      <View style={styles.container}>
        <Image sourc={{uri:this.props.assets[0].Logo}}/>
        {/* {list} */}
        {/* <Text style={styles.assetMenuLabel}> Press Asset to Select </Text>
        <View style={styles.assetMenu}>

          <TouchableHighlight style={{ justifyContent: 'center', height: 100, width: 100 }} onPress={() => navigate('Splash2')} >
            <Image style={styles.assetButton} source={agldLogo} />
          </TouchableHighlight>
        </View> */}
      </View>



    )
  };
}

const mapStateToProps = (state) => ({ assets: state.assets });
const mapDispatchToProps = (dispatch) => ({
  getAsset: function (assetIndex) {
    dipatch(getAsset(assetIndex))
  },
  listAssets: function () {
    dispatch(listAssets())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Splash1);