import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB3N-T9NJAARMsvqjVg7TkK7k8bwC2pxvY",
  authDomain: "bigmarbre-47277.firebaseapp.com",
  projectId: "bigmarbre-47277",
  storageBucket: "bigmarbre-47277.appspot.com",
  messagingSenderId: "626696954220",
  appId: "1:626696954220:web:92492fdc82b350c615d349",
  measurementId: "G-5S8GFDFZ49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
