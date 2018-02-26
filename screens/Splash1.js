import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import create from '../assets/createNewAssetButton.png';
import agldLogo from "../assets/AG_logo.png";
import toast from "../assets/toast.jpg";
import { selectAsset, listAssets } from '../actions/AssetActions';
import backArrow from '../assets/icon_backarrow.png';


class Splash1 extends Component {
  static navigationOptions = {  headerLeft: (
    <View>
        <TouchableHighlight
            onPress={() => this.props.navigation.goBack(state.key)} >
            <Image
                source={backArrow}
                style={styles.backArrow}
            />
    
        </TouchableHighlight>
    </View>
        ) };
  constructor(props) {
    super(props);
    
    }
  componentDidMount() {
    this.props.listAssets();
    console.log("this.props.assets!!", this.props.assets);
    console.log(this.props, 'thisstate')
  }
  _onPress = (index) => {
    const { navigate } = this.props.navigation;
   
    let asset = this.props.assets[index];
   
    this.props.selectAsset(asset);
    
   
    navigate('Splash2');
  }

  render() {
    console.log(this.props)
    let list = this.props.assets.map((asset, index) => {
      console.log(asset.Logo, 'logo/uri');
      return (
        <View key={index} style={styles.assetField}>
          <TouchableHighlight onPress={() => this._onPress(index)}  >
            <Image style={styles.assetButton} source={asset.Logo} />
          </TouchableHighlight>
          <Text style={styles.label}>{asset.Name}</Text>
        </View>
      )
    });

    return (

      <View style={styles.container}>
        <View style={styles.assetMenu}>
        {list}
        </View>
        <TouchableHighlight onPress={() => console.log('pressing Create')}>
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
  assets: state.AssetReducers.assets,
  
});
const mapDispatchToProps = (dispatch) => ({
  
  selectAsset: (asset) =>
    dispatch(selectAsset(asset)),

  listAssets: () => dispatch(listAssets())

})
export default connect(mapStateToProps, mapDispatchToProps)(Splash1);