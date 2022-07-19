import React from "react";
import { motion } from "framer-motion";

const BCCompPic = () => {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "bounce", stiffness: 30, duration: 1 }}
      className="  bg-slate-100 flex items-center justify-center absolute top-0 bottom-0 right-0 left-0 rounded-lg ring-2 ring-black bg-opacity-60"
    >
      <img
        src={process.env.PUBLIC_URL + "/images/JeraldPicNoBG.png"}
        alt=""
        className="max-h-full min-w-auto"
      />
    </motion.div>
  );
};

export default BCCompPic;
