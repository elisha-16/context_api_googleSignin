import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmo0VhfyXQjiKmuPp96_Rckpj0GzUkNzk",
    authDomain: "tasktracker-df430.firebaseapp.com",
    projectId: "tasktracker-df430",
    storageBucket: "tasktracker-df430.appspot.com",
    messagingSenderId: "415982188409",
    appId: "1:415982188409:web:9dadc52c6b513ceec3e1a8",
    measurementId: "G-ZBJZF6ZCR5"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db;