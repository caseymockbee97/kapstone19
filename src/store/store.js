import create from "zustand";
import { devtools, redux } from "zustand/middleware";

const initialState = {
  // current users name
  user: "casey",
  //all users projects
  todoProjectBoards: [
    {
      userName: ["casey"],
      projectTitle: "Casey's Project",
      columnNames: [{ name: "column1", id: "123456" }],
      todos: [
        {
          text: "Delete Me!",
          id: "VkYqK0kqEkWW9ubO87rdC",
          completed: false,
          columnPosition: 0,
        },
      ],
      projectId: "OeYX9myAKiy85odj8DsjB",
    },
    {
      userName: ["casey", "marc"],
      projectTitle: "combo Project",
      columnNames: [
        { name: "column1", id: "234567" },
        { name: "column2", id: "345678" },
        { name: "column3", id: "456789" },
      ],
      todos: [
        {
          text: "Delete Me!",
          id: "UWFNQasJvnjwJ62HovaKB",
          completed: false,
          columnPosition: 0,
        },
        {
          text: "Delete Me!",
          id: "_ew3kp_75Dy4K9B4QsaHc",
          completed: false,
          columnPosition: 1,
        },
        {
          text: "Delete Me!",
          id: "_ew3kp_75Dy4K9B4QEaHc",
          completed: false,
          columnPosition: 2,
        },
      ],
      projectId: "P4nMLeAcqFfVoJ1oC1Bpy",
    },
  ],
  //current Projects
  currentProject: {
    userName: ["casey", "marc"],
    projectTitle: "combo Project",
    columnNames: [
      { name: "column1", id: "234567" },
      { name: "column2", id: "345678" },
      { name: "column3", id: "456789" },
    ],
    todos: [
      {
        text: "Delete Me!",
        id: "UWFNQasJvnjwJ62HovaKB",
        completed: false,
        columnPosition: 0,
      },
      {
        text: "Delete Me!",
        id: "_ew3kp_75Dy4K9B4QsaHc",
        completed: false,
        columnPosition: 1,
      },
      {
        text: "Delete Me!",
        id: "_ew3kp_75Dy4K9B4QEaHc",
        completed: false,
        columnPosition: 2,
      },
    ],
    projectId: "P4nMLeAcqFfVoJ1oC1Bpy",
  },
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: {} };
    default:
      return state;
  }
};

export const useStore = create(devtools(redux(reducer, initialState)));
