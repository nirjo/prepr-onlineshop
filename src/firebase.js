// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "./firebae/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO4KlMd_NR_jNCX9o09yT4sSrUnn_IdVo",
  authDomain: "login-firebase-1da12.firebaseapp.com",
  projectId: "login-firebase-1da12",
  storageBucket: "login-firebase-1da12.appspot.com",
  messagingSenderId: "466912446100",
  appId: "1:466912446100:web:32b466cc4d405633ae1681",
  measurementId: "G-ZQGJ1VCLMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const getAuth = getAnalytics(app);