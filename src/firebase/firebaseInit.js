import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCrRSPW8QS1dI5lMhyx07GdZ--gfAV10gM",
    authDomain: "fireblogs-c7f94.firebaseapp.com",
    projectId: "fireblogs-c7f94",
    storageBucket: "fireblogs-c7f94.appspot.com",
    messagingSenderId: "194182288084",
    appId: "1:194182288084:web:8594eec93397ff63192141"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {timestamp};
export default firebaseApp.firestore();