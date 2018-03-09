import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Platform, Image, TouchableHighlight } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../constants';
import styles from '../assets/styles';
import icon from '../assets/hLogo.png';
import logo from '../assets/logo.png';
import backArrow from '../assets/icon_backarrow.png';

import Welcome from "../screens/Welcome";
import Origin from "../screens/Origin";
import Destination from "../screens/Destination";
import FileUp from "../screens/FileUp";
import DocUp from "../screens/DocUp";
import Confirm from "../screens/Confirm";
import ThankYou from "../screens/ThankYou";
import Create from "../screens/Create";
import MenuOptions from '../screens/MenuOptions';
import InputMan from '../screens/InputMan';
import Tee from '../screens/Tee';
import Digi from '../screens/DigiViewer';
import Anthem from '../screens/Anthem';
import Hipr from '../screens/Hipr';
import BlockScan from '../screens/BlockScan';
import Tconf from '../screens/Tconf';
import FileThanks from '../screens/FileThanks';
import Splash1 from '../screens/Splash1';
import Splash2 from '../screens/Splash2';
import Splash3 from '../screens/Splash3';
import NewAssetConfirm from '../screens/NewAssetConfirm';
import testFileUP from '../screens/testFileUP';

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
    Splash3: { screen: Splash3 },
    InputMan: { screen: InputMan },
    Origin: { screen: Origin },
    Destination: { screen: Destination },
    FileUp: { screen: FileUp },
    DocUp: { screen: DocUp },
    Confirm: { screen: Confirm },
    ThankYou: { screen: ThankYou },
    FileThanks: { screen: FileThanks },
    NewAssetConfirm: { screen: NewAssetConfirm },
    TestFileUP: { screen: testFileUP}


},


    {
        initialRouteName: 'Tee',
        navigationOptions: {
            headerTitle: <Image style={{
                height: 100,
                width: 254,
                marginLeft: 10
            }}
                source={logo} />,

            headerStyle: {
                height: Platform.OS === 'android' ? 80 + STATUS_BAR_HEIGHT : 80,
                backgroundColor: '#021227',

            },
            headerTitleStyle: {
                marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
                textAlign: 'left',
                textAlignVertical: 'center',
                backgroundColor: '#021227',
                
            },
            headerBackImage: require('../assets/icon_backarrow.png')
          

        }
    })

export default class MainNavigation extends Component {
    render() {
        return (
            <MainNavigator />
        )
    }
}