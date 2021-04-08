import React from "react";
import { useStore } from "../store/store";
// Things to display: A list of project titles from global store.

export default function ProjectListComponent() {
  const toDoProjectBoards = useStore((state) => state.todoProjectBoards);
  return (
    <div>
      {toDoProjectBoards.map((toDoProject) => (
        <h2 key={toDoProject.projectId}>{toDoProject.projectTitle}</h2>
      ))}
    </div>
  );
}
