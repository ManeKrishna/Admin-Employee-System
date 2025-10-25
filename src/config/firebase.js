// src/config/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
// Get these values from Firebase Console: Project Settings > General > Your apps
const firebaseConfig = {
  apiKey: "AIzaSyAADwaBOtxP0vjv5aEhVvSqBtd31Bb06yo",
  authDomain: "admintaskmanager.firebaseapp.com",
  projectId: "admintaskmanager",
  storageBucket: "admintaskmanager.firebasestorage.app",
  messagingSenderId: "568754625419",
  appId: "1:568754625419:web:358e727ed26313a9142d8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);

export default app;