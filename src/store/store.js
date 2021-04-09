import create from "zustand";
import { devtools } from "zustand/middleware";
import { db } from "../dummyDb/dummyDb";

export const useStore = create(
  devtools((set, get) => ({
    // current users name
    user: "",
    //all users projects
    todoProjectBoards: [],
    //current Projects
    currentProject: {
      userName: [],
      projectTitle: "",
      columnNames: [],
      todos: [],
      projectId: "",
    },
    storeHandleLogin: (username, password) => {
      let userIndex = db.users.findIndex((user) => user.username === username);
      if (userIndex === -1 || db.users[userIndex].password !== password) {
        alert("username or password are incorrect");
        return;
      }
      let user = username;
      let projects = db.projects.filter((project) =>
        project.userName.includes(user)
      );
      let tempCurrentProject = projects[0];
      set({
        user: username,
        todoProjectBoards: projects,
        currentProject: tempCurrentProject,
      });
    },
    storeSetCurrentProject: (projectId) => {
      const currentProject = get().todoProjectBoards.find(
        (project) => project.projectId === projectId
      );
      if (currentProject !== undefined) {
        set({ currentProject: currentProject });
      } else {
        set({
          currentProject: {
            userName: [],
            projectTitle: "",
            columnNames: [],
            todos: [],
            projectId: "",
          },
        });
      }
    },
  }))
);
