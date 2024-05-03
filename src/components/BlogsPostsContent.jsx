import React, { useContext } from "react";
import BlogSideBar from "./BlogSideBar";
import BlogPostCard from "./BlogPostCard";
import { AppContext } from "../context/AppContext";

const BlogsPostsContent = () => {
  const { blog } = useContext(AppContext);

  return (
    <div className="mt-5 flex gap-x-1">
      <div className="w-[70%] p-3">
        <p className=" text-2xl italic pb-3 font-bold border-b-2 border-gray-200">
          From The Firehose
        </p>
        {blog.map((blog, index) => (
          <BlogPostCard key={index} blogPostData={blog} />
        ))}
        {/* <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard /> */}
      </div>
      <BlogSideBar />
    </div>
  );
};

export default BlogsPostsContent;
