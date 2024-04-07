import { useContext, useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { userContext } from "../../layout/Root";

export const Login = () => {
  const { currentUser } = useContext(userContext);
  const [oldUser, setoldUser] = useState(true);
  const [loginError, setloginError] = useState("");

  return (
    <>
      {currentUser.length < 1 ? (
        <div className="max-w-xl mx-auto">
          {oldUser ? (
            <SignIn errorHandeler={{ loginError, setloginError }} />
          ) : (
            <SignUp errorHandeler={{ loginError, setloginError }} />
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
      ) : (
        "avilable"
      )}
    </>
  );
};
