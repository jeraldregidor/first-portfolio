import React from "react";
import { motion } from "framer-motion";

const BCGitDetails = (props) => {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "bounce", stiffness: 30, duration: 1 }}
      className="flex w-full h-full flex-wrap items-center rounded-3xl bg-slate-700 bg-opacity-50 overflow-auto p-2"
    >
      <div>
        <button
          onClick={() => props.defaultDisplay()}
          className="absolute top-6 right-6 bg-red-500 w-6 rounded-full font-bold ring-1 ring-black hover:scale-125"
        >
          X
        </button>
        <section className="bg-slate-700 bg-opacity-50 rounded-md">
          <div className="flex flex-wrap justify-center m-auto">
            <div className="flex-row sm:flex flex-wrap my-3 text-white">
              asdasd
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default BCGitDetails;
