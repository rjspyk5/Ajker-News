import React, { useState } from "react";
import auth from "../../firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";

export const ForgetPass = () => {
  const [email, setemail] = useState("");
  const handleSubmit = () => {
    if (email.lenghth <= 0 || email.includes("@")) {
      sendPasswordResetEmail(auth, email)
        .then((res) => console.log("successfully send"))
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <div>
      <input
        className="bg-slate-200 p-2 rounded-lg"
        required
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
        type="email"
        name=""
        id=""
      />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
