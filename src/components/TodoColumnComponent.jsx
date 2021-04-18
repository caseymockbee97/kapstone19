import React, { useState } from "react";
import { useStore } from "../store/store";
import IndividualTodoComponent from "./IndividualTodoComponent";
import "../assets/projectboard.css";
import { Button, Form, Input } from "semantic-ui-react";
import { Draggable } from "react-beautiful-dnd";

export default function TodoColumnComponent(props) {
  const todos = useStore((state) => state.currentProject.todos);
  const storeDeleteColumn = useStore((state) => state.storeDeleteColumn);
  const storeEditColumnTitle = useStore((state) => state.storeEditColumnTitle);

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(props.name);

  const handleClick = () => {
    storeDeleteColumn(props.projectId, props.id);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    if (title) {
      storeEditColumnTitle(props.projectId, title, props.id);
      setEditMode(false);
    }
  };
  return (
    <div className="outside">
      {editMode ? (
        <Form onSubmit={handleEdit}>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Button
            onClick={(e) => {
              e.preventDefault();
              setEditMode(false);
              setTitle(props.name);
            }}
            negative
          >
            Cancel
          </Button>
          <Button onClick={handleEdit} positive>
            Edit
          </Button>
        </Form>
      ) : (
        <h2 onClick={() => setEditMode(true)}>{props.name}</h2>
      )}

      <div className="inside">
        {todos
          .filter((obj) => !obj.completed)
          .filter((obj) => obj.columnPosition === props.columnPosition)
          .map((obj, i) => (
            <Draggable key={obj.id} draggableId={obj.id} index={i}>
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                >
                  <IndividualTodoComponent
                    todo={obj}
                    projectId={props.projectId}
                  />
                </div>
              )}
            </Draggable>
          ))}
        {props.placeHolder}
      </div>
      <div id="dc">
        <Button onClick={handleClick}>Delete Column</Button>
      </div>
    </div>
  );
}
