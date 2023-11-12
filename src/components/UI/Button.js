import React from "react";

const Button = ({ children, className = "", onClick, type = "button" }) => {
  const clickHandler = () => {
    if (onClick) onClick();
  };
  return (
    <button
      type={type}
      onClick={() => clickHandler()}
      className={`bg-blue-700 hover:bg-blue-500 border hover:border-blue-600 rounded-xl px-2 py-1 text-sm text-white transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
