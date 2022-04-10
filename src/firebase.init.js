// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwMJV50ErHVYneDqndLWXytggt11i1l3o",
  authDomain: "car-services-yebenling.firebaseapp.com",
  projectId: "car-services-yebenling",
  storageBucket: "car-services-yebenling.appspot.com",
  messagingSenderId: "71230237556",
  appId: "1:71230237556:web:76c26b9c2d2dbfefcd9a21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);