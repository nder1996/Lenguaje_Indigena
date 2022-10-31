// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcPuyiSKDdeifgygq9cD2eLe-zYwQS6T0",
    authDomain: "khipar-app-f5ead.firebaseapp.com",
    projectId: "khipar-app-f5ead",
    storageBucket: "khipar-app-f5ead.appspot.com",
    messagingSenderId: "24714536867",
    appId: "1:24714536867:web:20380a90038d06e90e1c16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };