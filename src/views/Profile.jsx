import React from "react";
import AddNewProjectComponent from "../components/AddNewProjectComponent";
import ProfileComponent from "../components/ProfileComponent";
import ProjectListComponent from "../components/ProjectListComponent";
import "../assets/profile.css";
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
      {/* Included to fix the footer to the bottom of the page. */}
      <div style={{ height: "500px" }}></div>
    </div>
  );
}
