import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbAu78CKZIFUqVhGurZxXfs0tYjv7M080",
  authDomain: "prayup-9fe0f.firebaseapp.com",
  projectId: "prayup-9fe0f",
  storageBucket: "prayup-9fe0f.appspot.com",
  messagingSenderId: "175364976092",
  appId: "1:175364976092:web:65a5faa819c0e1d06db319",
  measurementId: "G-7GP68PV1XK"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);

export default fireApp;