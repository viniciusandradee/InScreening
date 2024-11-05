// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDQExQ2CecuIJJ3RyWiGpcGA_TkzGG6ALo",
    authDomain: "inscreening-49730.firebaseapp.com",
    projectId: "inscreening-49730",
    storageBucket: "inscreening-49730.appspot.com",
    messagingSenderId: "901527314316",
    appId: "1:901527314316:web:ce3bf2bf192422ba5800a9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getFirestore(app);

export { auth, database };