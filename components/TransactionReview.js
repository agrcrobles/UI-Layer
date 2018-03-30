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
        let transInfo = this.props.transInfo;
        console.log(transInfo, 'transinfo in transreviewrender')
        let list;
        let locationImage = this.props.transInfo.location === 'recipient' ? recipient : originator;
        let dTime = new Date().toString();
        let image = transInfo.image || null;

        transInfo.hasOwnProperty('newProps') ?

            list = Object.keys(transInfo.newProps).map((propName, idx) => {
                let name = propName;
                return (

                    <View key={idx} style={styles.revPropField}>
                        <Text style={styles.transRevName}>{name}</Text>
                        <Text style={styles.revPropVal}>{transInfo.newProps[name]}</Text>

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
                <View style={{flex: 1, backgroundColor: 'blue'}}>
                    {list}
                </View>

            </View>

        )
    }
}

const mapStateToProps = (state) => ({
    transInfo: state.AssetReducers.transInfo,
})
const mapDispatchToProps = (dispatch) => ({
    sendTrans: (transInfo) => dipatch(sendTrans(transInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransRev);