import React, { useState } from "react";

export default function LoginComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userName, password);
    setUserName("");
    setPassword("");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleLogin}>Sign In</button>
      </form>
    </div>
  );
}
