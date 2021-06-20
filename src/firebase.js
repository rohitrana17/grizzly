



import firebase from 'firebase/app';

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACfkes2ECqNkm842KORvwdBY0MbzFoBY4",
  authDomain: "devchat-14774.firebaseapp.com",
  databaseURL: "https://devchat-14774-default-rtdb.firebaseio.com/",
  projectId: "devchat-14774",
  storageBucket: "devchat-14774.appspot.com",
  messagingSenderId: "121133315176",
  appId: "1:121133315176:web:bb6e8017760eb5319f37dd",
  measurementId: "G-43MC1S44PX"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

