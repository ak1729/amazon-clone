import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCxySwGwkupHFLCHd0q82EyqjYtHa4Abmg",
  authDomain: "clone-94b37.firebaseapp.com",
  projectId: "clone-94b37",
  storageBucket: "clone-94b37.appspot.com",
  messagingSenderId: "381677084882",
  appId: "1:381677084882:web:941782da2b937a85a5cd0b",
  measurementId: "G-TJRJL7W73N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const  db=firebaseApp.firestore();
const auth=firebase.auth();

export {db, auth};