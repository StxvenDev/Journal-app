// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOdWid-jLLejg_3lFPhoMHCOYxTWkm81o",
  authDomain: "react-journal-app-da3e4.firebaseapp.com",
  projectId: "react-journal-app-da3e4",
  storageBucket: "react-journal-app-da3e4.appspot.com",
  messagingSenderId: "187093303286",
  appId: "1:187093303286:web:e1a004257b9b68284691d7"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDb = getFirestore(FirebaseApp);