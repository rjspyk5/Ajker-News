import React, { useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const Login = () => {
  const [oldUser, setoldUser] = useState(true);

  const [loginError, setloginError] = useState("");

  const handleFormClick = (e) => {
    e.preventDefault();
    setloginError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.chekced;
    if (!password.match(/[A-Z]/)) {
      setloginError("password must have been one upper case");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => setloginError("Successfully added user"))
      .catch((err) => setloginError(err.message));
  };

  return (
    <div className="max-w-xl mx-auto">
      {oldUser ? (
        <SignIn handleFormClick={handleFormClick} />
      ) : (
        <SignUp handleFormClick={handleFormClick} />
      )}
      <p className="text-red-500">{loginError && loginError}</p>
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
