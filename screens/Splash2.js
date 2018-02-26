import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import arrow from "../assets/icon_backarrow.png";
import styles from "../assets/styles";
import { connect } from "react-redux";
import { setPlace } from '../actions/AssetActions';
import agldLogo from "../assets/AG_logo.png";
import toast from "../assets/toast.jpg";

class Splash2 extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null

  }
  _onPress = place => {

    const { navigate } = this.props.navigation;
    console.log('pressing place')
    this.props.selectedAsset.place = place;
    console.log(this.props.selectedAsset, 'after place')
    this.props.setPlace(place);
    console.log
    navigate('Splash3');
  }

  componentDidMount() {
    console.log(this.props.selectedAsset, 'this.props.selectedAsset');


  }
  render() {
    let image = this.props.selectedAsset.Logo;


    return (
      <View style={styles.containerCenter}>
        <Image style={styles.headerLogo} source={image} />
        <View style={styles.smallMenu}>
          <TouchableHighlight onPress={() => this._onPress('destination')}>
            <Image
              style={styles.menuInputTitle}
              source={require('../assets/destinationLabel.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this._onPress('origin')}>
            <Image
              style={styles.menuInputTitle}
              source={require('../assets/originLabel.png')}
            />
          </TouchableHighlight>
        </View>


      </View>


    )
  };
}

const mapStateToProps = (state) => ({
  selectedAsset: state.AssetReducers.selectedAsset
});
const mapDispatchToProps = (dispatch) => ({
  setPlace: (place) =>
    dispatch(setPlace(place))

})
export default connect(mapStateToProps, mapDispatchToProps)(Splash2);