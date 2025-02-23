import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAudMTUe7rltDFviMdNyoUw6hukH32S9FE",
    authDomain: "taskfordesktop.firebaseapp.com",
    projectId: "taskfordesktop",
    storageBucket: "taskfordesktop.firebasestorage.app",
    messagingSenderId: "955140708582",
    appId: "1:955140708582:web:8c4ff2fe12583ef5bf8327",
    measurementId: "G-MM22PNXB1D"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };