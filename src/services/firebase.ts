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
  getDocs,
  query,
  orderBy,
  where,
  addDoc,
  limit,
  deleteDoc,
  updateDoc,
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

export const getUserCount = async () => {
  const countDoc = doc(db, "users", "user_info");
  const countSnap = await getDoc(countDoc);
  return countSnap.data();
};

export const notionLinkSave = async (email: string, link: string) => {
  const userDoc = doc(db, "users", email);
  await setDoc(
    userDoc,
    {
      notion: link,
    },
    { merge: true }
  );
};

export const fetchUserData = async (email: string) => {
  const userDoc = doc(db, "users", email);
  const userSnap = await getDoc(userDoc);
  return userSnap.data();
};

const commentCollection = collection(db, "comments");

export const fetchReceiveCommentsData = async (email: string) => {
  let array: commentType[] = [];
  const commentQuery = query(
    commentCollection,
    where("_to", "==", email),
    orderBy("id")
  );
  const querySnap = await getDocs(commentQuery);
  querySnap.forEach((doc: any) => {
    array.push(doc.data());
  });
  return array.reverse();
};

export const fetchUpdateCommentsData = async (
  email: string,
  comments1: commentType,
  comments2: commentType
) => {
  const id1Ref = doc(db, "comments", email + "&" + String(comments1.id));
  const id2Ref = doc(db, "comments", email + "&" + String(comments2.id));

  updateDoc(id1Ref, {
    _from: comments2._from,
    name: comments2.name,
    text: comments2.text,
    view: comments2.view,
  });
  updateDoc(id2Ref, {
    _from: comments1._from,
    name: comments1.name,
    text: comments1.text,
    view: comments1.view,
  });
};

export const fetchWriteCommentsData = async (email: string) => {
  let array: commentType[] = [];
  const commentQuery = query(
    commentCollection,
    where("_from", "==", email),
    orderBy("id")
  );
  const querySnap = await getDocs(commentQuery);
  querySnap.forEach((doc: any) => {
    array.push(doc.data());
  });
  return array.reverse();
};

export const fetchRecentCommentsData = async (from: string, to: string) => {
  let array: commentType[] = [];
  const commentQuery = query(
    commentCollection,
    where("_to", "==", to),
    where("_from", "==", from),
    orderBy("id", "desc"),
    limit(1)
  );
  const querySnap = await getDocs(commentQuery);
  querySnap.forEach((doc: any) => {
    array.push(doc.data());
  });
  return array;
};

export const getComment = async (email: string, id: number) => {
  const commentDoc = doc(db, "comments", email + "&" + String(id));
  const commentSnap = await getDoc(commentDoc);
  return commentSnap.data();
};

export const setComment = async (form: commentType) => {
  await setDoc(doc(db, "comments", form._to + "&" + String(form.id)), form);
};

export const deleteRecieveComment = async (id: number, email: string) => {
  const commentQuery = query(
    commentCollection,
    where("_to", "==", email),
    where("id", "==", id)
  );
  const querySnap = await getDocs(commentQuery);
  querySnap.forEach(async (item: any) => {
    await deleteDoc(doc(db, "comments", item.id));
  });
};

export const setCommentView = async (
  id: number,
  email: string,
  view: boolean
) => {
  const commentQuery = query(
    commentCollection,
    where("_to", "==", email),
    where("id", "==", id)
  );
  const querySnap = await getDocs(commentQuery);
  querySnap.forEach(async (item: any) => {
    await updateDoc(doc(db, "comments", item.id), { view });
  });
};

export const setCommentStar = async (
  id: number,
  email: string,
  star: boolean
) => {
  const commentQuery = query(
    commentCollection,
    where("_to", "==", email),
    where("id", "==", id)
  );
  const querySnap = await getDocs(commentQuery);
  querySnap.forEach(async (item: any) => {
    await updateDoc(doc(db, "comments", item.id), { star });
  });
};

export const getFinalIndex = async (email: string) => {
  let array: commentType[] = [];
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
  star: boolean;
};
