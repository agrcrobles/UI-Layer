import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Next from "../components/NextBtn";
import styles from "../assets/styles";
import destination from "../assets/destinationLabel.png";
import origin from "../assets/originLabel.png";
import { StackNavigator, } from 'react-navigation';
import { connect } from "react-redux";
import { addProps } from "../actions/AssetActions";

class InputMan extends Component {
    static navigationOptions = {
        header: null

    }
    constructor(props) {
        super(props);
        this.state = {};
    }

    _onReview = () => {
        let attributes = this.state;
        console.log(this.state, "stateInputesfilled?");
        this.props.addProps(attributes);
        console.log("justaddedPRoperties");
        // navigate('Confirm');
    }
    render() {
        const { navigate } = this.props.navigation;
        let locationImage = this.props.selectedAsset.place === 'destination' ? destination : origin;
        let logo = this.props.selectedAsset.Logo;

        let list = Object.keys(this.props.properties).map((propName, idx) => {
            let name = propName;
            return (

                <View key={idx} style={styles.field}>
                    <Text style={styles.label}>{name}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(name) => this.setState({ name })}
                        placeholder={name}
                    />
                </View>

            )

        })

        return (
            <View style={styles.containerCenter}>

                <View style={styles.subHeader}>
                    <Image style={styles.assetLocation} source={locationImage} />
                    <Image style={styles.assetButton} source={logo} />
                </View>

                <ScrollView contentContainerStyle={styles.inputMenu}>
                    <View style={{ flex: 1 }}>

                        {list}
                    </View>
                </ScrollView>

                <Next onPress={() => this._onReview()} />
            </View>

        )
    }
}

const mapStateToProps = (state) => ({

    selectedAsset: state.AssetReducers.selectedAsset,
    properties: state.AssetReducers.selectedAsset.Properties
});
const mapDispatchToProps = (dispatch) => ({
    addProps: (attributes) =>
        dispatch(addProps(attributes),
        )
})
export default connect(mapStateToProps, mapDispatchToProps)(InputMan);