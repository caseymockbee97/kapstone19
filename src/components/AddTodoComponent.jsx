import React, { useState } from "react";
import { useStore } from "../store/store";
import "../assets/addcolumn.css";
import { Button, Input } from "semantic-ui-react";

export default function AddTodoComponent(props) {
  const { columnNames, userName, projectId } = useStore(
    (state) => state.currentProject
  );
  const storeAddNewTodo = useStore((state) => state.storeAddNewTodo);
  const [newTodo, setNewTodo] = useState("");
  const [column, setColumn] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (newTodo && column) {
      console.log(newTodo, column);
      storeAddNewTodo(projectId, newTodo, parseInt(column));
    }
    props.addTodoButton();
  };
  return (
    <div id="box">
      <form>
        <Input
          id="newinput"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New Todo"
        />
        {columnNames.map((obj, index) => (
          <span key={obj.id}>
            <input
              type="radio"
              id={obj.name}
              name="columnName"
              value={index}
              onChange={(e) => setColumn(e.target.value)}
            />
            <label id="checklabel" htmlFor={obj.name}>
              {obj.name}
            </label>
          </span>
        ))}

        <Button onClick={handleClick} positive>
          Submit
        </Button>
        <Button onClick={props.addTodoButton} negative>
          Cancel
        </Button>
      </form>
    </div>
  );
}
