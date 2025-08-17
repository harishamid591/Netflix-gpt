// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnpkLlCg7BM7GwfXJdf2k5PrWjZBvKdr8",
  authDomain: "netflixgpt-2fad7.firebaseapp.com",
  projectId: "netflixgpt-2fad7",
  storageBucket: "netflixgpt-2fad7.firebasestorage.app",
  messagingSenderId: "270183885983",
  appId: "1:270183885983:web:a4a09921b335391eee06aa",
  measurementId: "G-4ML627P8DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();