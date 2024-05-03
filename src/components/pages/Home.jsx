import React from "react";
import NavLinks from "../common/NavBar/NavLinks";
import BlogContent from "../BlogContent";
import BlogsPostsContent from "../BlogsPostsContent";

const Home = () => {
  return (
    <div>
      {/* <NavLinks /> */}
      <BlogContent />
      <BlogsPostsContent />
    </div>
  );
};

export default Home;
