// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLSQYUOkh0tSYQ3AxpD-0P5Igb8cnxdW0",
  authDomain: "enyumbani-7f16b.firebaseapp.com",
  databaseURL: "https://enyumbani-7f16b-default-rtdb.firebaseio.com",
  projectId: "enyumbani-7f16b",
  storageBucket: "enyumbani-7f16b.appspot.com",
  messagingSenderId: "704435370995",
  appId: "1:704435370995:web:27a00645494696afd0b086",
  measurementId: "G-EYYZGT6MYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
