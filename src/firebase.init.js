// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrO_X_6i3jPZU7pZwRPc0f8aW_1Fj7Uh0",
  authDomain: "hasan-mohammad.firebaseapp.com",
  projectId: "hasan-mohammad",
  storageBucket: "hasan-mohammad.appspot.com",
  messagingSenderId: "554281928448",
  appId: "1:554281928448:web:f6123df1b3930de2b215e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;