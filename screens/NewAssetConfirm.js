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
import fee from "../assets/hercFEE.jpg";
import { incHercId, confirmAsset } from "../actions/AssetActions"
class NewAssetConfirm extends Component {

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
        console.log(this.props)

    }


    _onPressSubmit(coreProps) {
        const { navigate } = this.props.navigation;
        // let asset = Object.values(this.props.newAsset.coreProps);
        let Name = this.props.Name;

        Name = {
            Name,
            hercId: this.props.hercId,
            Logo: this.props.Logo,
            coreProps
        }
        console.log(Name)
        this.props.confirmAsset(Name);
        navigate('MenuOptions');
        // console.log(this.state.AssetReducers.assets, 'assets after')
    }


    render() {

        const { navigate } = this.props.navigation;
        console.log(this.props.coreProps, "confirmselasset")
        console.log(this.props.Name);
        let Logo = this.props.Logo;
        let Name = this.props.Name;

        let newProperties = Object.values(this.props.coreProps);
        console.log(newProperties, 'newprops');
        const coreProps = {};

        for (const key of newProperties) {
            coreProps[key] = "";
        }

        console.log(coreProps, 'corprops');
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

                <Submit onPress={() => this._onPressSubmit(coreProps)} />
                <Image style={styles.assetFee} source={fee} />
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


