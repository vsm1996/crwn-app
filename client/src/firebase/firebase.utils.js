import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAv7QzrMt4jHE0K-4SlT-2G-NVaoJKD-Qc",
  authDomain: "crwn-db-3164e.firebaseapp.com",
  databaseURL: "https://crwn-db-3164e.firebaseio.com",
  projectId: "crwn-db-3164e",
  storageBucket: "crwn-db-3164e.appspot.com",
  messagingSenderId: "816330628443",
  appId: "1:816330628443:web:8a1eda074a8c1d5f5d0e7e",
  measurementId: "G-YNTREMW4JE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(firestore.doc('users/jksdjdsjks'))
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
