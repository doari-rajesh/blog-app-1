import React from "react";

const BlogContentCard = ({ title, heading, date, description, titleColor }) => {
  return (
    <div className="w-full md:w-[55%] min-h-max flex  border-2 border-grey-200 rounded-md drop-shadow-sm">
      <div className="w-[60%] m-4">
        <p className={`${titleColor} text-sm font-bold`}>{title}</p>
        <h3 className=" text-2xl font-bold mt-1">{heading}</h3>
        <span className=" text-sm text-gray-400 font-sans font-medium">{date}</span>
        <p className="my-3 text-sm font-medium">{description}</p>
        <p className="text-xm text-blue-700 font-medium cursor-pointer">
          Continue reading
        </p>
      </div>
      <div className="w-[40%]">
        <img
          src={
            "https://img.freepik.com/free-photo/toy-bricks-table_144627-48267.jpg"
          }
          style={{ height: "100%", objectFit: "cover" }}
          alt="blog_image"
        />
      </div>
    </div>
  );
};

export default BlogContentCard;
