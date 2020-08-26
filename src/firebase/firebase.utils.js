import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDsQmzK8v0AktaCM16ZAIZN_yStJWV2Dqc",
  authDomain: "crwn-db-eb2fc.firebaseapp.com",
  databaseURL: "https://crwn-db-eb2fc.firebaseio.com",
  projectId: "crwn-db-eb2fc",
  storageBucket: "crwn-db-eb2fc.appspot.com",
  messagingSenderId: "461512201020",
  appId: "1:461512201020:web:e6b1de39357eb827cf4439",
  measurementId: "G-D3976SMDQG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
