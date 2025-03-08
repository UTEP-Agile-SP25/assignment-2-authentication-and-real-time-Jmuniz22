// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Firebase Authentication
import { getFirestore , doc, setDoc, addDoc} from "firebase/firestore";  // Firestore Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlpAWW4om0fnLTXU2hBqdX1R50J-Yi-Y0",
  authDomain: "muniz-sandbox.firebaseapp.com",
  projectId: "muniz-sandbox",
  storageBucket: "muniz-sandbox.firebasestorage.app",
  messagingSenderId: "566570597983",
  appId: "1:566570597983:web:e777c76016de0a67ece5ea",
  measurementId: "G-NXS6DF3LNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Analytics, Auth, and Firestore
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Authentication
export const db = getFirestore(app); // Firestore
export default app;
export { doc, setDoc, addDoc };