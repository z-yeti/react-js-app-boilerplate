import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.GOOGLE_FIREBASE_API_KEY,
  authDomain: process.env.GOOGLE_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GOOGLE_FIREBASE_DB_URL,
  projectId: process.env.GOOGLE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GOOGLE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GOOGLE_FIREBASE_SENDER_ID
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
