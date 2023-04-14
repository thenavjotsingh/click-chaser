// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsJzWxUsDgyOnegacm3mCfSJo4_k0FJjU",
  authDomain: "chase-the-clicks-f187b.firebaseapp.com",
  databaseURL: "https://chase-the-clicks-f187b-default-rtdb.firebaseio.com",
  projectId: "chase-the-clicks-f187b",
  storageBucket: "chase-the-clicks-f187b.appspot.com",
  messagingSenderId: "1026269381662",
  appId: "1:1026269381662:web:fab2bdbc2f04e8597f5a0f",
  measurementId: "G-G6BPRV1DL4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

export { database };
