import React, { useEffect, useState } from "react";
import "./App.css";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import Todo from "./Todo";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log("Hello Everyone", input);

  useEffect(() => {
    const todosCollection = collection(db, 'todos');
    const q = query(todosCollection, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const todosData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTodos(todosData);
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  // useEffect(() => {
  //   const todosCollection = collection(db, "todos");
  //   const orderedQuery = query(todosCollection, orderBy("timestamp", "desc"));
  //   const querySnapshot = getDocs(orderedQuery);

  //   const unsubscribe = onSnapshot(querySnapshot, (snapshot) => {
  //     setTodos(snapshot.docs.map((doc) => doc.data().todo));
  //   });

  //   return () => unsubscribe();
  // }, []);

  const addTodos = (event) => {
    event.preventDefault();

    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });

    // setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="main_div" >
      <div className="center_div">

      
      <h1 >Welcome to To Do Application 🚀</h1>
      <form >
        <FormControl >
          <InputLabel>✅ Write a Todo </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          variant="contained"
          type="submit"
          onClick={addTodos}
        >
          Add Todo
        </Button>
      </form>

      {/* <ul>
        {todos.map((todo) => (
          <Todo text={todo} />

          // <li>{todo}</li>
        ))}
      </ul> */}

      <ol>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ol>
      </div>
     </div>
  );
}

export default App;
