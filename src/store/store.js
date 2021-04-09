import { nanoid } from "nanoid";
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
      alert("Your sign in was a success.");
    },
    storeHandleSignUp: (username, password) => {
      if (db.users.some((user) => user.username === username)) {
        alert("That user already exists!");
        return;
      }
      db.users.push({ username: username, password: password });
      get().storeCreateNewProject(username);
      alert("Your account has been created!");
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
    storeCreateNewProject: (userName, title) => {
      const projectTitle = title ? title : `${userName}'s Project`;
      const newProject = {
        userName: [userName],
        projectTitle: projectTitle,
        columnNames: [{ name: "Change Me!", id: nanoid() }],
        todos: [
          {
            text: "Delete Me!",
            id: nanoid(),
            completed: false,
            columnPosition: 0,
          },
        ],
        projectId: nanoid(),
      };
      db.projects.push(newProject);
    },
  }))
);
