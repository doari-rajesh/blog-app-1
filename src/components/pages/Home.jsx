import React from "react";
import BlogContent from "../BlogContent";
import BlogsPostsContent from "../BlogsPostsContent";

const Home = () => {
  return (
    <div>
      <BlogContent />
      <BlogsPostsContent />
      <div className="flex  gap-x-2 mb-[4rem]">
        <button className="border-2 px-3 py-1 font-normal text-blue-500 border-blue-500 rounded-[25px]">Older</button>
        <button className="border-2 px-2 py-[5px] font-normal text-gray-500 border-gray-300 rounded-[25px]">Newer</button>

      </div>
    </div>
  );
};

export default Home;
