import { initializeApp } from "firebase/app";
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
const db = getFirestore(app);

export class FirebaseService {
  commentCollection = collection(db, "comments");

  setToken = async (
    email: string,
    accessToken: string,
    refreshToken: string
  ) => {
    const userDoc = doc(db, "users", email);
    await setDoc(
      userDoc,
      {
        accessToken,
        refreshToken,
      },
      { merge: true }
    );
  };

  assignUser = async (email: string, name: string, img: string) => {
    const userDoc = doc(db, "users", email);
    await setDoc(
      userDoc,
      {
        name,
        img,
      },
      { merge: true }
    );
  };

  notionLinkSave = async (email: string, link: string) => {
    const userDoc = doc(db, "users", email);
    await setDoc(
      userDoc,
      {
        notion: link,
      },
      { merge: true }
    );
  };

  fetchUserData = async (email: string) => {
    const userDoc = doc(db, "users", email);
    const userSnap = await getDoc(userDoc);
    return userSnap.data();
  };

  fetchReceiveCommentsData = async (email: string) => {
    let array: commentType[] = [];
    const commentQuery = query(
      this.commentCollection,
      where("_to", "==", email),
      orderBy("id")
    );
    const querySnap = await getDocs(commentQuery);
    querySnap.forEach((doc: any) => {
      array.push(doc.data());
    });
    return array.reverse();
  };

  fetchUpdateCommentsData = async (
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

  fetchWriteCommentsData = async (email: string) => {
    let array: commentType[] = [];
    const commentQuery = query(
      this.commentCollection,
      where("_from", "==", email),
      orderBy("id")
    );
    const querySnap = await getDocs(commentQuery);
    querySnap.forEach((doc: any) => {
      array.push(doc.data());
    });
    return array.reverse();
  };

  fetchRecentCommentsData = async (from: string, to: string) => {
    let array: commentType[] = [];
    const commentQuery = query(
      this.commentCollection,
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

  getComment = async (email: string, id: number) => {
    const commentDoc = doc(db, "comments", email + "&" + String(id));
    const commentSnap = await getDoc(commentDoc);
    return commentSnap.data();
  };

  setComment = async (form: commentType) => {
    await setDoc(doc(db, "comments", form._to + "&" + String(form.id)), form);
  };

  deleteRecieveComment = async (id: number, email: string) => {
    const commentQuery = query(
      this.commentCollection,
      where("_to", "==", email),
      where("id", "==", id)
    );
    const querySnap = await getDocs(commentQuery);
    querySnap.forEach(async (item: any) => {
      await deleteDoc(doc(db, "comments", item.id));
    });
  };

  setCommentView = async (id: number, email: string, view: boolean) => {
    const commentQuery = query(
      this.commentCollection,
      where("_to", "==", email),
      where("id", "==", id)
    );
    const querySnap = await getDocs(commentQuery);
    querySnap.forEach(async (item: any) => {
      await updateDoc(doc(db, "comments", item.id), { view });
    });
  };

  setCommentStar = async (id: number, email: string, star: boolean) => {
    const commentQuery = query(
      this.commentCollection,
      where("_to", "==", email),
      where("id", "==", id)
    );
    const querySnap = await getDocs(commentQuery);
    querySnap.forEach(async (item: any) => {
      await updateDoc(doc(db, "comments", item.id), { star });
    });
  };

  getFinalIndex = async (email: string) => {
    let array: commentType[] = [];
    const commentQuery = query(
      this.commentCollection,
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
}

export type commentType = {
  _from: string;
  _to: string;
  id: number;
  name: string;
  text: string;
  view: boolean;
  star: boolean;
};
