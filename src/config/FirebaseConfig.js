import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCc8Jue574fbJIqHtP8nuHlhKbGtV3oU0U",
  authDomain: "thameemlogin.firebaseapp.com",
  projectId: "thameemlogin",
  storageBucket: "thameemlogin.appspot.com",
  messagingSenderId: "284018473568",
  appId: "1:284018473568:web:4fed5426012a398d1d6105",
  measurementId: "G-B1J7408N51"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const firebaseRealTimeDb = getDatabase(app);
export const firebaseStorage = getStorage(app);
