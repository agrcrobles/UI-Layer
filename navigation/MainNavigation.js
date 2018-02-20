import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Platform, Image } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../assets/styles';
import icon from '../assets/hLogo.png';
import logo from '../assets/hercLogoBreak.png';
import backArrow from '../assets/icon_backarrow.png';

import Welcome from "../screens/Welcome";
import Origin from "../screens/Origin";
import Destination from "../screens/Destination";
import FileUp from "../screens/FileUp";
import Confirm from "../screens/Confirm";
import ThankYou from "../screens/ThankYou";
import Legend from "../screens/Legend";
import MenuOptions from '../screens/MenuOptions';
import Tee from '../screens/Tee';
import Digi from '../screens/DigiViewer';
import Anthem from '../screens/Anthem';
import Hipr from '../screens/Hipr';
import Splash from '../screens/SplashPanel';
import BlockScan from '../screens/BlockScan';
import Tconf from '../screens/Tconf';
import FileThanks from '../screens/FileThanks';

const MainNavigator = StackNavigator({
    Welcome: { screen: Welcome },
    MenuOptions: { screen: MenuOptions },
    Legend: { screen: Legend },
    Tee: { screen: Tee },
    Tconf: { screen: Tconf },
    Digi: { screen: Digi },
    Anthem: { screen: Anthem },
    Hipr: { screen: Hipr },
    BlockScan: { screen: BlockScan },
    Splash: { screen: Splash },
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
            title: <Image style={{resizeMode: 'contain'}} source={logo} />,
            headerStyle: {
                height: Platform.OS === 'android' ? 80 + STATUS_BAR_HEIGHT : 80,
                backgroundColor: '#2196F3',
                justifyContent: 'space-between'
            },
            headerTitleStyle: {
                marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
                // color: 'white',
                alignSelf: 'flex-start',
                textAlign: 'center',
                paddingBottom: 15,
                flex: 1
                // height: 100,
                // width: 300
                

            },
            headerLeft: (
                <View>
                    <Image
                        source={backArrow}
                        style={styles.backArrow}
                    />
                </View>
            )
        }

    });

export default class MainNavigation extends Component {
    render() {
        return (
            <MainNavigator />
        )
    }
}