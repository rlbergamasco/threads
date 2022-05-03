// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBY1PK7CWVzk2BA5Hc-ASDjsSW1YzzK9oo",
    authDomain: "threads-590ui.firebaseapp.com",
    projectId: "threads-590ui",
    storageBucket: "threads-590ui.appspot.com",
    messagingSenderId: "583984524683",
    appId: "1:583984524683:web:20a56a704806d777ef538e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export {
    storage, firebase as default
}