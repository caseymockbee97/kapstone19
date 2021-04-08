import React, { useState } from "react";
import { useStore } from "../store/store";

export default function AddUserComponent(props) {
  const { userName } = useStore((state) => state.currentProject);
  const [newUser, setNewUser] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (!userName.some((user) => user === newUser) && newUser) {
      console.log(newUser);
    }
    props.addUserButton();
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Add New User"
        />

        <button onClick={props.addUserButton}>Cancel</button>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}
