import React from "react";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="w-full px-3  border-b-2 hover:cursor-pointer">
      <nav className="w-full py-3 flex justify-between items-center ">
        <p className=" text-sm font-medium text-gray-400">Subscribe</p>
        <h1 className=" text-4xl font-bold">Large</h1>
        <div className="flex justify-center gap-x-4 items-center">
          <CiSearch
            fontSize={24}
            style={{ fontWeight: 900, fill: "#374151" }}
          />

          <button className="border border-black px-3 py-1 rounded font-medium text-sm text-gray-500">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
