import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBZDnI7LrfdzeTbXUg8cMYMDbUuG3nEHZc",
  authDomain: "faq-firebase-77350.firebaseapp.com",
  projectId: "faq-firebase-77350",
  storageBucket: "faq-firebase-77350.appspot.com",
  messagingSenderId: "898573473429",
  appId: "1:898573473429:web:7bf0cf475d845e3d09ed9c",
  measurementId: "G-15K21Q21Z8",
};

const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);
export const firestoreAuth = getAuth(app);
export const firestoreUpdateUser = updateProfile(app);
// const analytics = getAnalytics(app);
