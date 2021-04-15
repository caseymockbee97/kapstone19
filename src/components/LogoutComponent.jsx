import React from "react";
import { Button } from "semantic-ui-react";
import { useStore } from "../store/store";

export default function LogoutComponent() {
  const storeLogout = useStore((state) => state.storeLogout);
  const handleLogout = () => {
    storeLogout();
  };
  return (
    <div>
      <Button onClick={handleLogout} negative>
        Logout
      </Button>
    </div>
  );
}
