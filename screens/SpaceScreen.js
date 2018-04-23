import React, { Component } from 'react';
import { Button,  Platform, StyleSheet, Text, View, TouchableHighlight, Image, Picker, ScrollView } from 'react-native';
import { connect } from "react-redux";
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../assets/styles';
import edits from '../reducers/Edi-T-Sets';
import {setSet } from '../actions/AssetActions';
import BackButton from "../components/BackButton";


 export default class SpaceScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {

            headerTitle:
                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{
                        height: 80,
                        width: 80,
                        alignSelf: 'center',
                        borderRadius: 40,
                        resizeMode: 'contain'
                    }}
                        source={{ uri: params.logo }} />
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
    constructor(props){
        super(props);
        state = {};
    }
   
componentDidMount() {
    const { params } = navigation.state;
    
}

render() {
    const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
       
            <Button title={'PressMe'} onPress={() => navigate('TransSwiper',{name: params.name, logo: params.logo})} /> 
            </View>
        );
    }
}

// const mapStateToProps = (state) => ({
//     name: state.AssetReducers.selectedAsset.Name,
//     logo: state.AssetReducers.selectedAsset.Logo
// });

// const mapDispatchToProps = (dispatch) => ({
//     setSet: (item) => dispatch(setSet(item))
    
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SpaceScreen);