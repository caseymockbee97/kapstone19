import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      {" "}
      <Link to="/">Login</Link> | <Link to="/profile">Profile</Link> |{" "}
      <Link to="/projectBoard/1234">ProjectBoard</Link>
    </div>
  );
}
