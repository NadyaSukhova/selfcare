import {default as allNotes} from "../mocks/oldnotes.json";
import { note } from "../models/note/note.model";

export class Notes {
    public history:note[] = allNotes.map((el) => {
      return {
        "id": el.id,
        "thoughtText": el.thoughtText,
        "mistake": el.mistake,
        "disproof": el.disproof,
        "date": new Date(el.date)
      };
    });

    getHistory() {return (this.history); }

    addNote(thoughtText:string, mistake:string[], disproof:string, date:Date) {
      var newNote:note = {id: 6, thoughtText: thoughtText, mistake: mistake, disproof: disproof, date: date};
      console.log(newNote);
      this.history.push(newNote);
    }
  }