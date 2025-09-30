import React from "react";

const Tags = ({ tagname = "null", className = "" }) => {
  return (
    <div className={`${className}`}>
      <span>{tagname}</span>
    </div>
  );
};

export default Tags;
