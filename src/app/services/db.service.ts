import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { note } from '../models/note/note.model';
import { doc, getDoc } from "firebase/firestore";

export class NotesService {
  static apiKey = process.env.REACT_APP_API_KEY;
  static domainId = process.env.REACT_APP_DB_ID
  static dbMessaging = process.env.REACT_APP_MESSAGING_SENDER_ID;
  static measurementId = process.env.REACT_APP_MEASUREMENT_ID;
  static appId = process.env.REACT_APP_ID;
  static userId = process.env.REACT_APP_SMTH;


  static firebaseConfig = {
    apiKey: NotesService.apiKey,
    authDomain: NotesService.domainId + ".firebaseapp.com",
    projectId: NotesService.domainId,
    storageBucket: NotesService.domainId + ".firebasestorage.app",
    messagingSenderId: NotesService.dbMessaging,
    appId: "1:" + NotesService.dbMessaging + ":web:" + NotesService.appId,
    measurementId: NotesService.measurementId
  };
  static app = initializeApp(NotesService.firebaseConfig);
  static db = getFirestore(NotesService.app);

  static history: note[] = [];

  static async initialize() {
    if (!NotesService.userId) {
      throw new Error("Документ не найден!");
    }
    const docRef = doc(NotesService.db, "users", NotesService.userId, "notes");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Данные документа:", docSnap.data());
    } else {
      console.log("Документ не найден!");
    }

    try {
      const data = docSnap.data();
      if (data) {
        NotesService.history = Object.entries(data).map(doc => {
          return {
            id: data.id, // Используем ID документа из Firestore
            thoughtText: data.thoughtText,
            mistakes: data.mistakes,
            disproof: data.disproof,
            date: data.date.toDate() // Конвертируем Timestamp в Date
          };
        });
        console.log(NotesService.history)
      }
    } catch (e) {
      console.error("Error loading history: ", e);
    }
  }

  static addData = async (thoughtText: string,
    mistakes: string[],
    disproof: string,
    date: Date) => {
    try {
      let docRef = await addDoc(collection(NotesService.db, `users/${NotesService.userId}/notes`), {
        id: Date.now(),
        thoughtText: thoughtText,
        mistakes: mistakes,
        disproof: disproof,
        date: new Date(date)
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    };
    this.history.push({
      id: Date.now(),
      thoughtText: thoughtText,
      mistakes: mistakes,
      disproof: disproof,
      date: new Date(date),
    });
    this.history.sort((a, b) => (b.date as Date).getTime() - (a.date as Date).getTime());
  }

  static getHistory() {
    NotesService.history.forEach((doc) => {
      console.log(doc.id, " => ", doc);
    });
    return [...NotesService.history];
  }

}