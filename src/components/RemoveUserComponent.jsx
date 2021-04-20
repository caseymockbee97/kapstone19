import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import { useStore } from "../store/store";

export default function RemoveUserComponent(props) {
  const { projectId } = useStore((state) => state.currentProject);
  const storeDeleteProjectUsers = useStore(
    (state) => state.storeDeleteProjectUsers
  );
  const [User, setUser] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (User) {
      storeDeleteProjectUsers(projectId, User);
    }
    props.removeUserButton();
  };
  return (
    <div id="box">
      <form onSubmit={handleClick}>
        <Input
          id="newinput"
          value={User}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Remove User"
        />

        <Button onClick={handleClick} positive>
          Submit
        </Button>
        <Button onClick={props.removeUserButton} negative>
          Cancel
        </Button>
      </form>
    </div>
  );
}
