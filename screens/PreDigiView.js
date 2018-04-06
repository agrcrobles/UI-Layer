import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableHighlight, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { STATUS_BAR_HEIGHT } from '../constants';
import { connect } from 'react-redux';
import styles from '../assets/styles';

class PreDigi extends Component {
        render() {
            const { navigate } = this.props.navigation;
            console.log(this.props)
            let list = this.props.assets.map((asset, index) => {
              return (
                <View key={index} style={styles.assetField}>
                  <Text style={styles.assetLabel}>{asset.name}</Text>
                  <TouchableHighlight style={{alignSelf: 'flex-start'}} onPress={() => navigate('Digi', {logo: asset.logo, name: asset.name})}  >
                    <Image style={styles.assetButton} source={{uri:asset.logo}} />  
                  </TouchableHighlight>
                </View>
              )
            });
        return(

            <View style={styles.container}>
            
            {list}
            
            
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    assets: state.AssetReducers.assets,
  
  });

  export default connect(mapStateToProps)(PreDigi);