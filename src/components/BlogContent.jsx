import React from "react";
import BlogContentCard from "./BlogContentCard";

const BlogContent = () => {
  return (
    <div className="w-full max-h-max flex flex-col">
      <div className="w-full border-2 bg-gray-700  text-white">
        <div className="w-[70%] p-[4.25rem]">
          <h1 className="w-[60%] text-4xl italic font-semibold">
            Title of a longer featured blog post
          </h1>
          <p className=" w-[70%] mt-4 font-normal">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting A in this
            post's contents.
          </p>
          <p className="mt-4 font-bold ">Continue reading…</p>
        </div>
      </div>
      <div className="w-full mt-5 flex gap-x-6 ">
        <BlogContentCard
          title="world"
          titleColor="text-blue-700"
          heading="Featured Post"
          date="Nov 12"
          description="This is a wider card with supporting text below as a natural lead-in to additional content."
        />
        <BlogContentCard
          title="Design"
          titleColor="text-green-600"
          heading="Post Title"
          date="Nov 11"
          description="This is a wider card with supporting text below as a natural lead-in to additional content."
        />
      </div>
    </div>
  );
};

export default BlogContent;
