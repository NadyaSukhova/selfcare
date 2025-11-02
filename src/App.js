import "./style.scss";
import "./app/app.component.scss";
import { useState, useEffect } from "react";
import { NotesService } from "./app/services/db.service.ts";
import OldNotes from "./app/components/old-notes/old-notes.component.js";
import Thought from "./app/components/thought/thought.component.js";

function App() {
  const notes = new NotesService();
  const [history, setHistory] = useState(NotesService.getHistory());

  useEffect(() => {
    const loadData = async () => {
      await NotesService.initialize();
      setHistory(NotesService.getHistory()); // Теперь это статический метод
    };
    loadData();
  }, []);

  function addNewNote(thoughtText, mistakes, disproof, date) {}

  return (
    <div className="App">
      <header className="App-header">
        <h3 class="appHeader">Когнитивные искажения</h3>
      </header>
      <main className="appBody">
        <Thought addNote={addNewNote} />
        <OldNotes history={history} />
      </main>
    </div>
  );
}

export default App;
