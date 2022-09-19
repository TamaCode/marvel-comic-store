// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe_ovQ9TiKlHLaFmYEEbLsdjiQZJ6M3WA",
  authDomain: "marvel-comic-store.firebaseapp.com",
  projectId: "marvel-comic-store",
  storageBucket: "marvel-comic-store.appspot.com",
  messagingSenderId: "920226754716",
  appId: "1:920226754716:web:601cc7fdf9e59f10757d59"
};


const app = initializeApp(firebaseConfig); // Initialize Firebase. Conecto mi react app con firebase
export const db = getFirestore(app); // Obtengo la database