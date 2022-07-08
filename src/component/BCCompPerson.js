import React, { useState } from "react";
import { FaClipboardCheck, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const BCCompPerson = (props) => {
  const emailDefault = (
    <div className="flex flex-wrap items-center hover:text-red-500 hover:underline underline-offset-8">
      <FaEnvelope className="w-9 h-auto md:w-20 md:h-auto mr-3" />
      <div className="text-white">jeraldregidor1997@gmail.com</div>
    </div>
  );

  const emailCopyConfirm = (<div className="flex flex-wrap items-center italic text-green-500 items-center">
    <FaClipboardCheck className="w-9 h-auto md:w-20 md:h-auto mr-3 "/>
    <div>Email Copied</div>
    </div>);

  const [emailSection, setEmailSection] = useState(emailDefault);

  const handleClickCancel = () => props.defaultDisplay();
  const handleEmailClick = () => {
    navigator.clipboard.writeText("jeraldregidor1997@gmail.com");
    setEmailSection(emailCopyConfirm);
    setTimeout(() => {
      setEmailSection(emailDefault);
    }, 1000);
      
  };

  return (
    <div className="flex w-full h-full flex-wrap items-center px-10  rounded-3xl bg-slate-700 bg-opacity-50 overflow-auto">
      <button
        onClick={handleClickCancel}
        className="absolute top-6 right-6 bg-red-500 w-6 rounded-full font-bold ring-1 ring-black hover:scale-125"
      >
        X
      </button>
      <div className="w-fit m-auto grid grid-cols-1 gap-10 md:gap-20 text-xl text-white lg:text-3xl">
        <a
          href="https://goo.gl/maps/W6B4ogcyaNdbHSKZ9"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110"
        >
          <div className="flex flex-row items-center flex-wrap hover:text-green-500 hover:underline underline-offset-8">
            <FaMapMarkerAlt className="w-9 h-auto md:w-20 md:h-20 mr-2" />
            <div className="text-white">Mamatid, Cabuyao, Laguna</div>
          </div>
        </a>
        <button
          onClick={handleEmailClick}
          className="flex flex-row items-center flex-wrap mr-1 hover:scale-110"
        >
          {emailSection}
        </button>
        <a
          href="https://www.linkedin.com/in/jerald-regidor-614326223/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 hover:text-blue-500 hover:underline underline-offset-8"
        >
          <div className="flex flex-row items-center flex-wrap">
            <FaLinkedin className="w-9 h-auto md:w-20 md:h-auto mr-2" />
            <div className="text-white">LinkedIn - Jerald H. Regidor</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BCCompPerson;
