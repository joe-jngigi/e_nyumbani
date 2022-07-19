// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpOqU6GLYAgwWTJWk3tFn-NCxPxiq97OE",
  authDomain: "enyumbani-26b63.firebaseapp.com",
  projectId: "enyumbani-26b63",
  storageBucket: "enyumbani-26b63.appspot.com",
  messagingSenderId: "369740477475",
  appId: "1:369740477475:web:8ec48adab9a9d4d338ed96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
