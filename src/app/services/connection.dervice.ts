import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const apiKey = process.env.REACT_APP_API_KEY;
const domainId = process.env.REACT_APP_DB_ID
const dbMessaging = process.env.REACT_APP_MESSAGING_SENDER_ID;
const measurementId = process.env.REACT_APP_MEASUREMENT_ID;
const appId = process.env.REACT_APP_ID;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: domainId + ".firebaseapp.com",
    projectId: domainId,
    storageBucket: domainId + ".firebasestorage.app",
    messagingSenderId: dbMessaging,
    appId: "1:" + dbMessaging + ":web:" + appId,
    measurementId: measurementId
};

const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);