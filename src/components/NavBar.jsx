import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../assets/navbar.css"

export default function NavBar() {
  return (
    <div id ="bar">
      <Button.Group color='Black'>
       <Button><Link to="/">Login</Link></Button>
       <Button><Link to="/profile">Profile</Link></Button>
       <Button><Link to="/projectBoard/1234">ProjectBoard</Link></Button>
      </Button.Group>
    </div>
  );
}
