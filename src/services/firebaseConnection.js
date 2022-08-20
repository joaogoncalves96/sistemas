// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBI6YR_GTzS9DF6uyoiZ26eSsNlkoNGc8o",
    authDomain: "sistema-6a364.firebaseapp.com",
    projectId: "sistema-6a364",
    storageBucket: "sistema-6a364.appspot.com",
    messagingSenderId: "458954269592",
    appId: "1:458954269592:web:dc6b64d2f77e9f758001ed",
    measurementId: "G-2R4E29JKTJ",
  };

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;