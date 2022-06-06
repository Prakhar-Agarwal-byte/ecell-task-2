// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcQr-xm0gqX0C0eB025v63feoRXRyx6dM",
  authDomain: "team-expansion-54ae7.firebaseapp.com",
  databaseURL: "https://team-expansion-54ae7-default-rtdb.firebaseio.com",
  projectId: "team-expansion-54ae7",
  storageBucket: "team-expansion-54ae7.appspot.com",
  messagingSenderId: "932038990518",
  appId: "1:932038990518:web:b67532c58cf678c6bfa417",
  measurementId: "G-W310M4WJL0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
