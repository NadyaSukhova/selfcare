import './style.scss';
import './app/app.component.scss';
import { useState } from "react";
import { NotesService } from './app/services/notes.service.ts';
import OldNotes from './app/components/old-notes/old-notes.component.js';
import Thought from './app/components/thought/thought.component.js'

function App() {
  const notes = new NotesService();
  const [history, setHistory] = useState(notes.getHistory());

  function addNewNote(thoughtText, mistakes, disproof, date) {
    notes.addNote(thoughtText, mistakes, disproof, date);
    setHistory([...notes.getHistory()]);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div class="appHeader">Когнитивные искажения</div>
        <div class="appBody">
          <app-thought />
          <Thought addNote={addNewNote}/>
          <OldNotes history={history} />
        </div>
      </header>
    </div>
  );
}

export default App;
