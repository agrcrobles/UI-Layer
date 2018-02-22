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

    container: {
        flex: 1,
        backgroundColor: '#021227',
        alignItems: 'center',
        

    },
    spaceAroundContainer: {
        height: 250,
        backgroundColor: '#021227',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    menu: {
        height: 450,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#021227'
        // paddingTop: 50
        // margin: .5,
    },
    assetMenu: {
        flexDirection: 'row',
        height: 180,
        width: '60%',
        backgroundColor: 'red',
        justifyContent: 'center',
        padding: 5

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
        backgroundColor: 'red',
        margin: 10

    },
    assetButton: {
        height: 100,
        width: 100,
        margin: 3

    },
    assetLocation: {
        height:50,
        width: 200,
        resizeMode: 'cover',
        marginTop: 33
    },
    menuInputTitle: {
        width: 300,
        height: 50,
        marginBottom: 10,
        marginTop: 10,
        resizeMode: 'contain'
    },
    label: {
        color: "white",
        width: 120,
        fontSize: 20.2,
        fontWeight: "600",
        paddingLeft: 5

    },
    legendInputContainer: {
        alignSelf: "center",
        padding: 5,
        width: 350,
        height: 80,
        alignItems: 'center',
        margin: 1,
        marginBottom: 10,
        backgroundColor: "#14283f",
        justifyContent: "space-around",
        flexDirection: "row"
    },
    field: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        backgroundColor: "#021227",
        // marginTop: 5,
        // marginBottom: 5,
        alignItems: "center",
        paddingLeft: 5
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
        backgroundColor: 'red'
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
    hercInput: {
        backgroundColor: '#021227',
        width: 200,
        height: 50,
        textAlign: "center",
        justifyContent: "flex-end",
        color: "white",
        paddingTop: 15
    },
    icon: {
        height: 30,
        width: 80,
        alignSelf: "center"
    },
    bigButton: {

        backgroundColor: "#14283f",
        height: 80,
        width: 350,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10



    },
    subHeader: {
        flexDirection: 'row',
        width: '80%',
        height: 110,
        backgroundColor: 'blue',
        justifyContent: 'space-between',
        padding: 5,
        
    }
});
