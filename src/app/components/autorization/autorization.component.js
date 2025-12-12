import { useState } from "react";
import { hashTwoValues } from "../../services/hash.service.ts";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

function Autorization({ DB, setIsAuthenticated, saveUser }) {
  const [login, setLogin] = useState("");
  const [password, setpassword] = useState("");

  async function handleSubmit() {
    try {
      const userId = await hashTwoValues(login, password);
      const userDocRef = doc(DB, "users", userId);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        setIsAuthenticated(true);
        saveUser(userId);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Ошибка при получении записей:", error);
    }
  }

  return (
    <>
      <input onChange={(e) => setLogin(e.target.value)} />
      <input onChange={(e) => setpassword(e.target.value)} />
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}

export default Autorization;
