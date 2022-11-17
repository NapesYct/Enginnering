// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPlAp-_rBXk0s9OePFID9Kp0MZ6u70cs0",
  authDomain: "napes-8dbe1.firebaseapp.com",
  projectId: "napes-8dbe1",
  storageBucket: "napes-8dbe1.appspot.com",
  messagingSenderId: "294561084029",
  appId: "1:294561084029:web:70690f7202cfbc0fe1f714",
  measurementId: "G-RQPS5DRYLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()