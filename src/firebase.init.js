// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNsa3v8nGYk1Asy7DihhDkjayF8Trg-U",
  authDomain: "my-single-base-website.firebaseapp.com",
  projectId: "my-single-base-website",
  storageBucket: "my-single-base-website.appspot.com",
  messagingSenderId: "883001037673",
  appId: "1:883001037673:web:9d5fa1818bf33ee80a63f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;