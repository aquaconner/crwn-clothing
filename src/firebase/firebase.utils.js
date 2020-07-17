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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.meesage);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
