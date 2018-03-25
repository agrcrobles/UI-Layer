import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import WelcomeHeader from "../components/WelcomeHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';

import MenuOptions from "../components/buttons/menuOptions.png";
import originator from "../assets/originator.png";
import recipient from "../assets/recipient.png";

import csv from "../assets/csvLabel.png";
import camera from "../assets/cameraLabel.png";
import styles from "../assets/styles";
import manual from "../assets/manLabel.png";

import { connect } from "react-redux";

class Splash3 extends Component {
    static navigationOptions = {
        header: null

    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.transBase, 'onmount selasset')


    }
    // this.props.navigation.state.params.image
    render() {
        const { navigate } = this.props.navigation;
        // let image = this.props.asset.Images ? this.props.asset.Images[0] : null;
        let locationImage = this.props.transBase.location === 'recipient' ? recipient : originator;
        let logo = this.props.transBase.logo;
        let asset = this.props.transBase;
        let hercId = this.props.hercId;
        console.log(asset, 'splash3 this.props.selectedAsset ');

        return (
            <View style={styles.containerCenter}>
                <View style={styles.assetField}>
                    <Image style={styles.assetButton} source={{ uri: logo }} />
                    <Text style={styles.label}>{asset.name}</Text>
                </View>

                    <Image style={styles.assetLocation} source={locationImage} />
                <View style={styles.field}>
                    <Text style={styles.label}>HercID: {hercId}</Text>
                    {/* <TextInput style={styles.input} placeholder="ID" /> */}
                </View>
                <View style={styles.spaceAroundContainer}>
                    <TouchableHighlight onPress={() => navigate('FileUp')}>
                        <Image
                            style={styles.menuInputTitle}
                            source={camera}
                        />

                    </TouchableHighlight>
                    <Image source={{uri: logo}} />
                    <TouchableHighlight onPress={() => navigate('DocUp')}>
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
                {/* <TouchableHighlight onPress={() => navigate('MenuOptions')} >
                    <Image
                        style={styles.button}
                        source={MenuOptions}
                    />
                </TouchableHighlight> */}
            </View>


        )
    };
}

const mapStateToProps = (state) => ({
    transBase: state.AssetReducers.transInfo,
    hercId: state.AssetReducers.hercId

});
export default connect(mapStateToProps)(Splash3);