import React from "react";

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border border-neutral-200 rounded-xl shadow-subtle ${className}`}>
      {children}
    </div>
  );
}

export default Card;



