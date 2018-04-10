import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import styles from '../assets/styles';
import originator from "../assets/origin.png";
import recipient from "../assets/recipient.png";
import submit from "../assets/submitButton.png";
import { sendTrans } from "../actions/AssetActions";

class TransRev extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    _sendTrans(trans) {
        const { navigate } = this.props.navigate;
        this.props.sendTrans(trans);
        this.props.navigate('BlockScan');

    }

    render() {
        let transInfo = this.props.transInfo;
        console.log(transInfo, 'pre objass');
        let transDat = this.props.transDat;
        let finTransDat = Object.assign({}, transInfo,

            {

                ...transDat,
            }


        )
        console.log(finTransDat, 'transinfo in transreviewrender', transDat, 'transdata')
        let list;
        let locationImage = this.props.transInfo.location === 'recipient' ? recipient : originator;
        let dTime = new Date().toString();
        let image = transDat.images[0] || null;
        let editName = transDat.editName || null;
        let editNum = transDat.editNum || null;
        // let docName = transDat.documents.docUri.name || null;

        console.log((transDat.hasOwnProperty('properties')));


        transDat.hasOwnProperty('properties')
            ?

            list = Object.keys(transDat.properties).map((name, idx) => {
                console.log(name, 'name in for loop in review')
                return (

                    <View key={idx} style={styles.revPropField}>
                        <Text style={styles.transRevName}>{name}:</Text>
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
                <Text style={styles.transRevName}>HercID: {transDat.hercID}</Text>
                <Image style={styles.assetLocationNoTopMargin} source={locationImage} />
                <Text style={styles.transRevTime}>{dTime}</Text>
                <Text style={styles.editLabel}>EDI-T-SET:</Text><Text style={styles.transRevTime}>{editName}</Text>
                <Text style={styles.transRevTime}>{editNum}</Text>
                <Image style={styles.thumb} source={{ uri: image }} />
                {/* <Text style={styles.editLabel}>Document Name</Text> */}
                {/* <Text style={styles.transRevTime}>{docName}</Text> */}
                <View style={{ flex: 1 }}>
                    {list}
                </View>
                <TouchableHighlight onPress={() => this._sendTrans(finTransDat)}>
                    <Image source={submit} style={styles.assetLocationNoTopMargin} />
                </TouchableHighlight>
            </View>

        )
    }
}

const mapStateToProps = (state) => ({
    transInfo: state.AssetReducers.selectedAsset.trans.header,
   transDat: state.AssetReducers.selectedAsset.trans.data
})
const mapDispatchToProps = (dispatch) => ({
    sendTrans: (trans) => dispatch(sendTrans(trans))
})

export default connect(mapStateToProps, mapDispatchToProps)(TransRev);