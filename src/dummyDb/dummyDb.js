// use nanoId to create unique ids when creating todos

export const db = {
  // an array of user onbjects
  // contains username + password
  // eventually might contain a bio
  // currently set up to be used for loggin in
  users: [
    { username: "casey", password: "123" },
    { username: "marc", password: "123" },
  ],
  // an array of project boards
  // contains:
  // array of users - to see who all has access to the project board
  // array of column name objects -  keeps track of names, adds a spot for local state
  // array of individual todos - contains: text, id, if its completed, contains column position - keeps track of the column that should be in
  // last is projectId - to keep track of which project is which. Needed so we can have multiple projects with the same name.

  projects: [
    {
      userName: ["casey"],
      projectTitle: "Casey's Project",
      columnNames: [{ name: "column1", id: "SHitvcADEy" }, { name: "column2", id: "SHotvcADEy" }],
      todos: [
        {
          text: "Delete Me!wqewqewqqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweq",
          id: "VkYqK0kqEkWW9ubO87rdC",
          completed: false,
          columnPosition: 0,
        },
        {
          text: "I'm Completed!",
          id: "VkYqK0kqEkWWPubO87rdC",
          completed: true,
          columnPosition: 0,
        },
      ],
      projectId: "OeYX9myAKiy85odj8DsjB",
    },
    {
      userName: ["marc"],
      projectTitle: "Marc's Project",
      columnNames: [{ name: "around the house", id: "wvRLOyzVSW" }],
      todos: [
        {
          text: "Delete Me!",
          id: "RXl1sH2bzziTmy41v0Z0p",
          completed: false,
          columnPosition: 0,
        },
        {
          text: "I'm Completed!",
          id: "VkYqK0kPEkWWPubO87rdC",
          completed: true,
          columnPosition: 0,
        },
      ],
      projectId: "VrKrUoBWCo6R9hT7q0XWc",
    },
    {
      userName: ["casey", "marc"],
      projectTitle: "combo Project",
      columnNames: [
        { name: "column1", id: "CwVhtPwRGi" },
        { name: "column2", id: "hGqEtbAYxi" },
        { name: "column3", id: "GADADDbQJX" },
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
        {
          text: "I'm Completed!",
          id: "VkYqK0kqGkWWPubO87rdC",
          completed: true,
          columnPosition: 0,
        },
      ],
      projectId: "P4nMLeAcqFfVoJ1oC1Bpy",
    },
  ],
};
