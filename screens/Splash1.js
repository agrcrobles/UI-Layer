import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import styles from '../assets/styles';

import agldLogo from "../assets/AG_logo.png";



export default class Splash1 extends Component {
  componentDidMount() {

    return this.props.assets.map((asset, index)) => {
      console.log(asset, 'asset');
      return (<View key={idx}>
        <Image style={styles.icon} sourc={asset.Properties.logo}
        <Text key={idx} style={{ color: 'white' }}>{bar.BarId}</Text>
      </View>
      )
    }
  }



  render() {

    const { navigate } = this.props.navigation;
    console.log(this.props, "this.props")
    return (
      <View style={styles.container}>
        <Text style={styles.assetMenuLabel}> Press Asset to Select </Text>
        <View style={styles.assetMenu}>

          <TouchableHighlight style={{ justifyContent: 'center', height: 100, width: 100 }} onPress={() => navigate('Splash2')} >
            <Image style={styles.assetButton} source={agldLogo} />
          </TouchableHighlight>
        </View>
      </View>



    )
  };
}

const mapStateToProps = (state) => ({assets: state.assets});
const mapDispatchToProps =(dispatch) => ({
  chooseBar: function(bar){
    dipatch(chooseBar(bar))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Bars);