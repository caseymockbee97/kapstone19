import React from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import { useStore } from "../store/store";
import "../assets/projectboard.css"

export default function ProjectDeleteComponent(props) {
  const [isClicked, setIsClicked] = useState(false);

  const storeDeleteProjectBoard = useStore(
    (state) => state.storeDeleteProjectBoard
  );
  const handleDeleteProject = () => {
    storeDeleteProjectBoard(props.projectId);
  };
  return (
    <div id="pd">
      {isClicked ? (
        <>
          <Button onClick={() => setIsClicked(false)} positive>
            Cancel
          </Button>
          <Button onClick={handleDeleteProject} negative>
            Delete
          </Button>
        </>
      ) : (
        <Button onClick={() => setIsClicked(true)} negative>
          Delete Project
        </Button>
      )}
    </div>
  );
}
