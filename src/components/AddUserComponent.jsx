import React, { useState } from "react";
import { useStore } from "../store/store";
import "../assets/addcolumn.css";
import { Button, Input } from "semantic-ui-react";
export default function AddUserComponent(props) {
  const { projectId } = useStore((state) => state.currentProject);
  const storeAddProjectUsers = useStore((state) => state.storeAddProjectUsers);
  const [newUser, setNewUser] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (newUser) {
      storeAddProjectUsers(projectId, newUser);
    }
    props.addUserButton();
  };
  return (
    <div id="box">
      <form onSubmit={handleClick}>
        <Input
          id="newinput"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Add New User"
        />

        <Button onClick={handleClick} positive>
          Submit
        </Button>
        <Button onClick={props.addUserButton} negative>
          Cancel
        </Button>
      </form>
    </div>
  );
}
