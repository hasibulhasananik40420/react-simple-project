// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf3mGk6ag5i9_q0Imsylu100AP6pVERm8",
  authDomain: "ema-jhon-simple-project-38f56.firebaseapp.com",
  projectId: "ema-jhon-simple-project-38f56",
  storageBucket: "ema-jhon-simple-project-38f56.appspot.com",
  messagingSenderId: "84214143410",
  appId: "1:84214143410:web:577601df9323515d146cab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth