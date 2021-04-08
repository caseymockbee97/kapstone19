import React from "react";
import { useStore } from "../store/store";
// Things to Display: user from the global store
export default function ProfileComponent() {
  const user = useStore((state) => state.user);

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
}
