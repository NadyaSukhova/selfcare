import { default as allNotes } from '../mocks/oldnotes.json';
import { note } from '../models/note/note.model';

export class NotesService {
  public history: note[] = [];

  constructor() {
    this.history = allNotes.map((el) => {
      return {
        id: el.id,
        thoughtText: el.thoughtText,
        mistake: el.mistake,
        disproof: el.disproof,
        date: new Date(el.date),
      };
    });
  }

  getHistory() {
    return this.history;
  }

  addNote(
    thoughtText: string,
    mistake: string[],
    disproof: string,
    date: Date
  ) {
    console.log({
      id: Date.now(),
      thoughtText: thoughtText,
      mistake: mistake,
      disproof: disproof,
      date: date,
    });
    this.history.push({
      id: Date.now(),
      thoughtText: thoughtText,
      mistake: mistake,
      disproof: disproof,
      date: new Date(date),
    });
  }
}
