// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMPB8k7ieF3Wtd4fszDuLtMjHRlpwrbwE",
  authDomain: "gon111.firebaseapp.com",
  databaseURL: "https://gon111-default-rtdb.firebaseio.com",
  projectId: "gon111",
  storageBucket: "gon111.appspot.com",
  messagingSenderId: "599467628372",
  appId: "1:599467628372:web:5205e9e9c981bba4879ac1",
  measurementId: "G-N401S0RNC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {firebase}