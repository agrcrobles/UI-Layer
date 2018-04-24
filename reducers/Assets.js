// import React, { Component } from 'react';
// import firebase from '../constants/Firebase';

// // firebase.initializeApp(ApiKeys.FirebaseConfig);

// const rootRef = firebase.database().ref();

// let assetList = [];
// rootRef.child('assets').on('value', (snapshot) => {
//     snapshot.forEach((obj) => {
//         console.log(obj.toJSON(), 'object in listassets');
//         assetList.push({
//             name: obj.toJSON().Name,
//             key: obj.key,
//             logo: obj.toJSON().Logo,
//             // url: obj.toJSON().url
//         });
        
//     })
    
// })

// const assets = assetList;

// export default assets;