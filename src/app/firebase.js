// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJJ-wMXk_e5y6SPFIZ0rH_TcKy5rpapBc",
    authDomain: "final-project-react-45f6b.firebaseapp.com",
    projectId: "final-project-react-45f6b",
    storageBucket: "final-project-react-45f6b.appspot.com",
    messagingSenderId: "947744420804",
    appId: "1:947744420804:web:8aa86427a83898d185aa91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };