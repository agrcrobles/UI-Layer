import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import WelcomeHeader from "../components/WelcomeHeader";
// import Welcome from "../components/Welcome";
import { StackNavigator } from 'react-navigation';

import agld from "../assets/AG_logo.png";
import origin from "../assets/originLabel.png";
import destination from "../assets/destinationLabel.png";
import csv from "../assets/csvLabel.png";
import pics from "../assets/picturesLabel.png"
import styles from "../assets/styles";
import AgldHead from "../components/NavButtons";
import vendorSupply from "../assets/vendorAndSupplier.png";



export default class Splash3 extends Component {


    render() {
        const { navigate } = this.props.navigation;
        let image = this.props.navigation.state.params.image === 'destination' ? destination : origin;
        console.log(this.props.navigate, "this.props")

        return (
            <View style={styles.container}>

                <View style={styles.subHeader}>
                    <Image style={styles.headerLogo} source={agld} />
                    <Image style={styles.menuInputTitle} source={image} />
                </View>

                <View style={styles.spaceAroundContainer}>
                    <TouchableHighlight onPress={() => navigate('FileUp', { image: image })}>
                        <Image
                            style={styles.menuInputTitle}
                            source={pics}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('FileUp', { image: image })}>
                        <Image
                            style={styles.menuInputTitle}
                            source={csv}
                        />
                    </TouchableHighlight>
                </View>
                <TouchableHighlight onPress={() => navigate('InputMan', { image: image })}>
                    <Image
                        style={styles.button}
                        source={vendorSupply}
                    />
                </TouchableHighlight>


            </View>


        )
    };
}

