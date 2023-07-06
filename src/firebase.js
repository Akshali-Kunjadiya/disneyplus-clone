import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {

  apiKey: "AIzaSyCXzPeLuTlJG9rt3XxvP8iN3VsNWBvfaW8",
  authDomain: "disney-plus-clone-500ed.firebaseapp.com",
  projectId: "disney-plus-clone-500ed",
  storageBucket: "disney-plus-clone-500ed.appspot.com",
  messagingSenderId: "425355503098",
  appId: "1:425355503098:web:be45a607f49af7efecb043"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
