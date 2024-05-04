import React from "react";
import BlogContent from "../BlogContent/BlogContent";
import BlogsPostsContent from "../BlogPost/BlogsPostsContent";
import Button from "../../Button/Button";

const Home = () => {
  return (
    <div>
      <BlogContent />
      <BlogsPostsContent />
      <div className="flex  gap-x-2 mb-[4rem]">
        <Button color="blue" text="Older" />
        <Button color="gray" text="Newer" value="500" />
      </div>
    </div>
  );
};

export default Home;
