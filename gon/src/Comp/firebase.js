//firebase.js
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';

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

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };