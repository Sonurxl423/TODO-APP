import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC6GfSPuR8wLbJmoeqVoxzHzB27O7tZinI",
  authDomain: "todo-app-4fa41.firebaseapp.com",
  projectId: "todo-app-4fa41",
  storageBucket: "todo-app-4fa41.appspot.com",
  messagingSenderId: "660293127526",
  appId: "1:660293127526:web:d95b3e08f952cc298acca7",
  measurementId: "G-HHWH21RTSR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
