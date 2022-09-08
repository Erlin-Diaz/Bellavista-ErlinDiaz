// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCha6PhXfjn6byHrt0vhdP2EvNE2JmJvuQ",
  authDomain: "bellavista-389c9.firebaseapp.com",
  projectId: "bellavista-389c9",
  storageBucket: "bellavista-389c9.appspot.com",
  messagingSenderId: "1018088111976",
  appId: "1:1018088111976:web:12a008d5256178ac7160dd",
  measurementId: "G-X180BTGPVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);