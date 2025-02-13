import { Injectable } from "@angular/core";
import { default as allNotes } from "../mocks/oldnotes.json";
import { note } from "../models/note/note.model";

@Injectable({ providedIn: 'root' })
export class NotesService {
  public history: note[] = allNotes.map((el) => {
    return {
      "id": el.id,
      "thoughtText": el.thoughtText,
      "mistake": el.mistake,
      "disproof": el.disproof,
      "date": new Date(el.date)
    };
  });

  getHistory() {
    return (this.history);
  }

  addNote(thoughtText: string, mistake: string[], disproof: string, date: Date) {
    console.log({ id: 6, thoughtText: thoughtText, mistake: mistake, disproof: disproof, date: date });
    var newNotes:note[] = this.history;
    newNotes.push({ id: 6, thoughtText: thoughtText, mistake: mistake, disproof: disproof, date: date });
    this.history= newNotes;
  }
}