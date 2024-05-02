import React from "react";
import BlogSideBar from "./BlogSideBar";

const BlogsPostsContent = () => {
  return (
    <div className="mt-5 flex gap-x-1">
      <div className="w-[70%] p-3">
        <p className=" text-lg italic pb-2 font-bold border-b-2 border-gray-200">
          From The Firehose
        </p>
      </div>
      <BlogSideBar />
    </div>
  );
};

export default BlogsPostsContent;
