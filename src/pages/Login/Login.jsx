import { useContext, useState } from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import auth from "../../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { userContext } from "../../layout/Root";

export const Login = () => {
  const data = useContext(userContext);
  console.log(data);
  const [oldUser, setoldUser] = useState(true);
  const [loginError, setloginError] = useState("");
  const handleFormClick = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((er) => console.log(er));
    if (!password.match(/[A-Z]/)) {
      setloginError("password must have been one upper case");
      return;
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Component */}
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
