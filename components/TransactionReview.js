import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";


class TransRev extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        let list;
        this.props.AssetReducers.hasOwnProperty('newProps') ?
            list = Object.keys(this.props.newProps).map((propName, idx) => {
                let name = propName;
                return (

                    <View key={idx} style={styles.field}>
                        <Text style={styles.label}>{name}</Text>
                        <Text style={styles.input}>{this.props.newProps[name]}</Text>

                    </View>
                )
            }) :
            list = null;
        let transInfo = this.props.transInfo;
        console.log(transInfo, 'transinfo')
        let locationImage = this.props.transInfo.location === 'recipient' ? recipient : originator;
        let dTime = new Date().toString();
        let image = transInfo.image;
        return (
            <View style={styles.container}>
                <Text style={styles.transReview}>Transaction Review</Text>

                {/* <Image style={styles.assetLocation} source={locationImage} /> */}
                <Text style={styles.transPropLabel}>{transInfo.name}</Text>
                <Text style={styles.transPropLabel}>{dTime}</Text>
                <Image style={styles.thumb} source={{ uri: image }} />
                <View>
                    {list}
                </View>

            </View>

        )
    }
}

const mapStateToProps = (state) => ({
    transInfo: state.AssetReducers.transInfo,
    AssetReducers: state.AssetReducers
})
const mapDispatchToProps = (dispatch) => ({
    sendTrans: (transInfo) => dipatch(sendTrans(transInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransRev);