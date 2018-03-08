import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert } from 'react-native';
import Title from "../components/MenuInputTitle";
import WelcomeHeader from "../components/WelcomeHeader";
import Submit from "../components/SubmitBtn";
import logo from "../assets/teeLabel.png";
import params from "../assets/igvcParamsLabel.png";
import { StackNavigator } from 'react-navigation';
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




    }


    // _onPressSubmit(values) {

    //   const { navigate } = this.props.navigation;


    //   navigate('BlockScan');
    // }



    render() {
        const { navigate } = this.props.navigation;
        console.log(this.props.newAsset, "confirmselasset")

        let list = Object.keys(this.props.newAsset).map((propName, idx) => {
            let name = propName;
            return (

                <View key={idx} style={styles.field}>
                    <Text style={styles.label}>{this.props.newAsset[name]}</Text>
                    <Text style={styles.input}>""</Text>
                </View>
            )
        });

        return (
            <View style={styles.containerCenter}>

                <View style={styles.inputMenu}>
                    {list}
                </View>

                {/* <Text>{this.props.selectedAsset.csv[0]}</Text>
            <Text>{this.props.selectedAsset.Images[0]}</Text> */}


                <Submit onPress={() => navigate('')} />
                <Image style={styles.assetFee} source={fee} />
            </View>




        )
    }
}


const mapStateToProps = (state) => ({
    newAsset: state.AssetReducers.newAsset
    // selectedAsset: state.AssetReducers.selectedAsset
    // newProperties: state.AssetReducers.selectedAsset.newProperties


});
// const mapDispatchToProps = (dispatch) => ({
//   commitAsset: (asset) =>
//       dispatch(commitAsset(asset)
//       )
// })
export default connect(mapStateToProps)(NewAssetConfirm);


