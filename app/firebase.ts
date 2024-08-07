// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import exp from "constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5R0co73Owz9Wnauewr5q2JWkmkXsjTaU",
  authDomain: "zekademy-602f9.firebaseapp.com",
  projectId: "zekademy-602f9",
  storageBucket: "zekademy-602f9.appspot.com",
  messagingSenderId: "709540982528",
  appId: "1:709540982528:web:b26dda770bf710c3214de5",
  measurementId: "G-DB4GP7W21N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);