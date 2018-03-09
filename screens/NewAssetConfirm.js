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


    _onPressSubmit() {
        // let asset = Object.values(this.props.newAsset.CoreProperties);
        console.log(this.props.newAsset);

    }


    render() {

        const { navigate } = this.props.navigation;
        console.log(this.props.CoreProperties, "confirmselasset")
        console.log(this.props.Name);
        let Logo = this.props.Logo;
        let Name = this.props.Name;

       let newProperties = Object.values(this.props.CoreProperties);
       console.log(newProperties, 'newprops'); 
       const CoreProperties = {};

       for (const key of newProperties) {
            CoreProperties[key] = "";
       }
      
       console.log(CoreProperties, 'corprops');
           let list = newProperties.map((x,i) => {
            return (

                <View key={i} style={styles.field}>
                    <Text style={styles.label}>{x}</Text>
                    <Text style={styles.input}>""</Text>
                </View>
            )
            })

        return (
            <View style={styles.containerCenter}>

                <Image source={{uri: Logo}} />

                <View style={styles.inputMenu}>
                    {list}
                </View>

              

                <Submit onPress={this._onPressSubmit} />
                <Image style={styles.assetFee} source={fee} />
            </View>




        )
    }
}


const mapStateToProps = (state) => ({
    Name: state.AssetReducers.newAsset.Name,
    Logo: state.AssetReducers.newAsset.Logo,
    CoreProperties: state.AssetReducers.newAsset.CoreProperties

    // selectedAsset: state.AssetReducers.selectedAsset
    // newProperties: state.AssetReducers.selectedAsset.newProperties


});
const mapDispatchToProps = (dispatch) => ({
    addAsset: (newAsset) =>
        dispatch(addAsset(newAsset)
        )
})
export default connect(mapStateToProps, mapDispatchToProps)(NewAssetConfirm);


