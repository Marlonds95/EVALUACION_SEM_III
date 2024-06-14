// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKn5wlz1g6IdR-ESu-YgxbpMgi671ZFbQ",
  authDomain: "app-evaluacion-277b5.firebaseapp.com",
  databaseURL: "https://app-evaluacion-277b5-default-rtdb.firebaseio.com",
  projectId: "app-evaluacion-277b5",
  storageBucket: "app-evaluacion-277b5.appspot.com",
  messagingSenderId: "451595217329",
  appId: "1:451595217329:web:d0a1d8838170bc601a3590"
  
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
//export const auth = getAuth(firebase);
export const auth = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

//Referencia al servicio de BDD
export const dbRealTime = getDatabase(firebase);