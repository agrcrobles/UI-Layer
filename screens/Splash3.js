import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';

import { StackNavigator } from 'react-navigation';


import originator from "../assets/originator.png";
import recipient from "../assets/recipient.png";

import documents from "../assets/documents.png";
import camera from "../assets/cameraLabel.png";
import styles from "../assets/styles";
import manual from "../assets/manLabel.png";
import EDIT from "../assets/EDIT-Sets.png";
import { connect } from "react-redux";

class Splash3 extends Component {
    static navigationOptions = {
        header: null

    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.transInfo, 'onmount selasset')


    }
    // this.props.navigation.state.params.image
    render() {
        const { navigate } = this.props.navigation;
        // let image = this.props.asset.Images ? this.props.asset.Images[0] : null;
        let locationImage = this.props.transInfo.location === 'recipient' ? recipient : originator;
        let logo = this.props.transInfo.logo;
        let asset = this.props.transInfo;
        let hercId = this.props.hercId;
        console.log(asset, 'splash3 this.props.selectedAsset ');

        return (
            <View style={styles.containerCenter}>
                <View style={styles.assetField}>
                    <Image style={styles.assetButton} source={{ uri: logo }} />
                    <Text style={styles.assetLabel}>{asset.name}</Text>
                </View>

                    <Image style={styles.assetLocation} source={locationImage} />
                <View style={styles.field}>
                    <Text style={styles.label}>HercID: {hercId}</Text>
                    {/* <TextInput style={styles.input} placeholder="ID" /> */}
                </View>
                <View style={styles.spaceAroundContainer}>
                    <TouchableHighlight onPress={() => navigate('FileUp')}>
                        <Image
                            style={styles.menuInputTitle}
                            source={camera}
                        />

                    </TouchableHighlight>
                    <Image source={{uri: logo}} />
                    <TouchableHighlight onPress={() => navigate('DocUp')}>
                        <Image
                            style={styles.menuInputTitle}
                            source={documents}
                        />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => navigate('InputMan')}>
                        <Image
                            style={styles.menuInputTitle}
                            source={manual}
                        />
                    </TouchableHighlight>

                <TouchableHighlight>
                    <Image
                        style={styles.menuInputTitle}
                        source={EDIT}
                    />
                </TouchableHighlight>
                </View>
            </View>


        )
    };
}

const mapStateToProps = (state) => ({
    transInfo: state.AssetReducers.transInfo,
    hercId: state.AssetReducers.hercId

});
export default connect(mapStateToProps)(Splash3);