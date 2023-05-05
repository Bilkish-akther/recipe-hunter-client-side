// Import the functions you need from the SDKs you need
/*eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZpJ5MFM_CTv_3nFuutWCLTCfcnJGGT8k",
  authDomain: "bangladeshi-foods-recipe.firebaseapp.com",
  projectId: "bangladeshi-foods-recipe",
  storageBucket: "bangladeshi-foods-recipe.appspot.com",
  messagingSenderId: "322799865826",
  appId: "1:322799865826:web:31505b2a89c384c03e73bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app;