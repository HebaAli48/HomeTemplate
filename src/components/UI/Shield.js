import React from "react";
import "./Shield.css";

const Shield = ({ children, className = "" }) => {
  return (
    <div className={`shield  ${className}`}>
      {" "}
      <div className="shield-container">{children}</div>
    </div>
  );
};
export default Shield;
