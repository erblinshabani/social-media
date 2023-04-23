// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDesOMTvdmz1EKMiY4SbyzCzI6MqHLKSuY",
  authDomain: "ushtrime-fd8ef.firebaseapp.com",
  projectId: "ushtrime-fd8ef",
  storageBucket: "ushtrime-fd8ef.appspot.com",
  messagingSenderId: "18562041170",
  appId: "1:18562041170:web:b8b495a33464598eb1268b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)