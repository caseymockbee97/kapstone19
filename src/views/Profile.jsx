import React from "react";
import AddNewProjectComponent from "../components/AddNewProjectComponent";
import ProfileComponent from "../components/ProfileComponent";
import ProjectListComponent from "../components/ProjectListComponent";

export default function Profile() {
  return (
    <div>
      <ProfileComponent />
      <AddNewProjectComponent />
      <ProjectListComponent />
    </div>
  );
}
