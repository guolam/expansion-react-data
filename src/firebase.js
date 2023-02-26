import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "expansionapi.firebaseapp.com",
    projectId: "expansionapi",
    storageBucket: "expansionapi.appspot.com",
    messagingSenderId: "24716168053",
    appId: "1:24716168053:web:8af166e14a4a0542c4213c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export default app;