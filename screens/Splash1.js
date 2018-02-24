import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import styles from '../assets/styles';

import agldLogo from "../assets/AG_logo.png";
import { getAsset } from '../actions/AssetActions';
// import { listAssets, getAsset } from '../actions/AssetActions';

this.state = {
  images:[
    require('../assets/AG_logo.png'),
    require('../assets/icon_logout.png'),
    
  ]
}


class Splash1 extends Component {
  componentDidMount() {
    console.log("this.props.assets!!",this.props.assets);
    
    
    
  }
  
  _onPress = (index) => {
    const { navigate } = this.props.navigation;
    //  console.log(index, 'index');
    //  console.log(this.props.assets[index], 'thisgetass')
    //  let pickedAsset = this.props.getAsset(index);
     console.log(this.props, 'asset') 
    // navigate('Splash2', { asset:  this.props.getAsset(index)});
   }

  render() {
    console.log(this.props, "this.props");
    console.log(this.state)
    let list = this.props.assets.map((asset, index) => {
      console.log(asset.Logo, 'logo/uri');
      return (
        <View key={index} style={styles.field}>
          <TouchableHighlight onPress={() => this._onPress(index)}  >
            <Image style={styles.assetButton} source={{uri: asset.Logo}} />
          </TouchableHighlight>
          <Text style={styles.label}>{asset.Name}</Text>
        </View>
      )
    });

    return (

      <View style={styles.container}>
        {/* <Image sourc={{uri:this.props.assets[0].Logo}}/> */}
        {list}
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
    dispatch(getAsset(assetIndex))
  },
  listAssets: function () {
    dispatch(listAssets())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Splash1);