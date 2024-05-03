import React from "react";
import BlogPostDate from "./BlogPostDate";

const BlogPostCard = (props) => {
  const { name, title, date, description, heading, sub_heading, short_desc } =
    props.blogPostData;

  return (
    <div className="mt-5 mb-[2rem]">
      {/* Title  */}
      <h2 className=" text-4xl font-bold">{title}</h2>
      {/* Date */}
      <BlogPostDate date={date} name={name} />
      <div className="w-[90%] text-base font-medium ">
        {/* short desc 1*/}
        {short_desc && (
          <p className=" mt-4 mb-3 pb-4 border-b-2 border-gray-200">
            {short_desc}
          </p>
        )}

        {/* desc  */}
        <p className="mb-5">
          {description}
          <p className="mt-3">
            {" "}
            Curabitur blandittempus porttitor.{" "}
            <span className="font-semibold">
              Nullam quis risus eget urna mollis ornare
            </span>{" "}
            vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>

          {/* heading and sub-heading  */}
        </p>
        <div className="flex flex-col gap-y-3">
          <div>
            {/* heading  */}
            <h3 className=" text-2xl font-semibold">Heading</h3>
            <p>{heading}</p>
          </div>

          {/* sub-heading  */}
          <div>
            <h3 className=" text-xl font-semibold">Sub-heading</h3>
            <p>{sub_heading}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
