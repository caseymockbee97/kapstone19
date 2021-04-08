import React, { useState } from "react";
import { useStore } from "../store/store";

export default function AddColumnComponent(props) {
  const { columnNames } = useStore((state) => state.currentProject);
  const [newColumn, setNewColumn] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (
      !columnNames.some(
        (column) => column.name.toLowerCase() === newColumn.toLowerCase()
      ) &&
      newColumn.toLowerCase() !== "completed" &&
      newColumn
    ) {
      console.log(newColumn);
    }
    props.addColumnButton();
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          value={newColumn}
          onChange={(e) => setNewColumn(e.target.value)}
          placeholder="New Column"
        />

        <button onClick={props.addColumnButton}>Cancel</button>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}
