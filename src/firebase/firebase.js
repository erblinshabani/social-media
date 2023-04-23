// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBP4B_dmSbtsH4C_axGOj9isjqiDIHIBg",
  authDomain: "project-683dc.firebaseapp.com",
  projectId: "project-683dc",
  storageBucket: "project-683dc.appspot.com",
  messagingSenderId: "991600863268",
  appId: "1:991600863268:web:b4a7c520cd5f2fa3f9d0b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)