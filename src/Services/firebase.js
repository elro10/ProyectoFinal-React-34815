import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAY1Y0ck8sy_N2Rot14E67k_eBjX7aCOhs",
  authDomain: "data-34815.firebaseapp.com",
  projectId: "data-34815",
  storageBucket: "data-34815.appspot.com",
  messagingSenderId: "470731102051",
  appId: "1:470731102051:web:f938aa4049868f04fee556"
};
const app = initializeApp(config);
export const db = getFirestore(app);