import React from "react";
import About from "../common/About";
import { SideBarLinks } from "../../data/sidebarlinks";
import BlogSideBarLinks from "./BlogSideBarLinks";
import { NavLink } from "react-router-dom";

const BlogSideBar = () => {
  return (
    <div className="w-[40%] md:w-[30%] ml-2  mb-5 md:mb-0">
      <About />
      {SideBarLinks.map((data, index) => (
        <BlogSideBarLinks key={index} content={data} />
      ))}
      <NavLink to={"/blog-form"}>
        <button className="ml-4 md:ml-5 md:mt-8 px-3 md:px-5 py-1 md:py-2 border-2 text-black border-gray-300 rounded-md  hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out">
          create Blog
        </button>
      </NavLink>
    </div>
  );
};

export default BlogSideBar;
