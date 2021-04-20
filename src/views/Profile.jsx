import React from "react";
import AddNewProjectComponent from "../components/AddNewProjectComponent";
import ProfileComponent from "../components/ProfileComponent";
import ProjectListComponent from "../components/ProjectListComponent";
import "../assets/profile.css";
import { Button } from "semantic-ui-react";
import UserDeleteComponent from "../components/UserDeleteComponent";
import FilterProjectsComponent from "../components/FilterProjectsComponent";

export default function Profile() {
  return (
    <div id="procontainer">
      <ProfileComponent />
      <AddNewProjectComponent />
      <FilterProjectsComponent />
      <ProjectListComponent />
      <UserDeleteComponent />
    </div>
  );
}
