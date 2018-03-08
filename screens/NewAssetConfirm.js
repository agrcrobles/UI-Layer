import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableHighlight, Alert, Button } from 'react-native';
import Title from "../components/MenuInputTitle";
import WelcomeHeader from "../components/WelcomeHeader";
import Submit from "../components/SubmitBtn";
import logo from "../assets/teeLabel.png";
import params from "../assets/igvcParamsLabel.png";
import { StackNavigator } from 'react-navigation';
import { ImagePicker } from 'expo';
import { connect } from "react-redux";
import styles from "../assets/styles";
import fee from "../assets/hercFEE.jpg";

class NewAssetConfirm extends Component {
    
    static navigationOptions = {
        headerTitle: <Image style={{
            height: 100,
            width: 220,
            marginLeft: '3%',
            resizeMode: 'contain'
        }}
        source={logo} />,
        
    }
    
    constructor(props) {
        super(props);
        
       this.state = {
            image: null
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
    
        console.log(result, "image results");
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
      };
    
    componentDidMount() {
        console.log(this.props)

    }


    _onPressSubmit() {
        // let asset = Object.values(this.props.newAsset.CoreProperties);
        console.log(this.props.newAsset);
     
    }



    render() {
     
        const { navigate } = this.props.navigation;
        console.log(this.props.newAsset, "confirmselasset")
         let {image}  = this.state;

        let list = Object.keys(this.props.newAsset.CoreProperties).map((propName, idx) => {
            let name = propName;
            return (

                <View key={idx} style={styles.field}>
                    <Text style={styles.label}>{this.props.newAsset.CoreProperties[name]}</Text>
                    <Text style={styles.input}>""</Text>
                </View>
            )
        });

        return (
            <View style={styles.containerCenter}>

                <View style={styles.inputMenu}>
                    {list}
                </View>

                <View style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'space-around' }}>
                    <Button
                        title="Pick a Logo!"
                        onPress={this._pickImage}
                    />
                    {image && 
                    <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                    }
                </View>


                <Submit onPress={this._onPressSubmit} />
                <Image style={styles.assetFee} source={fee} />
            </View>




        )
    }
}


const mapStateToProps = (state) => ({
    newAsset: state.AssetReducers.newAsset
    
    // selectedAsset: state.AssetReducers.selectedAsset
    // newProperties: state.AssetReducers.selectedAsset.newProperties


});
const mapDispatchToProps = (dispatch) => ({
    addAsset: (newAsset) =>
      dispatch(addAsset(newAsset)
      )
  })
export default connect(mapStateToProps, mapDispatchToProps)(NewAssetConfirm);


