import React from "react";
import { NavbarLinks } from "../../../data/navlinks";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <div className="hidden w-full md:flex flex-row justify-between items-center px-3 my-3">
        {NavbarLinks.map((element) => {
          return (
            <NavLink to={element?.link}>
              <span
                key={element?.id}
                className="text-sm text-gray-400 font-medium hover:cursor-pointer"
              >
                {element?.title}
              </span>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default NavLinks;
