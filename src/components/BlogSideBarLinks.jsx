import React from "react";
import { NavLink } from "react-router-dom";

const BlogSideBarLinks = (props) => {
  const content = props.content;
  // console.log("content", content);
  return (
    <div className="flex flex-col mt-3 p-5">
      <p className="italic text-xl font-bold mb-1">{content?.title}</p>
      {content?.links.map((link, index) => (
        <div
          key={index}
          className="text-sm p-[1px] font-sans font-semibold text-blue-500 hover:cursor-pointer"
        >
          <NavLink to={`https://www.${link}.com`} target="blank">
            {link}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default BlogSideBarLinks;
