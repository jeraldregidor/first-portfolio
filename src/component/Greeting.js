import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { FaGithub } from "react-icons/fa";

const greeting = (props) => {
  const handleGitClick = () => {
    props.clickGitLogo();
  };

  return (
    <div className="w-full flex justify-between">
      <div>
        <h1 className="text-3xl pl-8 font-thin pt-7 text-white">
          <TypeWriterEffect
            startDelay={100}
            cursorColor="white"
            text="Hi! I'm"
            typeSpeed={50}
            hideCursorAfterText={true}
          />
        </h1>
        <h1 className="text-4xl pl-8 font-extrabold text-white lg:text-5xl">
          <TypeWriterEffect
            startDelay={800}
            cursorColor="white"
            text="Jerald H. Regidor"
            typeSpeed={100}
            hideCursorAfterText={true}
          />
        </h1>
        <h1 className="text-3xl pl-8 font-thin text-white md:text-4xl">
          <TypeWriterEffect
            startDelay={2700}
            cursorColor="white"
            text="Software Engineer"
            typeSpeed={100}
          />
        </h1>
      </div>
      <button
        className="flex flex-col justify-center hover:scale-125 animate-pulse hover:animate-none focus:animate-none focus:scale-125 focus:invert "
        onClick={handleGitClick}
      >
        <FaGithub className="w-20 h-20 mr-2 fill-white hover:fill-black" />
      </button>
    </div>
  );
};

export default greeting;
