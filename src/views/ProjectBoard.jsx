import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddColumnComponent from "../components/AddColumnComponent";
import AddTodoComponent from "../components/AddTodoComponent";
import AddUserComponent from "../components/AddUserComponent";
import CompletedColumnComponent from "../components/CompletedColumnComponent";
import TodoColumnComponent from "../components/TodoColumnComponent";
import { useStore } from "../store/store";
import { Button, Input, Form } from "semantic-ui-react";
import "../assets/projectboard.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ProjectDeleteComponent from "../components/ProjectDeleteComponent";
import RemoveUserComponent from "../components/RemoveUserComponent";

export default function ProjectBoard() {
  // useStore
  const currentProject = useStore((state) => state.currentProject);
  const storeSetCurrentProject = useStore(
    (state) => state.storeSetCurrentProject
  );
  const storeEditProjectTitle = useStore(
    (state) => state.storeEditProjectTitle
  );
  const storeChangeTodoColumn = useStore(
    (state) => state.storeChangeTodoColumn
  );

  const { projectId } = useParams();

  //useState
  const [isNewTodoClicked, setIsNewTodoClicked] = useState(false);
  const [isNewColumnClicked, setIsNewColumnClicked] = useState(false);
  const [isAddUserClicked, setIsAddUserClicked] = useState(false);
  const [isRemoveUserClicked, setIsRemoveUserClicked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(currentProject.projectTitle);

  //useEffects
  useEffect(() => {
    storeSetCurrentProject(projectId);
  }, [storeSetCurrentProject, projectId]);

  //functions
  const addTodoButton = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsNewTodoClicked((prev) => !prev);
  };

  const addColumnButton = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsNewColumnClicked((prev) => !prev);
  };

  const addUserButton = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsAddUserClicked((prev) => !prev);
  };
  const removeUserButton = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsRemoveUserClicked((prev) => !prev);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (title) {
      storeEditProjectTitle(projectId, title);
      setEditMode(false);
    }
  };

  const handleDragEnd = (result) => {
    if (result.destination) {
      const draggableId = result.draggableId;
      const sourceId = result.source.droppableId;
      const destinationId = result.destination.droppableId;
      if (sourceId !== destinationId) {
        storeChangeTodoColumn(projectId, parseInt(destinationId), draggableId);
        //projectId, columnPosition, todoId
      }
    }
  };

  return (
    <div id="box">
      {!currentProject.projectTitle && (
        <h1>
          Oops, looks like something went wrong on our side. Head back your
          profile to try agian.
        </h1>
      )}
      {currentProject.projectTitle && (
        <div id="container">
          {editMode ? (
            <Form onSubmit={handleEdit}>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setEditMode(false);
                  setTitle(currentProject.projectTitle);
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
            <h1 onClick={() => setEditMode(true)}>
              {currentProject.projectTitle}
            </h1>
          )}

          <Button onClick={addTodoButton}>New Todo</Button>
          <Button onClick={addColumnButton}> New Column </Button>
          <Button onClick={addUserButton}> Add User </Button>
          <Button onClick={removeUserButton}>Remove User</Button>
          {isNewTodoClicked && (
            <AddTodoComponent addTodoButton={addTodoButton} />
          )}
          {isNewColumnClicked && (
            <AddColumnComponent addColumnButton={addColumnButton} />
          )}
          {isAddUserClicked && (
            <AddUserComponent addUserButton={addUserButton} />
          )}
          {isRemoveUserClicked && (
            <RemoveUserComponent removeUserButton={removeUserButton} />
          )}
          <div className="columns">
            <DragDropContext onDragEnd={handleDragEnd}>
              {currentProject.columnNames.map((obj, i) => (
                <Droppable key={obj.id} index={i} droppableId={`${i}`}>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <TodoColumnComponent
                        name={obj.name}
                        id={obj.id}
                        columnPosition={i}
                        projectId={projectId}
                        placeHolder={provided.placeholder}
                      />
                    </div>
                  )}
                </Droppable>
              ))}
            </DragDropContext>
            <CompletedColumnComponent projectId={projectId} />
          </div>
          <ProjectDeleteComponent projectId={projectId} />
        </div>
      )}
    </div>
  );
}
