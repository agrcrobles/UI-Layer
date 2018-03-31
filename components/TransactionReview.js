import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import styles from '../assets/styles';
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";
import submit from "../assets/submitButton.png";


class TransRev extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        let transInfo = this.props.transInfo;
        let transDat = this.props.transDat;
        console.log(transInfo, 'transinfo in transreviewrender', transDat, 'transdata')
        let list;
        let locationImage = this.props.transInfo.location === 'recipient' ? recipient : originator;
        let dTime = new Date().toString();
        let image = transInfo.image || null;

        console.log((transDat.hasOwnProperty('properties')));


        transDat.hasOwnProperty('properties')
            ?

            list = Object.keys(transDat.properties).map((name, idx) => {
                console.log(name, 'name in for loop in review')
                return (

                    <View key={idx} style={styles.revPropField}>
                        <Text style={styles.transRevName}>{name}</Text>
                        <Text style={styles.revPropVal}>{transDat.properties[name]}</Text>

                    </View>
                )
            }) :
            list = null;


        return (

            <View style={styles.container}>
                <Text style={styles.transReview}>Transaction Review</Text>

                {/* <Image style={styles.assetLocation} source={locationImage} /> */}
                <Text style={styles.transRevName}>{transInfo.name}</Text>
                <Image style={styles.assetLocation} source={locationImage} />
                <Text style={styles.revPropVal}>{dTime}</Text>
                <Image style={styles.thumb} source={{ uri: image }} />
                <View style={{ flex: 1, backgroundColor: 'blue' }}>
                    {list}
                </View>
                <TouchableHighlight onPress={this.props.sendTrans}>
                    <Image source={submit} style={styles.assetLocation} />
                </TouchableHighlight>
            </View>

        )
    }
}

const mapStateToProps = (state) => ({
    transInfo: state.AssetReducers.transInfo,
    transDat: state.AssetReducers.transDat
})
const mapDispatchToProps = (dispatch) => ({
    sendTrans: (transDat) => dipatch(sendTrans(transDat))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransRev);