import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import { StackNavigator } from 'react-navigation';
import Swiper from '../components/TxSwiper';
import { connect } from "react-redux";
import styles from '../assets/styles';
import TransRev from "../components/TransactionReview";
import BackButton from "../components/BackButton";

class TransSwiper extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {

            headerTitle:
                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableHighlight onPress={() => navigation.navigate('MenuOptions')}>
                        <Image style={{
                            height: 80,
                            width: 80,
                            alignSelf: 'center',
                            borderRadius: 40,
                            resizeMode: 'contain'
                        }}
                            source={{ uri: params.logo }} />
                    </TouchableHighlight>
                    <Text style={styles.assetHeaderLabel}>{params.name}</Text>
                </View>,

            headerStyle: {
                height: Platform.OS === 'android' ? 100 + STATUS_BAR_HEIGHT : 100,
                backgroundColor: '#021227',

            },
            headerTitleStyle: {
                marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
                textAlign: 'center',
                alignSelf: 'center',
                // textAlignVertical: 'center',
                backgroundColor: '#021227',

            },
            headerRight: <View></View>,
            headerLeft: <BackButton navigation={navigation} />

        }
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log('Swiper Here');


    }


    render() {
        console.log(this.props.assets);
        return (
            <View style={styles.container}>
                <Text> Hello</Text>
                <Swiper cards={this.props.assets} />
            </View>
        )
    }

}

const mapStateToProps = (state) => ({
    assets: state.AssetReducers.assets
})

export default connect(mapStateToProps)(TransSwiper);