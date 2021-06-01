import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGLkHS3r240t75GPw04D2-DKk64NUBcWI",
  authDomain: "full-stack-91e38.firebaseapp.com",
  projectId: "full-stack-91e38",
  storageBucket: "full-stack-91e38.appspot.com",
  messagingSenderId: "986330947339",
  appId: "1:986330947339:web:d6fc92755cce8d510c0c0e",
  measurementId: "G-GWNSG3C4XK",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
