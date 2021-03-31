// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC42i_p26zTB3ATwqu0Yodx5mwQyuk2GSQ",
    authDomain: "tiktok-clone-a90f7.firebaseapp.com",
    projectId: "tiktok-clone-a90f7",
    storageBucket: "tiktok-clone-a90f7.appspot.com",
    messagingSenderId: "879186834374",
    appId: "1:879186834374:web:030e3f4c38c20d0b87b8c7",
    measurementId: "G-9V6BZVRJ67"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;