import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import SignUpComponent from "../components/SignUpComponent";
import "../assets/login.css";

export default function Login() {
  const [isUser, setIsUser] = useState(true);

  return (
    <>
      {isUser ? <LoginComponent /> : <SignUpComponent />}
      <div id="click">
        <p onClick={() => setIsUser((prev) => !prev)}>
          {isUser ? "Sign Up Here" : "Login Here"}
        </p>
      </div>
      {/* Included to fix the footer to the bottom of the page. */}
      <div style={{ height: "500px" }}></div>
    </>
  );
}
