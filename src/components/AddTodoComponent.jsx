import React, { useState } from "react";
import { useStore } from "../store/store";

export default function AddTodoComponent(props) {
  const { columnNames } = useStore((state) => state.currentProject);
  const [newTodo, setNewTodo] = useState("");
  const [column, setColumn] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (newTodo && column) {
      console.log(newTodo, column);
    }
    props.addTodoButton();
  };
  return (
    <div>
      <form>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo"
        />
        {columnNames.map((obj) => (
          <span key={obj.id}>
            <input
              type="radio"
              id={obj.name}
              name="columnName"
              value={obj.name}
              onChange={(e) => setColumn(e.target.value)}
            />
            <label htmlFor={obj.name}>{obj.name}</label>
          </span>
        ))}

        <button onClick={props.addTodoButton}>Cancel</button>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}
