import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import leaderBrd from '../assets/leaderBrdBtn.png';
import info from "../assets/infoBtn.png";
import hiprLogo from "../assets/hiprLogo.png";
import begin from "../assets/beginBtn.png";
import { STATUS_BAR_HEIGHT } from '../constants';

export default class PreHIPR extends Component {
    static navigationOptions = {
        headerStyle: {
            height: Platform.OS === 'android' ? 80 + STATUS_BAR_HEIGHT : 80,
            backgroundColor: '#021227',

        },
        headerTitle: <Image style={{
            height: 200,
            width: 200,
            marginLeft: 55,
            resizeMode: 'contain'
        }}
            source={hiprLogo} />,

    }
    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>

                {/* <View style={{ alignContent: 'center', marginTop: 50, marginBottom: 10, width: "50%", height: 200, justifyContent: 'center' }} > */}
              
                    <TouchableHighlight onPress={() => navigate('Hipr')} style={{marginTop: 50, height: 50, width: 130,}}>
                        <Image
                            style={{ height: 50, width: 130, resizeMode: 'contain' }}
                            source={begin}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight >
                        <Image
                            style={{ resizeMode: 'contain', height: 50, width: 130 }}
                            source={info}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Image
                            style={{ resizeMode: 'contain', height: 50, width: 220 }}
                            source={leaderBrd}
                        />
                    </TouchableHighlight>

                </View>

            // </View>
        )


    }
}