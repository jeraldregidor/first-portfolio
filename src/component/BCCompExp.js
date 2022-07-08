import React from "react";

const experiences = [
  {
    company: "Norima Technologies Inc.",
    logoSrc: "./images/norimalogo.jpg",
    role: "Software Engineer",
    duration: "May 2022 up to current",
  },
  {
    company: "Furukawa Electric Autoparts Phil. Inc.",
    logoSrc: "./images/furukawalogo.png",
    role: "Process Engineer",
    duration: "May 2019 to April 2022",
  },
];

const BCCompExp = (props) => {
  const handleClickCancel = () => props.defaultDisplay();
  return (
    <div className="flex w-full h-full flex-wrap items-center rounded-3xl bg-slate-700 bg-opacity-50 overflow-auto">
      <button
        onClick={handleClickCancel}
        className="absolute top-6 right-6 bg-red-500 w-6 rounded-full font-bold ring-1 ring-black hover:scale-125"
      >
        X
      </button>
      <div className="flex-row flex-wrap text-lg text-white lg:text-2xl text-left m-auto">
        {experiences.map((exp) => (
          <div className="flex p-6 items-center" key={exp.company}>
            <img
              className="w-20 h-20 md:w-32 md:h-32 mr-2 ring-1 ring-black"
              src={exp.logoSrc}
              alt=""
            />
            <div>
              <div className="font-bold">{exp.company}</div>
              <div>{exp.role}</div>
              <div>{exp.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BCCompExp;
