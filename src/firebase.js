// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbtHzfrVZ_g3k87vbMOmBBNtLVoqVx60M",
  authDomain: "realtor-clone-458ee.firebaseapp.com",
  projectId: "realtor-clone-458ee",
  storageBucket: "realtor-clone-458ee.appspot.com",
  messagingSenderId: "1033066797858",
  appId: "1:1033066797858:web:29ed32f1cd32ad4c74237b",
  measurementId: "G-HGBP069JXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();