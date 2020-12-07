// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDfM5AoELdntRPWZt9NTWMq3kW1u0_6IH4",
  authDomain: "clone-c5dbd.firebaseapp.com",
  databaseURL: "https://clone-c5dbd.firebaseio.com",
  projectId: "clone-c5dbd",
  storageBucket: "clone-c5dbd.appspot.com",
  messagingSenderId: "272421231081",
  appId: "1:272421231081:web:464fede59f57cd982f1378",
  measurementId: "G-23236XB1ZY",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
