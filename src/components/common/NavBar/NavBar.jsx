import React from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full px-3  border-b-2 ">
      <nav className="w-full py-3 flex justify-between items-center ">
        <NavLink to={"/"}>
          <p className=" text-sm font-medium text-gray-400 hover:cursor-pointer">
            Subscribe
          </p>
        </NavLink>
        <h1 className="text-2xl md:text-4xl font-bold hover:cursor-pointer">
          Large
        </h1>
        <div className="flex justify-center gap-x-4 items-center hover:cursor-pointer">
          <CiSearch
            fontSize={24}
            style={{ fontWeight: 900, fill: "#374151" }}
            className="h-6 w-6 md:h-8 md:w-8 text-gray-700"
          />
          <NavLink to="/signup">
            <button className="border border-black px-3 py-1 rounded font-medium text-sm text-gray-500">
              Sign up
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
