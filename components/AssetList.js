import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';
import { connect } from 'react-redux';
import styles from '../assets/styles';

// TODO: Get transaction action/reducer

class AssetList extends Component {
  static navigationOptions = {


  }
_onPress = () => {

  console.log("going to the trans")
}

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props)
    let list = this.props.assets.map((asset, index) => {
      return (
        <View key={index} style={styles.assetField}>

          {/* <Button onPress={() => this._onDelete(asset.key)} style={styles.assetDeleteButton}>Delete</Button> */}

          <Text style={styles.assetLabel}>{asset.name}</Text>

          <TouchableHighlight style={{ alignSelf: 'flex-start' }} onPress={() => this._onPress()}  >
            <Image style={styles.assetButton} source={{ uri: asset.logo }} />
          </TouchableHighlight>

        </View>
      )
    });

    return (
      <View style={styles.container}>
        {/* <Image source={supply} style={{height: 50, width: 250, margin: 5}} />  */}
        {/* <ScrollView contentContainerStyle={styles.scrollView}> */}
        {list}
        {/* </ScrollView> */}
        {/* <TouchableHighlight onPress={() => this._onPress()}>
          <Image
            style={{ resizeMode: 'contain', height: 80, width: 150 }}
            source={create}
          />
        </TouchableHighlight> */}

      </View>



    )
  };
}

//need to write GET_TRANS

const mapStateToProps = (state) => ({
  assets: state.AssetReducers.assets,

});
// const mapDispatchToProps = (dispatch) => ({

//   selectAsset: (asset) =>
//     dispatch(selectAsset(asset)),
//   deleteAsset: (key) =>
//     dispatch(deleteAsset(key))

// })
export default connect(mapStateToProps)(AssetList)

