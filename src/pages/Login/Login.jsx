import React from "react";

export const Login = () => {
  const handleFormClick = (e) => {
    e.preventDefault();
    console.log("handleClick");
  };
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-center text-2xl text-bold">Registration Form</h1>
      <form
        className="*:w-full *:rounded-lg *:p-2  "
        onSubmit={handleFormClick}
      >
        <input
          placeholder="Enter Your Email"
          className="mb-2 bg-gray-100"
          type="email"
        />

        <input
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
