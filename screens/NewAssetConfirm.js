import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert, Button } from 'react-native';
import Title from "../components/MenuInputTitle";
import WelcomeHeader from "../components/WelcomeHeader";
import Submit from "../components/SubmitBtn";
import logo from "../assets/teeLabel.png";
import params from "../assets/igvcParamsLabel.png";
import { StackNavigator } from 'react-navigation';
import { ImagePicker } from 'expo';
import { connect } from "react-redux";
import styles from "../assets/styles";
import fee from "../assets/hercFeeLabel.png";
import { incHercId, confirmAsset } from "../actions/AssetActions"
class NewAssetConfirm extends Component {
    state = {};
    static navigationOptions = {
        headerTitle: <Image style={{
            height: 100,
            width: 220,
            marginLeft: '3%',
            resizeMode: 'contain'
        }}
            source={logo} />,

    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log(this.props)
        // price = data.pricePerHercForFCT
        // let price = this.getPrice();
        // fetch('https://jsondata.herc.one/service-1.0-SNAPSHOT/JSON').then(data => console.log(data.json()) ); 
        // console.log(price, 'price')
        this.getPricesFromApi();
    }

    async getPricesFromApi() {
        try {
            let response = await fetch(
                'https://jsondata.herc.one/service-1.0-SNAPSHOT/JSON'
            );
            let responseJson = await response.json();
            let fctPrice = responseJson.list["0"].pricePerHercForFCT; // this is what I'm going with for now  
            console.log(fctPrice, 'newthing');
            this.setState({ fctPrice });

        } catch (error) {
            console.error(error);
        }
    }

    _onPressSubmit(CoreProps) {
        const { navigate } = this.props.navigation;
        // let asset = Object.values(this.props.newAsset.coreProps);
        let Name = this.props.Name;

        Name = {
            Name,
            hercId: this.props.hercId,
            Logo: this.props.Logo,
            CoreProps
        }
        console.log(Name)
        this.props.confirmAsset(Name);
        navigate('MenuOptions');
        // console.log(this.state.AssetReducers.assets, 'assets after')
    }


    render() {

        // console.log(price, 'pricey?')
        let price = this.state.fctPrice;

        const { navigate } = this.props.navigation;
        console.log(this.props.coreProps, "confirmselasset")
        console.log(this.props.Name);
        let Logo = this.props.Logo;
        let Name = this.props.Name;

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
                <View style={styles.assetField}>

                    <Image style={styles.assetButton} source={{ uri: Logo }} />
                    <Text style={styles.label}>{Name}</Text>
                </View>

                <ScrollView contentContainerStyle={{ alignSelf: 'center', width: '90%' }}>

                    <View style={styles.inputMenu}>
                        {list}
                    </View>

                </ScrollView>

                <Submit onPress={() => this._onPressSubmit(CoreProps)} />

                <View style={styles.assetFee}>
                    <Image style={styles.assetFeeLabel} source={fee} />
                    <Text style={styles.teePrice}>{price}</Text>
                </View>
            </View>




        )
    }
}


const mapStateToProps = (state) => ({
    Name: state.AssetReducers.newAsset.Name,
    Logo: state.AssetReducers.newAsset.Logo,
    coreProps: state.AssetReducers.newAsset.coreProps,
    hercId: state.AssetReducers.hercId
    // selectedAsset: state.AssetReducers.selectedAsset
    // newProperties: state.AssetReducers.selectedAsset.newProperties


});
const mapDispatchToProps = (dispatch) => ({
    confirmAsset: (asset) =>
        dispatch(confirmAsset(asset)),
    incHercId: () =>
        dispatch(incHercId)
})
export default connect(mapStateToProps, mapDispatchToProps)(NewAssetConfirm);


