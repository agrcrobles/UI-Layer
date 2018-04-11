import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert, Button } from 'react-native';
import Title from "../components/MenuInputTitle";
import Submit from "../components/SubmitBtn";
import logo from "../assets/teeLabel.png";
import params from "../assets/igvcParamsLabel.png";
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';
import BackButton from "../components/BackButton";

import { connect } from "react-redux";
import styles from "../assets/styles";
import fee from "../assets/hercLogoPillar.png";
import { incHercId, confirmAsset } from "../actions/AssetActions"

class NewAssetConfirm extends Component {
    static navigationOptions = ({navigation}) => ({
        headerStyle: {
            height: Platform.OS === 'android' ? 80 + STATUS_BAR_HEIGHT : 80,
            backgroundColor: '#021227',

        },
        headerTitle: <Image style={{
            height: 80,
            width: 200,
            marginLeft: 30,
            resizeMode: 'contain'
        }}
            source={logo} />,
        headerLeft: <BackButton navigation={navigation} />
    })

    constructor(props) {
        super(props);
    }
    state = {};

    componentDidMount() {
        console.log(this.props.hercId, 'hercid')


    }


    _onPressSubmit(CoreProps) {
        const { navigate } = this.props.navigation;
        // let asset = Object.values(this.props.newAsset.coreProps);
        let Name = this.props.Name;
        let Url = this.props.url;
        let hercId = this.props.hercId;
        let newAsset = {
            Name,
            Url,
            hercId,
            Logo: this.props.Logo,
            CoreProps
        }
        console.log(newAsset, 'newasset on its way to confirm');
        this.props.incHercId(hercId);
        console.log(hercId);
        this.props.confirmAsset(newAsset);
        // this.props.incHercId(); 
        // console.log(this.props.hercId, 'hercid Increase?')

        navigate('MenuOptions');
        // console.log(this.state.AssetReducers.assets, 'assets after')
    }


    render() {

        // console.log(price, 'pricey?')
        let price = this.state.fctPrice;

        const { navigate } = this.props.navigation;
        console.log(this.props.coreProps, "confirmselasset")
        console.log(this.props.Name);
        console.log(this.props.url)
        let Logo = this.props.Logo;
        let Name = this.props.Name;
        let Url = this.props.url;
        let hercId = this.props.hercId;
        let newProperties = Object.values(this.props.coreProps);

        console.log(newProperties, 'newprops');
        const CoreProps = {};

        for (const key of newProperties) {
            CoreProps[key] = "";
        }

        console.log(CoreProps, 'corprops');
        let list = newProperties.map((x, i) => {
            return (

                <View key={i} style={styles.field}>
                    <Text style={styles.label}>{x}</Text>
                    <Text style={styles.input}>""</Text>
                </View>
            )
        })

        return (

            <View style={styles.containerCenter}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.assetFieldHeader}>

                        <Image style={styles.assetHeaderImage} source={{ uri: Logo }} />
                        <Text style={styles.assetHeaderLabel}>{Name}</Text>
                        <Text style={styles.assetHeaderLabel}>{Url}</Text>
                        <Text style={styles.assetHeaderLabel}>HercID: {hercId}</Text>
                    </View>



                    {list}


                </ScrollView>

                <Submit onPress={() => this._onPressSubmit(CoreProps)} />

                <View style={styles.assetFee}>
                    <Image style={styles.assetFeeLabel} source={fee} />
                    <Text style={styles.teePrice}>10,000</Text>
                </View>
            </View>




        )
    }
}


const mapStateToProps = (state) => ({
    Name: state.AssetReducers.newAsset.Name,
    Logo: state.AssetReducers.newAsset.Logo,
    url: state.AssetReducers.newAsset.Url,
    coreProps: state.AssetReducers.newAsset.coreProps,
    hercId: state.AssetReducers.hercId
    // selectedAsset: state.AssetReducers.selectedAsset
    // newProperties: state.AssetReducers.selectedAsset.newProperties


});
const mapDispatchToProps = (dispatch) => ({
    confirmAsset: (asset) =>
        dispatch(confirmAsset(asset)),
    incHercId: (hercid) =>
        dispatch(incHercId(hercid))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewAssetConfirm);


