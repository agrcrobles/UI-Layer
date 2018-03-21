import ApiKeys from '../constants/apiKeys';
import * as firebase from 'firebase';

firebase.initializeApp(ApiKeys.FirebaseConfig);

const rootRef = firebase.database().ref();

let assets = [];
rootRef.on('value', (snapshot) => {
    //    let asset = snapshot.toJSON();
    // var size = Object.keys(asset).length;
    //    let keys = Object.keys(obj.coreProps);//this might not work
    snapshot.forEach((obj) => {
        assets.push({
            key: obj.key,
            name: obj.toJSON().Name,
            logo: obj.toJSON().Logo
        })
        console.log(obj.child('CoreProps').val(), 'haschilds?')//this is coreProps!! that's how! 
    })
    console.log(assets.length, 'assets')
})



export default assets;