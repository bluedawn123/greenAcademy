// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APPKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STROAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const firebase =  initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);

// https://green-x-1c1cd.firebaseapp.com/__/auth/handler
//Ov23liRem2PagyRhl6We
//dlf2tkatk!@