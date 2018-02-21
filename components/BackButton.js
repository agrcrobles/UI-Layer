import React, { Component } from "react";
import { View, TextInput, StyleSheet, Image, Button, Alert, ScrollView, TouchableHighlight } from 'react-native';
import arrow from "../assets/icon_backarrow.png";
import { StackNavigator, } from 'react-navigation';

export default function BackButton(props) {
    const { navigate } = this.props.navigation;

    return (
        <TouchableHighlight onPress={() => navigate('MenuOptions')} >
            <Image source={arrow} style={styles.icon} />
        </TouchableHighlight>
    )
}