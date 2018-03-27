import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import Next from "../components/NextBtn";
import styles from "../assets/styles";
import originator from "../assets/originator.png";
import recipient from "../assets/recipient.png";
import { StackNavigator, } from 'react-navigation';
import { connect } from "react-redux";
import { addProps } from "../actions/AssetActions";
import review from "../assets/reviewLabel.png";

class InputMan extends Component {
    static navigationOptions = {
        header: null

    }
    constructor(props) {
        super(props);
        this.state = {};
    }

    _onReview = () => {
        const { navigate } = this.props.navigation;
        let attributes = this.state;
        console.log(this.state, "stateInputesfilled?");
        this.props.addProps(attributes);
        console.log("justaddedPRoperties");
        navigate('Confirm');
    }
    render() {

        let locationImage = this.props.location === 'originator' ? originator : recipient;
        let logo = this.props.logo;

        let list = Object.keys(this.props.coreProps).map((propName, idx) => {
            let name = propName;
            return (

                <View key={idx} style={styles.field}>
                    <Text style={styles.label}>{name}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.setState({ [propName]: text })}
                        placeholder={name}
                    />
                </View>

            )

        })

        return (
            <View style={styles.containerCenter}>

                <View style={styles.assetField}>
                    <Image style={styles.assetButton} source={{ uri: logo }} />
                    <Text style={styles.assetLabel}>{this.props.name}</Text>
                </View>


                 <ScrollView contentContainerStyle={{ alignItems: 'center', alignContent: 'center', alignSelf: 'center', width: '100%' }}>

                    {list}
                </ScrollView>

                <TouchableHighlight onPress={() => this._onReview()} >
                    <Image source={review} style={styles.button} />
                </TouchableHighlight>

            </View>)
    }
}

const mapStateToProps = (state) => ({
    location: state.AssetReducers.transInfo.location,
    coreProps: state.AssetReducers.transInfo.coreProps,
    logo: state.AssetReducers.transInfo.logo,
    name: state.AssetReducers.transInfo.name
    // properties: state.AssetReducers.selectedAsset.CoreProperties
});
const mapDispatchToProps = (dispatch) => ({
    addProps: (attributes) =>
        dispatch(addProps(attributes),
        )
})
export default connect(mapStateToProps, mapDispatchToProps)(InputMan);