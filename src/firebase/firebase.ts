// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  Timestamp,
} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeBzXiOfXGuJa4TQDGo6z5ZmpudqHC4KY",
  authDomain: "comments-efbc8.firebaseapp.com",
  projectId: "comments-efbc8",
  storageBucket: "comments-efbc8.appspot.com",
  messagingSenderId: "1037189256661",
  appId: "1:1037189256661:web:fa8e0933b86517b873995c",
  measurementId: "G-W5D8QYL67C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export const assignUser = async (email: string, name: string, img: string) => {
  const userDoc = doc(db, "users", email);
  if (await getDoc(userDoc)) return;
  await setDoc(userDoc, {
    name,
    img,
  });
};

export const fetchUserData = async (email: string) => {
  const userDoc = doc(db, "users", email);
  const userSnap = await getDoc(userDoc);
  return userSnap.data();
};
