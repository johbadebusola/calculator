// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-JOMMbfU9Ia3zHybtSKTEFvzI4ovtpLc",
  authDomain: "my-calculator-27eb9.firebaseapp.com",
  projectId: "my-calculator-27eb9",
  storageBucket: "my-calculator-27eb9.appspot.com",
  messagingSenderId: "851990260743",
  appId: "1:851990260743:web:0c4719b4db1da9eb730ea2",
  measurementId: "G-95BSTJJ176"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app