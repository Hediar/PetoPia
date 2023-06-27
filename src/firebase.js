// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZUJcOQvNFJV_BErgl0nu5RtsNW5D4qi4',
  authDomain: 'fir-test-9963a.firebaseapp.com',
  projectId: 'fir-test-9963a',
  storageBucket: 'fir-test-9963a.appspot.com',
  messagingSenderId: '122952036156',
  appId: '1:122952036156:web:b56e1aa4040d8d7e597839'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
