// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA919z3p_sZA6r9Y5AV-BLbVzxtcD0QPps",
  authDomain: "pp-single-page-cv.firebaseapp.com",
  projectId: "pp-single-page-cv",
  storageBucket: "pp-single-page-cv.firebasestorage.app",
  messagingSenderId: "456821168386",
  appId: "1:456821168386:web:fb2aea935760df92558a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();