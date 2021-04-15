import React from "react";
import AddNewProjectComponent from "../components/AddNewProjectComponent";
import ProfileComponent from "../components/ProfileComponent";
import ProjectListComponent from "../components/ProjectListComponent";
import "../assets/profile.css"
import { Button } from "semantic-ui-react";

export default function Profile() {
  return (
    <div id="procontainer">
      <ProfileComponent />
      <AddNewProjectComponent />
      <ProjectListComponent />
      <div id="deleteuser"><Button negative>DELETE USER</Button></div>
    </div>
  );
}
