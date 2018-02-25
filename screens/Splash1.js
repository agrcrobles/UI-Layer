import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import create from '../assets/createNewAssetButton.png';
import agldLogo from "../assets/AG_logo.png";
import { getAsset, selectAsset } from '../actions/AssetActions';
// import { listAssets, getAsset } from '../actions/AssetActions';

// this.state = {
//   images:[
//     require('../assets/AG_logo.png'),
//     require('../assets/icon_logout.png'),

//   ]
// }


class Splash1 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("this.props.assets!!", this.props.assets);
    console.log(this.props, 'thisstate')



  }

  _onPress = (index) => {
    const { navigate } = this.props.navigation;
    this.props.selectAsset(index);

    console.log(this.props.assetIndex, 'idx')

    console.log(this.props, 'this.props')
    // this.props.getAsset(this.props.assetIndex);
    console.log()

    navigate('Splash2', { assetIndex: this.props.assetIndex });
  }

  render() {
    console.log(this.props, "this.props");
    console.log(this.state)
    let list = this.props.assets.map((asset, index) => {
      console.log(asset.Logo, 'logo/uri');
      return (
        <View key={index} style={styles.field}>
          <TouchableHighlight onPress={() => this._onPress(index)}  >
            <Image style={styles.assetButton} source={agldLogo} />
          </TouchableHighlight>
          <Text style={styles.label}>{asset.Name}</Text>
        </View>
      )
    });

    return (

      <View style={styles.container}>
        {/* <Image sourc={{uri:this.props.assets[0].Logo}}/> */}
        {list}

        <TouchableHighlight onPress={console.log('pressing Create')}>
          <Image
            style={{ resizeMode: 'contain', height: 80, width: 150 }}
            source={create}
          />
        </TouchableHighlight>
       
      </View>



    )
  };
}

const mapStateToProps = (state) => ({
  assets: state.assets,
  selectedAsset: state.assets[state.assetIndex],
  assetIndex: state.assetIndex

});
const mapDispatchToProps = (dispatch) => ({

  selectAsset: (assetIndex) =>
    dispatch(selectAsset(assetIndex)),

  listAssets: () => dispatch(listAssets())

})
export default connect(mapStateToProps, mapDispatchToProps)(Splash1);