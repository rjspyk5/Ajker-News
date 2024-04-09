import React from "react";
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qzone1 from "../../assets/img/qZone1.png";
import qzone2 from "../../assets/img/qZone2.png";
import qzone3 from "../../assets/img/qZone3.png";

export const RightSideNav = () => {
  return (
    <>
      <div className="space-y-3 mb-4">
        <p className="font-semibold text-lg">Login With</p>
        <button className="btn flex bg-transparent hover:text-blue-500 btn-outline">
          <FaGoogle /> Login With Google
        </button>
        <button className="btn flex bg-transparent hover:text-blue-500 btn-outline">
          <FaGithub /> Login With Github
        </button>
      </div>
      <div className="font-normal mb-4">
        <p className="text-[#403F3F] mb-4 font-semibold text-lg">Find Us On</p>
        <button className="border w-full flex rounded-t-xl items-center text-lg p-4 space-x-3">
          <FaTwitter className="mr-3" /> Twitter
        </button>
        <button className="border w-full flex items-center text-lg p-4 space-x-3">
          <FaGoogle className="mr-3" /> Facebook
        </button>
        <button className="border rounded-b-xl w-full flex items-center text-lg p-4 space-x-3">
          <FaInstagram className="mr-3" /> Instagram
        </button>
      </div>
      <div className="p-4 space-y-7 bg-[#F3F3F3]">
        <p className="text-lg font-semibold">Q-zone</p>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </>
  );
};
