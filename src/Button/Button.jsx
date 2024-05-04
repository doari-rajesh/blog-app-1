import React from "react";

const Button = ({ text, color, value }) => {
  return (
    <button
      className={`border-2 px-3 py-1 font-normal ${`text-${color}-${
        value ? value : 600
      }`} 
      ${`border-${color}-500`} rounded-[25px]`}
    >
      {text}
    </button>
  );
};

export default Button;
