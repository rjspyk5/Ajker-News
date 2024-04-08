import { useContext, useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { userContext } from "../../Providers/Authprovider";

export const Login = () => {
  const { currentUser } = useContext(userContext);
  const [oldUser, setoldUser] = useState(true);

  return (
    <>
      {!currentUser ? (
        <div className="max-w-xl mx-auto">
          {oldUser ? <SignIn /> : <SignUp />}

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
      ) : currentUser?.emailVerified ? (
        "wellcome"
      ) : (
        "email need to be verified"
      )}
    </>
  );
};
