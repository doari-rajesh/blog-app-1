import React from "react";
import { NavbarLinks } from "../../../data/navlinks";

const NavLinks = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-5 my-3">
        {NavbarLinks.map((element) => {
          return (
            <span
              key={element?.id}
              className="text-sm text-gray-400 font-medium hover:cursor-pointer"
            >
              {element?.title}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default NavLinks;
