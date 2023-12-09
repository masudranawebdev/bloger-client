// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ_hl7DVQzXIjETNSHobT3AxU7e0GoqLo",
  authDomain: "bloger-1cc4b.firebaseapp.com",
  projectId: "bloger-1cc4b",
  storageBucket: "bloger-1cc4b.appspot.com",
  messagingSenderId: "528928779132",
  appId: "1:528928779132:web:c65531992136d6a11752f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;