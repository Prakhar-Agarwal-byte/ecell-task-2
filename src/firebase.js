// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7iBNcvSjKahmSiyWmzxUa2nfibVXWkWw",
  authDomain: "ecell-task-2.firebaseapp.com",
  projectId: "ecell-task-2",
  storageBucket: "ecell-task-2.appspot.com",
  messagingSenderId: "122380053346",
  appId: "1:122380053346:web:d3eb3fd93afd77bf3c9a3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
