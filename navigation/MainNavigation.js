import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Platform, Image, TouchableHighlight } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../assets/styles';
import icon from '../assets/hLogo.png';
import logo from '../assets/logo.png';
import arrow from "../assets/icon_backarrow.png";

import Welcome from "../screens/Welcome";
import Origin from "../screens/Origin";
import Destination from "../screens/Destination";
import FileUp from "../screens/FileUp";
import Confirm from "../screens/Confirm";
import ThankYou from "../screens/ThankYou";
import Create from "../screens/Create";
import MenuOptions from '../screens/MenuOptions';
import InputMan from '../screens/InputMan';
import Tee from '../screens/Tee';
import Digi from '../screens/DigiViewer';
import Anthem from '../screens/Anthem';
import Hipr from '../screens/Hipr';
import Splash1 from '../screens/Splash1';
import Splash2 from '../screens/Splash2';
import BlockScan from '../screens/BlockScan';
import Tconf from '../screens/Tconf';
import FileThanks from '../screens/FileThanks';

const MainNavigator = StackNavigator({
    Welcome: { screen: Welcome },
    MenuOptions: { screen: MenuOptions },
    Create: { screen: Create },
    Tee: { screen: Tee },
    Tconf: { screen: Tconf },
    Digi: { screen: Digi },
    Anthem: { screen: Anthem },
    Hipr: { screen: Hipr },
    BlockScan: { screen: BlockScan },
    Splash1: { screen: Splash1 },
    Splash2: { screen: Splash2 },
    InputMan: { screen: InputMan },
    Origin: { screen: Origin },
    Destination: { screen: Destination },
    FileUp: { screen: FileUp },
    Confirm: { screen: Confirm },
    ThankYou: { screen: ThankYou },
    FileThanks: { screen: FileThanks }

},


    {
        initialRouteName: 'Welcome',
        navigationOptions: {
            title: <Image style={{
                height: 300,
                width: 800,
                // marginBottom: 10 
            }}
                source={logo} />,

            headerStyle: {
                height: Platform.OS === 'android' ? 80 + STATUS_BAR_HEIGHT : 80,
                backgroundColor: '#2196F3',
                justifyContent: 'space-between',

            },
            headerTitleStyle: {
                // marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
                // color: 'white',
                textAlign: 'left',
                textAlignVertical: 'center',
                // alignSelf: 'center',
                // justifyContent: 'center',
                marginLeft: '10%',
                width: 300,
                height: 150,
                backgroundColor: '#021227',
                // margin: .5



            },
            headerLeft: (
                <View>
                    <TouchableHighlight  >
                        <Image source={arrow} style={styles.icon} />
                    </TouchableHighlight>
                </View>
            )
        }

    });

export default class MainNavigation extends Component {
    render() {
            
        console.log(this.props.navigate);
        return (
            <MainNavigator />
        )
    }
}