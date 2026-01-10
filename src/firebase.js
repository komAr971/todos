// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMAUh1ZaTcWT6gUqidSeTI3Bxvk8GgnYk",
  authDomain: "todos-cfe07.firebaseapp.com",
  projectId: "todos-cfe07",
  storageBucket: "todos-cfe07.firebasestorage.app",
  messagingSenderId: "895615007538",
  appId: "1:895615007538:web:7e4a982dc60ddddb75f52b",
  databaseURL: "https://todos-cfe07-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;