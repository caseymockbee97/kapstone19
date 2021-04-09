import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../assets/navbar.css";
import { useStore } from "../store/store";

export default function NavBar() {
  const projectId = useStore((state) => state.currentProject.projectId);
  return (
    <div id="bar">
      <Button.Group>
        <Link to="/">
          <Button>Login</Button>
        </Link>
        <Link to="/profile">
          <Button>Profile</Button>
        </Link>

        <Link to={"/projectBoard/" + projectId}>
          <Button>ProjectBoard</Button>
        </Link>
      </Button.Group>
    </div>
  );
}
