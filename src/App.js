import "./style.scss";
import "./app/app.component.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { NotesService } from "./app/services/db.service.ts";
import { DB } from "./app/services/connection.dervice.ts";
import { StorageService } from "./app/services/localStorage.service.ts";
import Autorization from "./app/components/autorization/autorization.component.js";
import OldNotes from "./app/components/old-notes/old-notes.component.js";
import Thought from "./app/components/thought/thought.component.js";

function App() {
  const notes = new NotesService();
  const userId=StorageService.getUserId();
  const [isAuthenticated, setIsAuthenticated] = useState(userId != null);
  const [history, setHistory] = useState(NotesService.getHistory());

  useEffect(() => {
    const loadData = async () => {
      await NotesService.initialize();
      setHistory(NotesService.getHistory()); // Теперь это статический метод
    };
    loadData();
  }, [userId]);

  function addNewNote(thoughtText, mistakes, disproof, date) {}

  return (
    <div className="App">
      <header className="App-header">
        <h3 class="appHeader">Когнитивные искажения</h3>
      </header>

      <main className="appBody">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dairy" replace />
              ) : (
                <Autorization DB={DB} setIsAuthenticated={setIsAuthenticated} saveUser={StorageService.saveUserId}/>
              )
            }
          />
         <Route
            path="/dairy"
            element={
              isAuthenticated ? (
                <>
                  <Thought addNote={addNewNote} />
                  <OldNotes history={history} />
                </>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
