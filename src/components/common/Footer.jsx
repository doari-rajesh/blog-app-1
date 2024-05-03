import React from "react";

const Footer = () => {
  //   handler to scroll top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling
    });
  };
  return (
    <div className="w-full flex flex-col gap-y-2 justify-center items-center h-[10rem] bg-gray-100 p-[5rem] text-base font font-medium text-gray-400">
      <p>
        Blog template built for
        <span className=" text-blue-500 mx-2 cursor-pointer ">BootStrap</span>
        by
        <span className="text-blue-500 ml-1 cursor-pointer">@amdo</span>
      </p>
      <p id="#" className="text-blue-500 cursor-pointer" onClick={scrollToTop}>
        Back to top
      </p>
    </div>
  );
};

export default Footer;
