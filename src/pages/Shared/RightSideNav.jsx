import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const RightSideNav = () => {
  return (
    <>
      <div className="space-y-3 mb-4">
        <p>Login With</p>
        <button className="btn flex">
          <FaGoogle /> Login With Google
        </button>
        <button className="btn flex">
          <FaGithub /> Login With Github
        </button>
      </div>
      <div>
        <p className="text-[#403F3F]">Find Us On</p>
        <button className="btn flex">
          <FaGoogle /> Facebook
        </button>
        <button className="btn flex">
          <FaGithub /> Twitter
        </button>
        <button className="btn flex">
          <FaGithub /> Instagram
        </button>
      </div>
    </>
  );
};
