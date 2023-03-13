import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyA98ynHO4YK4qrK82bgyG8fZZ5-FD3aCs0",
  authDomain: "mycitymyapp-31aac.firebaseapp.com",
  projectId: "mycitymyapp-31aac",
  storageBucket: "mycitymyapp-31aac.appspot.com",
  messagingSenderId: "557114719862",
  appId: "1:557114719862:web:8c57a0f85485377e6a2957",
  measurementId: "G-X2R03512F5"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}