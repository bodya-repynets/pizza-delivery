import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAMEUNwibHWERRjMiepERQILNcy2luch1A",
  authDomain: "pizza-delivery-4b0f7.firebaseapp.com",
  projectId: "pizza-delivery-4b0f7",
  storageBucket: "pizza-delivery-4b0f7.appspot.com",
  messagingSenderId: "741053564822",
  appId: "1:741053564822:web:7f71201cfffda79dd2ffb7",
  measurementId: "G-KQE516LNMG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
