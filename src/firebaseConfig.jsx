// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDvZH80DL6FfizfkgRKz4C_kNTrBlYuNAs",
  authDomain: "skillswap-bfe58.firebaseapp.com",
  projectId: "skillswap-bfe58",
  storageBucket: "skillswap-bfe58.firebasestorage.app",
  messagingSenderId: "333130925183",
  appId: "1:333130925183:web:f53afa26460c2f30c62b4a"
};



// Initialize Firebase app and export necessary modules
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

