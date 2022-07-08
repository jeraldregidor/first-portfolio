import React from "react";

const Card = (props) => {
  const handleClick = () => {
    props.clickDisplay();
    
  };

  return (
    <button
      onClick={handleClick}
      className="m-1 text-white bg-gradient-to-tr from-blue-600 to-red-900 ring-2 ring-black ring-insets p-0.5 md:p-6 shadow-xl shadow-blue-500/30 hover:invert focus:invert focus:scale-100 hover:shadow-blue-500/100 hover:scale-110 duration-500"
    >
      <div className="flex justify-center items-center">{props.logo}</div>
      <div className="text-center text-xs md:text-base hidden md:block">
        {props.name}
      </div>
    </button>
  );
};

export default Card;
