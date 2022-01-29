// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFlihYsQ5FgeAZgTIJYkCwpZt9luonqO4",
  authDomain: "open-whiskay.firebaseapp.com",
  projectId: "open-whiskay",
  storageBucket: "open-whiskay.appspot.com",
  messagingSenderId: "310698615608",
  appId: "1:310698615608:web:a709a03daa7ebe946a17cd",
  measurementId: "G-FX6LSRYEML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);