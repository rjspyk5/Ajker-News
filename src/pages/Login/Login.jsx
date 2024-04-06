import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Login = () => {
  const [oldUser, setoldUser] = useState(true);
  const handleFormClick = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);
    console.log(password);
  };
  return (
    <div className="max-w-xl mx-auto">
      {oldUser ? (
        <SignIn handleFormClick={handleFormClick} />
      ) : (
        <SignUp handleFormClick={handleFormClick} />
      )}

      {oldUser ? (
        <p>
          You are new here?
          <span
            onClick={() => setoldUser(!oldUser)}
            className="text-green-500 hover:cursor-pointer"
          >
            Sign Up now
          </span>
        </p>
      ) : (
        <p>
          Already Have an account?{" "}
          <span
            onClick={() => setoldUser(!oldUser)}
            className="text-green-500 hover:cursor-pointer"
          >
            Sign in
          </span>
        </p>
      )}
    </div>
  );
};
