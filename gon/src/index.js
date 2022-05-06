import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';

import firebase from "firebase/app";
import "firebase/firestore";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//firebase.js
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
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export { firestore };
