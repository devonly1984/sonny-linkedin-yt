import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDk4VimXVPVgYr1k23VXMCj8AzESHilPOs",
  authDomain: "linkedin-yt-79554.firebaseapp.com",
  projectId: "linkedin-yt-79554",
  storageBucket: "linkedin-yt-79554.appspot.com",
  messagingSenderId: "1030276691237",
  appId: "1:1030276691237:web:65728f5babcbc8df8f96cc",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { app, db, auth };
