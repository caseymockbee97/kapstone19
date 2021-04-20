import create from "zustand";
import { devtools } from "zustand/middleware";
import { toast } from "react-toastify";
const baseURL = "http://localhost:3000/";
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
      fetch(baseURL + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({
              user: response.content.username,
              todoProjectBoards: response.content.projects,
              currentProject: response.content.currentProject
                ? response.content.currentProject
                : {
                    userName: [],
                    projectTitle: "",
                    columnNames: [],
                    todos: [],
                    projectId: "",
                  },
            });
            toast.success("Your sign in was a success", {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          } else {
            toast.warn(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeHandleSignUp: (username, password) => {
      fetch(baseURL + "signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            toast.success(response.message, {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          } else {
            toast.warn(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeSetProjects: () => {
      if (get().user) {
        fetch(baseURL + "projects/" + get().user)
          .then((res) => res.json())
          .then((response) => {
            if (response.statusCode < 300) {
              set({ todoProjectBoards: response.content });
            } else {
              toast.error(
                `Error code: ${response.statusCode} \r\n ${response.message}`,
                {
                  position: toast.POSITION.BOTTOM_CENTER,
                }
              );
              throw new Error(`${response.message}`);
            }
          })
          .catch((error) => console.log(error.message));
      }
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
    storeCreateNewProject: (title) => {
      const projectTitle = title ? title : `${get().user}'s Project`;
      fetch(baseURL + "projects/" + get().user, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: projectTitle,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            get().storeSetProjects();
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeAddNewTodo: (projectId, text, columnPosition) => {
      fetch(baseURL + "project/todo/" + projectId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          columnPosition: columnPosition,
          username: get().user,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeAddNewColumn: (projectId, columnTitle) => {
      fetch(baseURL + "project/column/" + projectId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          columnTitle: columnTitle,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeAddProjectUsers: (projectId, newUser) => {
      fetch(baseURL + "project/users/" + projectId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newUser: newUser,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
            toast.success(`Added ${newUser} to this Project 🤠`, {
              position: toast.POSITION.BOTTOM_CENTER,
            });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeDeleteColumn: (projectId, columnId) => {
      fetch(baseURL + "project/column/" + projectId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          columnId: columnId,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeToggleTodoCompleted: (projectId, boolean, todoId) => {
      fetch(baseURL + "project/todo/completed/" + projectId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          boolean: boolean,
          todoId: todoId,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeDeleteTodo: (projectId, todoId) => {
      fetch(baseURL + "project/todo/" + projectId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todoId: todoId,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeEditTodo: (projectId, text, todoId) => {
      fetch(baseURL + "project/todo/text/" + projectId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          todoId: todoId,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeLogout: () => {
      set({
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
      });
    },
    storeDeleteUser: (username, password) => {
      fetch(baseURL + "user/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then(get().storeLogout());
    },
    storeEditColumnTitle: (projectId, columnTitle, columnId) => {
      fetch(baseURL + "project/column/" + projectId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          columnTitle: columnTitle,
          columnId: columnId,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeEditProjectTitle: (projectId, newTitle) => {
      fetch(baseURL + "project/title/" + projectId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTitle: newTitle,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeChangeTodoColumn: (projectId, columnPosition, todoId) => {
      //Sets the position before the api call so the todo doesn't flicker
      const todoIndex = get().currentProject.todos.findIndex(
        (todo) => todo.id === todoId
      );
      if (todoIndex !== -1) {
        const tempCurrent = get().currentProject;
        tempCurrent.todos[todoIndex].columnPosition = columnPosition;
        set({ currentProject: tempCurrent });
      }
      //actually sets position server side
      fetch(baseURL + "project/todo/position/" + projectId, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          columnPosition: columnPosition,
          todoId: todoId,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeDeleteProjectBoard: (projectId) => {
      fetch(baseURL + "project/" + projectId, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            toast.success("Congrats, you deleted the project! 🤠", {
              position: toast.POSITION.BOTTOM_CENTER,
            });
            set({
              currentProject: {
                userName: [],
                projectTitle: "",
                columnNames: [],
                todos: [],
                projectId: "",
              },
            });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
    storeDeleteProjectUsers: (projectId, user) => {
      fetch(baseURL + "project/users/" + projectId, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.statusCode < 300) {
            set({ currentProject: response.content });
          } else {
            toast.error(
              `Error code: ${response.statusCode} \r\n ${response.message}`,
              {
                position: toast.POSITION.BOTTOM_CENTER,
              }
            );
            throw new Error(`${response.message}`);
          }
        })
        .catch((error) => console.log(error.message));
    },
  }))
);
