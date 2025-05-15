// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY2BMJdI41NI5SJdW9gkbBD1JJGCuEpG4",
  authDomain: "moviemagic-2908.firebaseapp.com",
  projectId: "moviemagic-2908",
  storageBucket: "moviemagic-2908.firebasestorage.app",
  messagingSenderId: "878253479323",
  appId: "1:878253479323:web:f89cf0aa550060c6133d3e",
  measurementId: "G-K6XJNG84G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();