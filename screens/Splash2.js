import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Image, ScrollView, TouchableHighlight, Alert, TouchableNativeFeedback } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import arrow from "../assets/icon_backarrow.png";
import styles from "../assets/styles";
import { connect } from 'react-redux';



class Splash2 extends Component {
  
componentDidMount() {
  console.log(this.props, 'thispropsSpash2')
}
  render() {



    const { navigate } = this.props.navigation;
    console.log(this.props, "this.props")
    return (
      <View style={styles.container}>
 
       <Image style={styles.assetButton} source={this.props.selectedAsset.Logo} />
          
          
        
        <View style={{height: 200, width: '80%', alignItems:'center', backgroundColor: 'yellow', justifyContent:'space-between'}}>
          <TouchableHighlight onPress={() => navigate('Splash3', { location: 'destination' })}>
            <Image
              style={styles.menuInputTitle}
              source={require('../assets/destinationLabel.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('Splash3', { location: 'origin' })}>
            <Image
              style={styles.menuInputTitle}
              source={require('../assets/originLabel.png')}
            />
          </TouchableHighlight>
        </View>
         

        </View>
     
    
    )
  };
}

const mapStateToProps = (state) => ({ 
  selectedAsset: state.selectedAsset,
  
});
// const mapDispatchToProps = (dispatch) => ({
  
//   selectAsset: (assetIndex) =>
//     dispatch(selectAsset(assetIndex)),
  
//   listAssets: () =>  dispatch(listAssets())
   
// })
export default connect(mapStateToProps)(Splash2);