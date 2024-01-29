import React, { useEffect, useState } from "react";
import "./App.css";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import Todo from "./Todo";
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // console.log("Hello Everyone", input);


  useEffect(()=>{
    db.collection('todos').onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=>doc.data().todo));
      setTodos(snapshot.docs.map(doc=>doc.data().todo))
    })

  },[]);



// useEffect(() => {
  //   const todosCollection = collection(db, "todos");
  //   const orderedQuery = query(todosCollection, orderBy("timestamp", "desc"));
  //   const querySnapshot = getDocs(orderedQuery);

  //   const unsubscribe = onSnapshot(querySnapshot, (snapshot) => {
  //     setTodos(snapshot.docs.map((doc) => doc.data().todo));
  //   });

  //   return () => unsubscribe();
  // }, []);











  useEffect(() => {
    const todosCollection = collection(firestore, "todos");

    const unsubscribe = onSnapshot(todosCollection, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });

    return () => unsubscribe();
  }, []);

  const addTodos = (event) => {
    event.preventDefault();
    console.log("Alien", "I am working !!!!");
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Welcome to To Do Application 🚀</h1>
      <form>
        <FormControl>
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

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />

          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
