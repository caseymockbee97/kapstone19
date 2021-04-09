import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddColumnComponent from "../components/AddColumnComponent";
import AddTodoComponent from "../components/AddTodoComponent";
import AddUserComponent from "../components/AddUserComponent";
import CompletedColumnComponent from "../components/CompletedColumnComponent";
import TodoColumnComponent from "../components/TodoColumnComponent";
import { useStore } from "../store/store";

export default function ProjectBoard() {
  // useStore
  const currentProject = useStore((state) => state.currentProject);
  const storeSetCurrentProject = useStore(
    (state) => state.storeSetCurrentProject
  );
  const { projectId } = useParams();

  //useState
  const [isNewTodoClicked, setIsNewTodoClicked] = useState(false);
  const [isNewColumnClicked, setIsNewColumnClicked] = useState(false);
  const [isAddUserClicked, setIsAddUserClicked] = useState(false);

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
  return (
    <div>
      {!currentProject.projectTitle && (
        <h1>
          Oops, looks like something went wrong on our side. Head back your
          profile to try agian.
        </h1>
      )}
      {currentProject.projectTitle && (
        <>
          <h1>{currentProject.projectTitle}</h1>
          <button onClick={addTodoButton}>New Todo</button>
          <button onClick={addColumnButton}> New Column </button>
          <button onClick={addUserButton}> Add User </button>
          {isNewTodoClicked && (
            <AddTodoComponent addTodoButton={addTodoButton} />
          )}
          {isNewColumnClicked && (
            <AddColumnComponent addColumnButton={addColumnButton} />
          )}
          {isAddUserClicked && (
            <AddUserComponent addUserButton={addUserButton} />
          )}
          <div style={{ display: "flex" }}>
            {currentProject.columnNames.map((obj, i) => (
              <TodoColumnComponent
                key={`${obj.name}${i}`}
                name={obj.name}
                columnPosition={i}
              />
            ))}
            <CompletedColumnComponent />
          </div>
        </>
      )}
    </div>
  );
}
