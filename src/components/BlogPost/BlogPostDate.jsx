import React from "react";

const BlogPostDate = ({ date, name }) => {
  return (
    <div className="text-sm font-medium text-gray-400 flex items-center mb-2 pt-1">
      <p className="pr-1 font-sans">
        {date} by
        <span className=" text-blue-600 pl-1">{name}</span>
      </p>
    </div>
  );
};

export default BlogPostDate;
