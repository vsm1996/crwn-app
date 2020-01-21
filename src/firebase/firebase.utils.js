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

// initializing firebase
firebase.initializeApp(config);

// initializing firebase Authentication
export const auth = firebase.auth();

//initizializing firebase Database
export const firestore = firebase.firestore();

//creating google auth provider object from firebase
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
// always trigger the GOOGLE sign-in pop up for the auth provider
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;