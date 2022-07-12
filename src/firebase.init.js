// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4unNrl60jaSM2zhvl4NlhkCF9nL3K-hg",
    authDomain: "dot-note-f0f44.firebaseapp.com",
    projectId: "dot-note-f0f44",
    storageBucket: "dot-note-f0f44.appspot.com",
    messagingSenderId: "261460597521",
    appId: "1:261460597521:web:db8bd99246510868964ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;