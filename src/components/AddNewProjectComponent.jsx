import React, { useState } from "react";
import { Button, Input, Label } from "semantic-ui-react";
import { useStore } from "../store/store";
import "../assets/profile.css"

export default function AddNewProjectComponent() {
  const [projectTitle, setProjectTitle] = useState("");
  const storeCreateNewProject = useStore(
    (state) => state.storeCreateNewProject
  );
  const handleClick = (e) => {
    e.preventDefault();
    storeCreateNewProject(projectTitle);
    setProjectTitle("");
  };
  return (
    <div id="pbuttons">
      <form onSubmit={handleClick}>
        <Label>New Project</Label>
        <Input
          id="newinput"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          placeholder="Project Title"
        /><br />

        <Button id="sub"onClick={handleClick} positive>
          Submit
        </Button>
      </form>
    </div>
  );
}
