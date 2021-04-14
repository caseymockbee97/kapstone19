import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../assets/navbar.css";
import { useStore } from "../store/store";

export default function NavBar() {
  const projectId = useStore((state) => state.currentProject.projectId);
  return (
    <div id="bar">
      <div id="log">
        <Link to="/">
          <Button>Login</Button>
        </Link>
      </div>
    <div id="bb">
      <Button.Group>
        <Link to="/profile">
          <Button class="ui button">Profile</Button>
        </Link>
        <Link to={"/projectBoard/" + projectId}>
          <Button class="ui button">ProjectBoard</Button>
        </Link>
        <Link to="/about">
          <Button class="ui button">About Us</Button>
        </Link>      </Button.Group>
    </div>
      <div id="logout">
        <Link to="/login">
          <Button negative>LOGOUT</Button>
        </Link>
      </div>
    </div>
  );
}
