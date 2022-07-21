// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBerl11saVSEDMdpC58rSRX2Fymqf4riE",
  authDomain: "k-fit-d7c72.firebaseapp.com",
  databaseURL: "https://k-fit-d7c72-default-rtdb.firebaseio.com",
  projectId: "k-fit-d7c72",
  storageBucket: "k-fit-d7c72.appspot.com",
  messagingSenderId: "652851209072",
  appId: "1:652851209072:web:fa5b6e085672419dcb65b5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
