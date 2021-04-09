import React from "react";

export default function IndividualTodoComponent(props) {
  const { text, id, completed, columnPosition } = props.todo;
  return (
    <div style={{ border: "1px solid black" }}>
      <p>{text}</p>
      {!completed && <button>Delete</button>}
      {!completed && <button>Edit</button>}
      <button>{completed ? "unDone" : "Done"}</button>
    </div>
  );
}
