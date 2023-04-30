// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNcsmhyAAW8o4dR4lXTKvENsjd_swl7Iw",
  authDomain: "billing-system-5d5f0.firebaseapp.com",
  databaseURL: "https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "billing-system-5d5f0",
  storageBucket: "billing-system-5d5f0.appspot.com",
  messagingSenderId: "406206517060",
  appId: "1:406206517060:web:149c3b532b77d39b80d111",
  measurementId: "G-J7RL5R8PC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
export { db };