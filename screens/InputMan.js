import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import Next from "../components/NextBtn";
import styles from "../assets/styles";
import destination from "../assets/destinationLabel.png";
import origin from "../assets/originLabel.png";
import pictures from "../assets/picturesLabel.png";
import { StackNavigator, } from 'react-navigation';

export default class InputMan extends Component {
    render() {
        let image = this.props.navigation.state.params.image === 'destination' ? destination : origin;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <Image style={styles.menuInputTitle} source={image} />

                <TouchableHighlight onPress={() => navigate('FileUp')}>
                    <Image
                        style={styles.button}
                        source={pictures}
                    />
                </TouchableHighlight>

                <ScrollView contentContainerStyle={styles.menu}>
                    <View style={styles.scrollContent}>

                        <View style={styles.field}>
                            <Text style={styles.label}>Bar ID</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(Bar_Id) => this.setState({ Bar_Id })}
                                placeholder="Bar ID"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Bar Serial</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(Bar_Serial) => this.setState({ Bar_Serial })}
                                placeholder="Bar Serial"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Vault Location</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(Vault_Location) => this.setState({ Vault_Location })}
                                placeholder="Vault Location"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Weight</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(Weight) => this.setState({ Weight })}
                                placeholder="Weight"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Purity</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(Purity) => this.setState({ Purity })}
                                placeholder="Purity"

                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Date Received</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(Date_Received) => this.setState({ Date_Received })}
                                placeholder="Date Recieved"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Date Processed</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(Date_Processed) => this.setState({ Date_Processed })}
                                placeholder="Date Processed"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Mint</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(Mint) => this.setState({ Mint })}
                                placeholder="Mint"
                            />
                        </View>

                        <View style={styles.field}>
                            <Text style={styles.label}>Supplier</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(Supplier) => this.setState({ Supplier })}
                                placeholder="Supplier"
                            />
                        </View>
                    </View>
                </ScrollView>

                <Next onPress={() => {
                    console.log(this.state);
                    navigate('Confirm', { image: 'destination', values: this.state })
                }}
                />
            </View>
        )
    }
}
