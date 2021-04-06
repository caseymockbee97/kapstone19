import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import SignUpComponent from "../components/SignUpComponent";

export default function Login() {
  const [isUser, setIsUser] = useState(true);

  return (
    <>
      {isUser ? <LoginComponent /> : <SignUpComponent />}
      <p onClick={() => setIsUser((prev) => !prev)}>
        {isUser ? "Sign Up Here" : "Login Here"}
      </p>
    </>
  );
}
