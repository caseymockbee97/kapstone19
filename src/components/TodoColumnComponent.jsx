import React from "react";
import { useStore } from "../store/store";
import IndividualTodoComponent from "./IndividualTodoComponent";

export default function TodoColumnComponent(props) {
  const todos = useStore((state) => state.currentProject.todos);
  return (
    <div style={{ border: "1px solid blue", width: "200px", height: "500px" }}>
      <h2>{props.name}</h2>
      <div style={{ border: "1px solid red", width: "190px", height: "400px" }}>
        {todos
          .filter((obj) => !obj.completed)
          .filter((obj) => obj.columnPosition === props.columnPosition)
          .map((obj) => (
            <IndividualTodoComponent key={obj.id} todo={obj} />
          ))}
      </div>
      <button>Delete Column</button>
    </div>
  );
}
