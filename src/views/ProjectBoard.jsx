import React from "react";
import CompletedColumnComponent from "../components/CompletedColumnComponent";
import TodoColumnComponent from "../components/TodoColumnComponent";
import { useStore } from "../store/store";

export default function ProjectBoard() {
  const currentProjectBoard = useStore((state) => state.currentProject);
  return (
    <div>
      <h1>{currentProjectBoard.projectTitle}</h1>
      <button>New Todo</button>
      <button> New Column </button>
      <button> Add User </button>
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
