import { useContext, useState } from "react";
import auth from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { userContext } from "../../layout/Root";

export const SignUp = () => {
  const [loginError, setloginError] = useState("");
  const { currentUser, setcurrentUser } = useContext(userContext);
  const handleFormClick = (e) => {
    e.preventDefault();
    setloginError("");
    const name = e.target.name.value;
    const number = e.target.number.value;
    const email = e.target.email.value;
    const cPassword = e.target.Cpassword.value;
    const password = e.target.password.value;
    //  Validation
    if (
      name.length === 0 ||
      number.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      cPassword.length === 0
    ) {
      setloginError(
        <p className="text-red-500">all require fields must have fillup</p>
      );
      return;
    }
    if (number.length !== 11) {
      setloginError(<p className="text-red-500">Number must be 11 digit</p>);
      return;
    }
    if (password !== cPassword) {
      setloginError(<p className="text-red-500">Password not matched</p>);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setloginError(<p className="text-green-500">Success</p>);
        console.log(res.user);
        sendEmailVerification(res.user)
          .then(() => {
            setcurrentUser(res.user);
          })
          .catch((err) => {
            setloginError(<p className="text-red-500">{err.message}</p>);
          });
      })
      .catch((err) =>
        setloginError(<p className="text-red-500">{err.message}</p>)
      );
  };

  return (
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleFormClick}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Number</span>
          </label>
          <input
            name="number"
            type="number"
            placeholder="Number"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            name="Cpassword"
            type="password"
            placeholder="Confirm password"
            className="input input-bordered"
            required
          />
        </div>
        {loginError && loginError}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};
