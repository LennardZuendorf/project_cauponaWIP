import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA01wV4YN9L8TtTqi0MzJsH4XWtOFC89sM",
    authDomain: "caupona-664f4.firebaseapp.com",
    projectId: "caupona-664f4",
    storageBucket: "caupona-664f4.appspot.com",
    messagingSenderId: "205236828661",
    appId: "1:205236828661:web:c841f941d49ad3d71608bc",
    measurementId: "G-2WRBW07Y09"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);