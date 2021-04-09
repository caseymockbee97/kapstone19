import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "../assets/create.css";
import { useStore } from "../store/store";

export default function SignUpComponent() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const storeHandleSignUp = useStore((state) => state.storeHandleSignUp);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setPasswordError("passwords don't match");
      return;
    }
    console.log(userName, password);
    storeHandleSignUp(userName, password);
    setPasswordError("");
    setUserName("");
    setPassword("");
    setPassword2("");
  };
  return (
    <div id="create">
      <h1>Sign-Up</h1>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          ></input>
        </Form.Field>
        {passwordError && passwordError}
        <div id="button">
          <Button onClick={handleLogin}>Sign Up</Button>
        </div>
      </Form>
      <hr />
    </div>
  );
}
