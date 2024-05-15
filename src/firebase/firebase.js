// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG9P74AIhd0JgsfAF1qQBN70Gi7rUQRiM",
  authDomain: "quiz-app-2ae1f.firebaseapp.com",
  projectId: "quiz-app-2ae1f",
  storageBucket: "quiz-app-2ae1f.appspot.com",
  messagingSenderId: "669924178418",
  appId: "1:669924178418:web:ecd889021ceac3fc68d36b",
  measurementId: "G-MGTXK9PQMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export {app,auth}