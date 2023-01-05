import React from "react";

const h1 = ({ title, paragraph }) => {
  return (
    <div className="message about-me">
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default h1;
