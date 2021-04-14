import React from "react";
import { Button } from "semantic-ui-react"

export default function IndividualTodoComponent(props) {
  const { text, id, completed, columnPosition } = props.todo;
  return (
    <div id="itc">
      <div id="tt">{text}</div>
      {!completed && <Button>Edit</Button>}<br/>
      {!completed && <Button negative>Delete</Button>}
      <Button positive>{completed ? "unDone" : "Done"}</Button>
    </div>
  );
}
