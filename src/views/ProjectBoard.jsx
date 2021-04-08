import React, { useState } from "react";
import AddColumnComponent from "../components/AddColumnComponent";
import AddTodoComponent from "../components/AddTodoComponent";
import AddUserComponent from "../components/AddUserComponent";
import CompletedColumnComponent from "../components/CompletedColumnComponent";
import TodoColumnComponent from "../components/TodoColumnComponent";
import { useStore } from "../store/store";

export default function ProjectBoard() {
  // useStore
  const currentProjectBoard = useStore((state) => state.currentProject);

  //useState
  const [isNewTodoClicked, setIsNewTodoClicked] = useState(false);
  const [isNewColumnClicked, setIsNewColumnClicked] = useState(false);
  const [isAddUserClicked, setIsAddUserClicked] = useState(false);

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
      <h1>{currentProjectBoard.projectTitle}</h1>
      <button onClick={addTodoButton}>New Todo</button>
      <button onClick={addColumnButton}> New Column </button>
      <button onClick={addUserButton}> Add User </button>
      {isNewTodoClicked && <AddTodoComponent addTodoButton={addTodoButton} />}
      {isNewColumnClicked && (
        <AddColumnComponent addColumnButton={addColumnButton} />
      )}
      {isAddUserClicked && <AddUserComponent addUserButton={addUserButton} />}
      <div style={{ display: "flex" }}>
        {currentProjectBoard.columnNames.map((obj, i) => (
          <TodoColumnComponent
            key={`${obj.name}${i}`}
            name={obj.name}
            columnPosition={i}
          />
        ))}
        <CompletedColumnComponent />
      </div>
    </div>
  );
}
