// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaTbNi6f9d4pq3Q87GQyarAPNovQ1S31E",
  authDomain: "mealstogo-765a8.firebaseapp.com",
  projectId: "mealstogo-765a8",
  storageBucket: "mealstogo-765a8.appspot.com",
  messagingSenderId: "616186008163",
  appId: "1:616186008163:web:d6ea7cff038905fa429e56"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const getAuth = auth.getAuth(); //เช็คว่า login รึยัง?

export const firebase = { auth, getAuth }; //เรียกใช้ firebase
