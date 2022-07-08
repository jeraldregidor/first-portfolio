import React from "react";

const BigCard = (props) => {
  return (
    <div 
    className="w-full h-auto flex items-center justify-center absolute bottom-0 top-0"
    >
      {props.comp}
    </div>
  );
};

export default BigCard;
