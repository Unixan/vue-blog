import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_iUA5t9P8OEStJ2_zIDrYYLzmdM9KWwI",
  authDomain: "tutorial-firebase-projec-8651d.firebaseapp.com",
  projectId: "tutorial-firebase-projec-8651d",
  storageBucket: "tutorial-firebase-projec-8651d.appspot.com",
  messagingSenderId: "499469792980",
  appId: "1:499469792980:web:bc250849aba27092856d41",
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init firestore service

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp };
