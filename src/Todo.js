import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import "./Todo.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from '@mui/icons-material/Edit';
import db from "./firebase";
import { doc, deleteDoc } from "firebase/firestore";

const Todo = (props) => {
  return (
    <div className="todo_style">
      <List>
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy deadline ⏰"
          />
          <DeleteForeverIcon className="crossmark"
            onClick={(event) => {
              const docRef = doc(db, "todos", props.todo.id);
              deleteDoc(docRef);
            }}
          />
          <EditIcon className="editmark" onClick={(event)=>{
            
          }}/>
        </ListItem>
      </List>
    </div>
  );
};

export default Todo;
