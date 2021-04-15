import React from "react";
import { useStore } from "../store/store";
import "../assets/profile.css"
// Things to Display: user from the global store
export default function ProfileComponent() {
  const user = useStore((state) => state.user);

  return (
    <div className="pro">
      <p>{user}</p>
    </div>
  );
}
