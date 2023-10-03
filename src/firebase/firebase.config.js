// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS3FttyN7lGBUFmT3gBknUCVHiKoX2tWA",
  authDomain: "react-dragon-newsauth.firebaseapp.com",
  projectId: "react-dragon-newsauth",
  storageBucket: "react-dragon-newsauth.appspot.com",
  messagingSenderId: "759173160690",
  appId: "1:759173160690:web:45d1261b54fbb91f737a6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;