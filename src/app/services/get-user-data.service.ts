import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query } from "firebase/firestore";
import { note } from '../models/note/note.model';

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
      throw new Error("Пользователь не найден!");
    }

    try {
      const notesQuery = query(
        collection(this.db, "users", NotesService.userId, "notes")
      );
      var foundEnd, notesEnd;
      const docSnap = await getDocs(notesQuery);
      if (docSnap.docs.length == 1) {
        foundEnd = 'a';
        notesEnd = 'ь';
      }
      else if (docSnap.docs.length > 1 && docSnap.docs.length < 5) {
        foundEnd = 'о';
        notesEnd = 'и';
      }
      else {
        foundEnd = 'о';
        notesEnd = 'ей';
      }
      console.log(`Найден${foundEnd} ${docSnap.docs.length} запис${notesEnd}`);
      NotesService.history = docSnap.docs.map((doc) => {
        const data = doc.data(); // Retrieve the document data
        return {
          thoughtText: data.thoughtText,
          mistakes: data.mistakes,
          disproof: data.disproof,
          date: data.date
        } as note;
      });
      if (docSnap.empty) {
        console.log("Записей нет");
      }

    } catch (error) {
      console.error("Ошибка при получении записей:", error);
    }
  }

  static addData = async (thoughtText: string,
    mistakes: string[],
    disproof: string,
    date: Date) => {
  }

  static getHistory() {
    return [...NotesService.history];
  }

}