import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "ING Hubs Philippines",
    logoSrc: "/images/inglogo.png",
    role: "Software Engineer",
    duration: "January 2023 up to current",
  },
  {
    company: "Norima Technologies Inc.",
    logoSrc: "/images/norimalogo.jpg",
    role: "Software Engineer",
    duration: "May 2022 to January 2023",
  },
  {
    company: "Furukawa Electric Autoparts Phil. Inc.",
    logoSrc: "/images/furukawalogo.png",
    role: "Process Engineer",
    duration: "May 2019 to April 2022",
  },
];

const BCCompExp = (props) => {
  const handleClickCancel = () => props.defaultDisplay();
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "bounce", stiffness: 30, duration: 1 }}
      className="flex w-full h-full flex-wrap items-center rounded-3xl bg-slate-700 bg-opacity-50 overflow-auto"
    >
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
              src={process.env.PUBLIC_URL + exp.logoSrc}
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
    </motion.div>
  );
};

export default BCCompExp;
