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
  collection,
  Timestamp,
  getDocs,
  query,
  orderBy,
  where,
  addDoc,
  limit,
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
  if ((await getDoc(userDoc)).exists()) return;
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

const commentCollection = collection(db, "comments");

export const fetchReceiveCommentsData = async (email: string) => {
  let array: commentType[] = [];
  console.log(email);
  const commentQuery = query(
    commentCollection,
    where("_to", "==", email),
    orderBy("id")
  );
  const querySnap = await getDocs(commentQuery);
  querySnap.forEach((doc: any) => {
    array.push(doc.data());
  });
  return array;
};

export const fetchWriteCommentsData = async (email: string) => {
  let array: commentType[] = [];
  console.log(email);
  const commentQuery = query(
    commentCollection,
    where("_from", "==", email),
    orderBy("id")
  );
  const querySnap = await getDocs(commentQuery);
  querySnap.forEach((doc: any) => {
    array.push(doc.data());
  });
  return array;
};

export const setComments = async (form: commentType) => {
  await addDoc(commentCollection, form);
};

export const getFinalIndex = async (email: string) => {
  let array: commentType[] = [];
  console.log(email);
  const commentQuery = query(
    commentCollection,
    where("_to", "==", email),
    orderBy("id", "desc"),
    limit(1)
  );
  const querySnap = await getDocs(commentQuery);
  querySnap.forEach((doc: any) => {
    array.push(doc.data());
  });
  console.log(array);
  if (array[0]) {
    return array[0].id;
  } else {
    return 0;
  }
};

export type commentType = {
  _from: string;
  _to: string;
  id: number;
  name: string;
  text: string;
  view: boolean;
};
