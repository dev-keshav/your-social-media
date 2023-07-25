import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-h9ao4d60_3Qaj4pP8OG-4Neqc-mxRWw",
  authDomain: "social-media-app-2dd3b.firebaseapp.com",
  projectId: "social-media-app-2dd3b",
  storageBucket: "social-media-app-2dd3b.appspot.com",
  messagingSenderId: "210479274761",
  appId: "1:210479274761:web:be1e42d6e14f2cb6e751d8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
