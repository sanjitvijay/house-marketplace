// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjHwzmcdox7ARSYhfnE5xq2RHLricWX6c",
  authDomain: "house-marketplace-app-b9bb7.firebaseapp.com",
  projectId: "house-marketplace-app-b9bb7",
  storageBucket: "house-marketplace-app-b9bb7.appspot.com",
  messagingSenderId: "653465314517",
  appId: "1:653465314517:web:cf109ab3fa56b01ccbee5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()