export const baseURL = ""; //If you need to change the base url do it in store.

//in store
export const postUserLogin = (username, password) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};

//in store
export const postUserSignUp = (username, password) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const deleteUser = (username, password) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const fetchAllProjects = () => {
  fetch(baseURL + "projects")
    .then((res) => res.json())
    .then((body) => console.log(body));
};
//in store
export const fetchProjectsByUser = (username) => {
  fetch(baseURL + "projects/" + username)
    .then((res) => res.json())
    .then((body) => console.log(body));
};
//in store
export const postProject = (username, title) => {
  fetch(baseURL + "projects/" + username, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const deleteProjectBoard = (projectId) => {
  fetch(baseURL + "project/" + projectId, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
};

export const editProjectTitle = (projectId, newTitle) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};
export const postProjectUsers = (projectId, newUser) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};
export const deleteProjectUsers = (projectId, user) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};

// in store
export const postProjectColumn = (projectId, columnTitle) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};
export const patchProjectColumn = (projectId, columnTitle, columnId) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};
export const deleteProjectColumn = (projectId, columnId) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};

// in store
export const postTodo = (projectId, text, columnPosition) => {
  fetch(baseURL + "project/todo/" + projectId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
      columnPosition: columnPosition,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });
};
export const patchTodoText = (projectId, text, todoId) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};
export const patchTodoPosition = (projectId, columnPosition, todoId) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};
export const patchTodoCompleted = (projectId, boolean, todoId) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};
export const deleteTodo = (projectId, todoId) => {
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
    .then((res) => {
      console.log(res);
      return res;
    });
};
