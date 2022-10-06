import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';

const greeting = () => {
  return (
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
  );
};

export default greeting;
