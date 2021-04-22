import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";
import "../assets/profile.css";
export default function ProjectListComponent() {
  const toDoProjectBoards = useStore((state) => state.todoProjectBoards);
  const storeSetProjects = useStore((state) => state.storeSetProjects);
  useEffect(() => {
    storeSetProjects();
  }, [storeSetProjects]);
  return (
    <div id="pplist">
      {toDoProjectBoards.map((toDoProject) => (
        <div key={toDoProject.projectId} className="project">
          <Link to={"/projectBoard/" + toDoProject.projectId}>
            <h3>{toDoProject.projectTitle}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
