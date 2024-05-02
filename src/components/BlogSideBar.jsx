import React from "react";
import About from "./common/About";
import { SideBarLinks } from "../data/sidebarlinks";
import BlogSideBarLinks from "./BlogSideBarLinks";

const BlogSideBar = () => {
  return (
    <div className="w-[30%] ml-2">
      <About />
      {SideBarLinks.map((data, index) => (
        <BlogSideBarLinks key={index} content={data} />
      ))}
    </div>
  );
};

export default BlogSideBar;
