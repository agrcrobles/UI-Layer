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
import pics from "../assets/picturesLabel.png"
import styles from "../assets/styles";
import AgldHead from "../components/NavButtons";
import vendorSupply from "../assets/vendorAndSupplier.png";



export default class Splash3 extends Component {

    // this.props.navigation.state.params.image
    render() {
        const { navigate } = this.props.navigation;
        let location = this.props.navigation.state.params.location;
        let image = location === 'destination' ? destination : origin;
        console.log(this.props.navigation.state.params, "this.props")

        return (
            <View style={styles.container}>

                <View style={styles.subHeader}>
                    <Image style={styles.assetLocation} source={image} />
                    <Image style={styles.assetButton} source={agld} />
                </View>

                <View style={styles.spaceAroundContainer}>
                    <TouchableHighlight onPress={() => navigate('FileUp', { location: location } )}>
                        <Image
                            style={styles.menuInputTitle}
                            source={pics}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('FileUp', { location: location })}>
                        <Image
                            style={styles.menuInputTitle}
                            source={csv}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigate('InputMan', { location: location })}>
                        <Image
                            style={styles.button}
                            source={vendorSupply}
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

