import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQ6IQ4h91DRwqQHUgm0jihz3ou6jvlYU8",
  authDomain: "crwn-db-341ba.firebaseapp.com",
  databaseURL: "https://crwn-db-341ba.firebaseio.com",
  projectId: "crwn-db-341ba",
  storageBucket: "crwn-db-341ba.appspot.com",
  messagingSenderId: "820685019914",
  appId: "1:820685019914:web:040e589edc180b662038f3",
  measurementId: "G-FJHKWTE3KK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
