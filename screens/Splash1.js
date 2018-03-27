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
  constructor(props) {
    super(props);

  }
 
  //  Need to determine the ideal way to get the selected asset, currently am pulling them both down entirely and then just assigning the selected to state...I think...
  componentDidMount() {
    // this.props.listAssets();
   
    console.log("this.props.assets!! in Splash", this.props.assets);
    
   
  }
  _onPress = (index) => {
    const { navigate } = this.props.navigation;

    // let asset = this.props.assets[index]; //cleaner way or better way to do this

    this.props.selectAsset(index);
    

    navigate('Splash2');
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props)
    let list = this.props.assets.map((asset, index) => {
      return (
        <View key={index} style={styles.assetField}>
          <TouchableHighlight onPress={() => this._onPress(asset.key)}  >
            <Image style={styles.assetButton} source={{uri:asset.Logo}} />  
          </TouchableHighlight>
          <Text style={styles.assetLabel}>{asset.name}</Text>
        </View>
      )
    });

    return (

      <View style={styles.container}>
       <ScrollView contentContainerStyle={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center', width: '90%' }}>
          {list}
        </ScrollView>
        <TouchableHighlight onPress={() => navigate('Create')}>
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