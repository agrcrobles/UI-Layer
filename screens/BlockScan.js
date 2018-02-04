import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Alert } from 'react-native';
import blockScan from "../assets/blockScannerPanel.png";

export default class BlockScan extends Component {
    static navigationOptions = {
        header: null
      
      }
    render(){
    return (
        
            <Image style={{marginTop: 25, flex: 1, width: '100%', resizeMode: 'stretch'}} source={blockScan} />
            )
    }
}