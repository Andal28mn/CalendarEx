import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBmH6MZf94gmwGU6ONc2CZQvpgoT8YXqCw",
    authDomain: "calendarex-fbbf0.firebaseapp.com",
    projectId: "calendarex-fbbf0",
    storageBucket: "calendarex-fbbf0.appspot.com",
    messagingSenderId: "1055055317054",
    appId: "1:1055055317054:web:2cf6c1c71ea5d82120296f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
