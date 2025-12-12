import "./style.scss";
import "./app/app.component.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { DB } from "./app/services/connection.dervice.ts";
import { StorageService } from "./app/services/localStorage.service.ts";
import Autorization from "./app/components/autorization/autorization.component.js";
import OldNotes from "./app/components/old-notes/old-notes.component.js";
import Thought from "./app/components/thought/thought.component.js";

export function App() {
  const userId = StorageService.getUserId();
  const nickName= StorageService.getUserName();
  const [isAuthenticated, setIsAuthenticated] = useState(userId != null && userId != undefined);
  const [history, setHistory] = useState([]);

  const saveUser = useCallback((userId, name) => {
    StorageService.saveUser(userId, name);
  }, []);

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
                <Navigate to="/dairy" replace/>
              ) : (
                <Autorization
                  DB={DB}
                  setIsAuthenticated={setIsAuthenticated}
                  saveUser={saveUser}
                />
              )
            }
          />
          <Route
            path="/dairy"
            element={
              isAuthenticated ? (
                <>
                Hello, {nickName}!
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
