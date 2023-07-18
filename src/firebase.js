import { initializeApp } from "firebase/app";
import { getFirestore } from 'firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAR0iEfdIDQNVmxNzlNOU5bUweYYL7sPFU",
    authDomain: "clone-f9aaa.firebaseapp.com",
    projectId: "clone-f9aaa",
    storageBucket: "clone-f9aaa.appspot.com",
    messagingSenderId: "1069723427516",
    appId: "1:1069723427516:web:ad38642e2ea81704f3a6b9",
    measurementId: "G-ZTXMJ5ZNTB"
};

initializeApp(firebaseConfig)

const db = getFirestore();

export default db;