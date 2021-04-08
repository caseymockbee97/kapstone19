import React from "react";
import { useStore } from "../store/store";
import IndividualTodoComponent from "./IndividualTodoComponent";

export default function CompletedColumnComponent() {
  const todos = useStore((state) => state.currentProject.todos);
  return (
    <div style={{ border: "1px solid blue", width: "200px", height: "500px" }}>
      <h2>Completed</h2>
      <div style={{ border: "1px solid red", width: "190px", height: "400px" }}>
        {todos
          .filter((obj) => obj.completed)
          .map((obj) => (
            <IndividualTodoComponent key={obj.id} todo={obj} />
          ))}
      </div>
    </div>
  );
}
