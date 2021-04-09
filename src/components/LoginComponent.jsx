import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "../assets/login.css";
import { useStore } from "../store/store";
export default function LoginComponent() {
  const storeHandleLogin = useStore((state) => state.storeHandleLogin);
  const user = useStore((state) => state.user);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    storeHandleLogin(userName, password);
    if (user) {
      setUserName("");
      setPassword("");
    }
  };
  return (
    <div id="login">
      <h1>Login</h1>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input
            className="input"
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </Form.Field>
        <div id="button">
          <Button onClick={handleLogin}>Sign In</Button>
        </div>
      </Form>
      <hr />
    </div>
  );
}
// <form class="ui form"><div class="field"><label>First Name</label><input placeholder="First Name"/></div><div class="field"><label>Last Name</label><input placeholder="Last Name"/></div><div class="field"></div><button >Submit</button></form>
