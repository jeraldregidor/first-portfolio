import React from "react";

const BCCompEduc = (props) => {
  const handleClickCancel = () => props.defaultDisplay();
  return (
    <div className="flex w-full h-full flex-wrap items-center justify-center px-10  rounded-3xl bg-slate-700 bg-opacity-50 overflow-auto">
      <button
        onClick={handleClickCancel}
        className="absolute top-6 right-6 bg-red-500 w-6 rounded-full font-bold ring-1 ring-black hover:scale-125"
      >
        X
      </button>
      <div className="flex flex-wrap items-center justify-center text-xl text-white lg:text-3xl text-center">
        <img className="w-64  h-auto" src="./images/pnclogo.png" alt=""/>
        <div className="font-bold">Pamantasan ng Cabuyao</div>
        <div className="italic pt-5">Bachelor of Science in Electronics Engineering</div>
      </div>
    </div>
  );
};

export default BCCompEduc;
