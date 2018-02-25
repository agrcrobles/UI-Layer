import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import WelcomeHeader from "../components/WelcomeHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';
import MenuOptions from "../components/buttons/menuOptions.png";
import agld from "../assets/AG_logo.png";
import origin from "../assets/originLabel.png";
import destination from "../assets/destinationLabel.png";
import csv from "../assets/csvLabel.png";
import camera from "../assets/cameraLabel.png";
import styles from "../assets/styles";
import manual from "../assets/manLabel.png";
import toast from "../assets/toast.jpg";

import { connect } from "react-redux";



class Splash3 extends Component {
    static navigationOptions = {
        header: null
    
      }
    // this.props.navigation.state.params.image
    render() {
        const { navigate } = this.props.navigation;
         let locationImage = this.props.selectedAsset.place === 'destination'? destination : origin;
         let logo = this.props.selectedAsset.Logo;
        console.log(this.props.selectedAsset, 'splash3 this.props.selectedAsset ');

        return (
            <View style={styles.containerCenter}>

                <View style={styles.subHeader}>
                    <Image style={styles.assetLocation} source={locationImage} />
                    <Image style={styles.assetButton} source={logo} />
                </View>

                <View style={styles.spaceAroundContainer}>
                    <TouchableHighlight onPress={() => navigate('FileUp')}>
                        <Image
                            style={styles.menuInputTitle}
                            source={camera}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('FileUp')}>
                        <Image
                            style={styles.menuInputTitle}
                            source={csv}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('InputMan')}>
                        <Image
                            style={styles.menuInputTitle}
                            source={manual}
                        />
                    </TouchableHighlight>

                </View>
            <TouchableHighlight onPress={() => navigate('MenuOptions')} >
                <Image 
                    style={styles.button}
                    source={MenuOptions}
                />
            </TouchableHighlight>
            </View>


        )
    };
}

const mapStateToProps = (state) => ({
    selectedAsset: state.AssetReducers.selectedAsset
  });
  export default connect(mapStateToProps)(Splash3);