import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {auth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA01wV4YN9L8TtTqi0MzJsH4XWtOFC89sM",
    authDomain: "caupona-664f4.firebaseapp.com",
    projectId: "caupona-664f4",
    storageBucket: "caupona-664f4.appspot.com",
    messagingSenderId: "205236828661",
    appId: "1:205236828661:web:7b646adf5ae8e3bf1608bc",
    measurementId: "G-WHDK86XWV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);