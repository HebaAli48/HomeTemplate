import React from "react";
import { arrowButton } from "../../utils/Icons";
const ContactUsButton = ({
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  const clickHandler = () => {
    if (onClick) onClick();
  };
  return (
    <button
      type={type}
      onClick={() => clickHandler()}
      className={`border-2 border-blue-800 hover:border-blue-500 hover:translate-x-[-2px] rounded-2xl px-3 py-2  text-blue-800 hover:text-blue-500 flex flex-row gap-1 justify-center items-start sm:gap-2 transition-all ${className}`}
    >
      <span>{arrowButton}</span>
      <span>{children}</span>
    </button>
  );
};

export default ContactUsButton;
