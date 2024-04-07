import { useContext, useState } from "react";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import auth from "../../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { userContext } from "../../layout/Root";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const { currentUser, setcurrentUser } = useContext(userContext);
  const [showPass, setshowPass] = useState(false);
  const navigate = useNavigate();
  const handleFormClick = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => setcurrentUser(res.user))
      .catch((er) => console.log(er));
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-bold">Log In</h1>
      <form
        className="*:w-full *:rounded-lg *:p-2  "
        onSubmit={handleFormClick}
      >
        <input
          name="email"
          placeholder="Enter Your Email"
          className="mb-2 bg-gray-100"
          type="email"
        />
        <p className="relative p-0">
          <input
            name="password"
            className="bg-gray-100 w-full p-2 rounded-lg"
            placeholder="Enter Your Password"
            type={showPass ? "text" : "password"}
          />
          {showPass ? (
            <IoMdEye
              onClick={() => setshowPass(!showPass)}
              className="absolute top-5 right-4"
            />
          ) : (
            <IoIosEyeOff
              onClick={() => setshowPass(!showPass)}
              className="absolute top-5 right-4"
            />
          )}
        </p>
        <label className="label">
          <a
            onClick={() => navigate("/forget")}
            className="label-text-alt link link-hover"
          >
            Forgot password?
          </a>
        </label>

        <p>
          <input className="inline" type="checkbox" name="terms" id="terms" />
          <label className="inline" htmlFor="terms">
            Accept our terms and condition
          </label>
        </p>
        <input
          className="mt-2 btn btn-success text-white w-full"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
