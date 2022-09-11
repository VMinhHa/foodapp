import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB8Qyl28c4M8gk2qZXJrEJGqYhjtH8lb3Q",
    authDomain: "shopapp-82c0e.firebaseapp.com",
    databaseURL: "https://shopapp-82c0e-default-rtdb.firebaseio.com",
    projectId: "shopapp-82c0e",
    storageBucket: "shopapp-82c0e.appspot.com",
    messagingSenderId: "20152370797",
    appId: "1:20152370797:web:60d63abfc939aee5f96164"
  };

const app =getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export {app, firestore, storage};