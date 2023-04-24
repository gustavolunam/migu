// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUOH1mTWSZP8D781FHRljfV8u9uqWLGaw",
    authDomain: "projectmigu-af702.firebaseapp.com",
    databaseURL: "https://projectmigu-af702-default-rtdb.firebaseio.com",
    projectId: "projectmigu-af702",
    storageBucket: "projectmigu-af702.appspot.com",
    messagingSenderId: "157820076475",
    appId: "1:157820076475:web:b91caf6d7270887814449e",
    measurementId: "G-9HF58RD6QP"
  };
  


//Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);

export {auth};
export {app};
