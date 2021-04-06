import React, { useState } from "react";

export default function SignUpComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setPasswordError("passwords don't match");
      return;
    }
    console.log(userName, password);
    setPasswordError("");
    setUserName("");
    setPassword("");
    setPassword2("");
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        ></input>
        {passwordError && passwordError}
        <button onClick={handleLogin}>Sign Up</button>
      </form>
    </div>
  );
}
