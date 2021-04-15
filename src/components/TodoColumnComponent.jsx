import React from "react";
import { useStore } from "../store/store";
import IndividualTodoComponent from "./IndividualTodoComponent";
import "../assets/projectboard.css";
import { Button } from "semantic-ui-react";

export default function TodoColumnComponent(props) {
  const todos = useStore((state) => state.currentProject.todos);
  const storeDeleteColumn = useStore((state) => state.storeDeleteColumn);

  const handleClick = () => {
    storeDeleteColumn(props.projectId, props.id);
  };
  return (
    <div className="outside">
      <h2>{props.name}</h2>
      <div className="inside">
        {todos
          .filter((obj) => !obj.completed)
          .filter((obj) => obj.columnPosition === props.columnPosition)
          .map((obj) => (
            <IndividualTodoComponent
              key={obj.id}
              todo={obj}
              projectId={props.projectId}
            />
          ))}
      </div>
      <div id="dc">
        <Button onClick={handleClick}>Delete Column</Button>
      </div>
    </div>
  );
}
