import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyAw9mnsMOy1PVnM3KRz0G87Vw1U1nIsBzM",

  authDomain: "disney-clone-3de25.firebaseapp.com",

  projectId: "disney-clone-3de25",

  storageBucket: "disney-clone-3de25.appspot.com",

  messagingSenderId: "968658384991",

  appId: "1:968658384991:web:7e00fa3c7547786fda83ea",

  measurementId: "G-NY71TJ8RFL"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);


export { auth, provider, storage};
export default db;