import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDMkn8hUKrs6sEiKMnQbswdBJlv4lZzHmA",
  authDomain: "login-680e0.firebaseapp.com",
  projectId: "login-680e0",
  storageBucket: "login-680e0.appspot.com",
  messagingSenderId: "299589919891",
  appId: "1:299589919891:web:0c5a124fe8202f803ed966",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

// Use these for db & auth

export default fire;
