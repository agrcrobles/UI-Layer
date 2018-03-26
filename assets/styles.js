'use strict';
import React from 'react';
import { StyleSheet } from 'react-native';
module.exports = StyleSheet.create({

    headerLogo: {
        resizeMode: 'contain',
        height: 100,
        width: 300
        // alignSelf: 'center',
        // marginBottom: 10,
        // height: 300,
        // width: 700
    },
    createParamsLogo: {
        resizeMode: 'contain',
        height: 200,
        width: 300
    },
    container: {
        flex: 1,
        backgroundColor: '#021227',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    containerCenter: {
        flex: 1,
        backgroundColor: '#021227',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menu: {
        height: 450,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#021227'
        // paddingTop: 50
        // margin: .5,
    },
    scrollMenu: {
        height: 200,
        width: "85%",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#021227',
        paddingTop: 5,
        paddingBottom: 5
    },
    scrollContent: {
        flex: 1,
        padding: 2,
        justifyContent: "space-around"
    },
    inputMenu: {
        width: '110%',
        height: 350,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: '#021227'
        // paddingTop: 50
        // margin: .5,
    },

    inputView: {
        height: 300,
        width: '95%',
        alignItems: 'center'


    },
    smallMenu: {
        height: 200,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: '#021227'
        // paddingTop: 50
        // margin: .5,
    },
    menuInputTitle: {
        width: 300,
        height: 50,
        marginBottom: 10,
        marginTop: 10
    },
    label: {
        color: "white",
        width: 120,
        fontSize: 20.2,
        fontWeight: "600",
        paddingLeft: 5

    },
    teeLabel: {
        height: 50,
        width: 300,
        resizeMode: 'contain'
    },

    field: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        backgroundColor: '#021227',
        // marginTop: 5,
        // marginBottom: 5,
        alignItems: "center",
        paddingLeft: 5
    },
    picker: {
        height: 100,
        width: '80%',
        margin: 8,
        alignSelf: 'center',
        // flexDirection: "row",
        justifyContent: "space-around",
        // width: "80%",
        // backgroundColor: '#021227',
        // marginTop: 5,
        // marginBottom: 5,
        alignItems: "center",
        paddingLeft: 5,
        backgroundColor: 'blue'
    },

    input: {
        width: 150,
        height: 40,
        textAlign: "center",
        backgroundColor: "#132c4a",
        // margin: .5,
        fontSize: 20.2,
        fontWeight: "600",
        borderColor: "#142535",
        color: "white",
        borderWidth: 1,
        // paddingLeft: 1
    },
    backArrow: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 50,
        width: 40,
        height: 40,
        backgroundColor: '#021227'
    },
    button: {
        width: 275,
        height: 47,
        backgroundColor: "#132c4a",
        margin: 5,
        borderColor: "#142535",
        borderWidth: 1,
        resizeMode: 'contain'
        // paddingLeft: 1
    },
    btnImg: {
        resizeMode: 'cover',

    },
    assetMenu: {

        height: 300,
        width: '80%',
        backgroundColor: '#021227',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5

    },
    assetField: {
        height: 120,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        backgroundColor: "#021227",
        margin: 5,
        // marginBottom: 5,
        alignItems: "center",
        padding: 2
    },

    assetMenuLabel: {
        textAlign: 'center',
        color: "white",
        width: 300,
        fontSize: 20.2,
        fontWeight: "600",
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#021227',
        margin: 10

    },
    assetButton: {
        height: 100,
        width: 100,
        margin: 3,
        borderRadius: .8

    },
    assetLocation: {
        height: 50,
        width: 200,
        resizeMode: 'cover',
        marginTop: 33
    },
    assetFee: {
        height: 50,
        width: 285,
        // resizeMode: 'cover',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center'

    },
    assetFeeLabel: {
        height: 50,
        width: 80,
        backgroundColor: '#021227',
        resizeMode: 'contain',
        marginRight: 7

    },
    teePrice: {
        backgroundColor: "#021227",
       textAlign: 'center',
        fontSize: 20.2,
        fontWeight: "400",
        // borderColor: "#142535",
        color: "white",
        height: 30,
        
    },
    subHeader: {
        flexDirection: 'row',
        width: '80%',
        height: 110,
        backgroundColor: '#021227',
        justifyContent: 'space-between',
        padding: 5,
        margin: 5,
        marginTop: 10
    }

});
