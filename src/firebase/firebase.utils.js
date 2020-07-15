import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
        apiKey: "AIzaSyAgwwc9Ji5NnRGyHgFkLtHiBx6HCy2bbTE",
        authDomain: "ecomapp-5abf4.firebaseapp.com",
        databaseURL: "https://ecomapp-5abf4.firebaseio.com",
        projectId: "ecomapp-5abf4",
        storageBucket: "ecomapp-5abf4.appspot.com",
        messagingSenderId: "827427800850",
        appId: "1:827427800850:web:67f6f9629fb5c5ee8d95cb",
        measurementId: "G-2EJ0EVW72T"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => (auth.signInWithPopup(provider));

export default firebase;

