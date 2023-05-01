// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiHtU_CtSbIBNS8KwTTsyUIrV_1TG418o",
  authDomain: "ema-john-with-firebase-a-dedc6.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-dedc6",
  storageBucket: "ema-john-with-firebase-a-dedc6.appspot.com",
  messagingSenderId: "627174691349",
  appId: "1:627174691349:web:a1253af9e1fd382d65b41c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;