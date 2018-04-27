import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';
import track from '../components/buttons/blockScannerBtn.png';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import { selectAsset } from '../actions/AssetActions';
import BackButton from '../components/BackButton';


class TransAssetList extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <Image source={track} style={{ height: 50, width: 214, marginLeft: 35 }} />,
    headerLeft: <BackButton navigation={navigation} />
  })
 
  _onPress = (asset) => {
    const { navigate } = this.props.navigation;

    console.log("going to the trans")
    this.props.selectAsset(asset);
    navigate('SpaceScreen', { name: asset.name, logo: asset.logo });

  }

  

  render() {
    console.log(this.props)
    let list = this.props.assets.map((asset, index) => {
      return (
        <View key={index} style={styles.assetField}>

          {/* <Button onPress={() => this._onDelete(asset.key)} style={styles.assetDeleteButton}>Delete</Button> */}

          <Text style={styles.assetLabel}>{asset.name}</Text>

          <TouchableHighlight style={{ alignSelf: 'flex-start' }} onPress={() => this._onPress(asset)} >
            <Image style={styles.assetButton} source={{ uri: asset.logo }} />
          </TouchableHighlight>

        </View>
      )
    });

    return (
      <View style={styles.container}>

        {list}

      </View>



    )
  };
}

//need to write GET_TRANS

const mapStateToProps = (state) => ({
  assets: state.Assets,

});
const mapDispatchToProps = (dispatch) => ({

  selectAsset: (asset) =>
    dispatch(selectAsset(asset)),
  //   deleteAsset: (key) =>
  //     dispatch(deleteAsset(key))

})
export default connect(mapStateToProps, mapDispatchToProps)(TransAssetList)

