import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../assets/navbar.css";
import { useStore } from "../store/store";
import LogoutComponent from "./LogoutComponent";

export default function NavBar() {
  const projectId = useStore((state) => state.currentProject.projectId);
  const user = useStore((state) => state.user);
  return (
    <div id="bar">
      {!user ? (
        <>
          <Link to="/">
            <div id="log">getItDone.js</div>
          </Link>
        </>
      ) : (
        <>
          <Link to="/">
            <div id="log">getItDone.js</div>
          </Link>
          <div id="bb">
            <Link to="/profile">
              <div className="nav">Profile</div>
            </Link>
            <Link to={"/projectBoard/" + projectId}>
              <div className="nav">Current Project</div>
            </Link>
            <Link to="/about">
              <div className="nav">About Us</div>
            </Link>
          </div>
          <div id="logout">
            <LogoutComponent />
          </div>
        </>
      )}
    </div>
  );
}
