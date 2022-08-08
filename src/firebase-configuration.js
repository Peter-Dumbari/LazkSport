import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyB_2nrAde-TmZNX6B3Lidilds8JeCjfg-I",
  authDomain: "fir-tutorial-954b1.firebaseapp.com",
  projectId: "fir-tutorial-954b1",
  storageBucket: "fir-tutorial-954b1.appspot.com",
  messagingSenderId: "669500243236",
  appId: "1:669500243236:web:c7022532457b5c927687b1",
  measurementId: "G-SC8PSSLMY0",
};

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const auth = getAuth();
export const db = getFirestore();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
