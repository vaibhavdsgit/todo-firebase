import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3tuspYCj5dcdUelzL1wBhfMZNIc30VhU",
    authDomain: "todoapp-6ce39.firebaseapp.com",
    projectId: "todoapp-6ce39",
    storageBucket: "todoapp-6ce39.appspot.com",
    messagingSenderId: "848636797138",
    appId: "1:848636797138:web:6c6034e8ea124b36070d0b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export {db};

