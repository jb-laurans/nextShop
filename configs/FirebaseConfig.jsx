// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIyob0ugqL63541Rgdi3IdbwrLos7y1R8",
  authDomain: "business-shop-3f9bf.firebaseapp.com",
  projectId: "business-shop-3f9bf",
  storageBucket: "business-shop-3f9bf.appspot.com",
  messagingSenderId: "583335307296",
  appId: "1:583335307296:web:325c437da3020d19653445"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)