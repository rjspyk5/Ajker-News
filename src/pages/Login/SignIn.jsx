import React from "react";

export const SignIn = ({ handleFormClick }) => {
  return (
    <div>
      <h1 className="text-center text-2xl text-bold">Registration Form</h1>
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

        <input
          name="password"
          className="bg-gray-100"
          placeholder="Enter Your Password"
          type="password"
        />

        <input
          className="mt-2 btn btn-success text-white w-full"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};
