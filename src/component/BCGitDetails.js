import React from "react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

const projects = [
  {
    title: "My First PortFolio",
    imageLink:
      process.env.PUBLIC_URL +
      "/images/CreatedProjectsTN/MyFirstPortfolioTN.PNG",
    url: "https://jeraldregidor.github.io/first-portfolio/",
    descriptions: [
      "A porfolio created using ReactJS framework.",
      "Flexible design that enables the webpage to adapt in different screen size.",
      "3D loading page.",
    ],
  },
];

const BCGitDetails = (props) => {
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "bounce", stiffness: 30, duration: 1 }}
      className="flex w-full h-full flex-wrap items-center rounded-3xl bg-slate-700 bg-opacity-50 overflow-auto"
    >
      <div className="w-full">
        <div className="text-2xl p-3 font-bold text-white mb-2 sticky top-0 bg-slate-500">
          Created Projects
        </div>
        <button
          onClick={() => props.defaultDisplay()}
          className="absolute top-6 right-6 bg-red-500 w-6 rounded-full font-bold ring-1 ring-black hover:scale-125 index-10"
        >
          X
        </button>

        <section className="bg-opacity-50 rounded-md mx-2">
          {/* ***************************************************** */}
          {projects.map((project) => (
            <div className="bg-slate-800 w-full grid grid-cols-3 gap-2 p-2 my-1.5 rounded-md my-4">
              <div className="bg-slate-600 w-full col-span-3 p-2">
                <div className="text-white font-bold">{project.title}</div>
              </div>
              {/* <div className="bg-green-200 w-full row-span-4 p-2">Image here</div> */}
              <img
                src={project.imageLink}
                alt=""
                className="h-full row-span-4 p-2"
              />
              <div className="bg-slate-700 w-full col-span-2 row-span-3 p-2 text-slate-200">
                <ul className="ml-5 list-disc">
                  {project.descriptions.map((description) => (
                    <li>{description}</li>
                  ))}
                </ul>
              </div>
              <a
                className="bg-slate-700 w-full col-span-2 p-2"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="text-white hover:scale-110 hover:text-blue-400 flex text-wrap items-center justify-center">
                  <FaLink className="mx-2" />
                  <div className="italic">Page link</div>
                </div>
              </a>
            </div>
          ))}
          {/**################################################################################################################ */}

          {/****************************************************** */}

          {/* <div className="bg-slate-800 w-full grid grid-cols-3 gap-2 p-2 my-1.5 rounded-md my-4">
            <div className="bg-slate-600 w-full col-span-3 p-2">
              <div className="text-white font-bold">My First Portfolio</div>
            </div>
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/CreatedProjectsTN/MyFirstPortfolioTN.PNG"
              }
              alt=""
              className="h-full row-span-4 p-2"
            />
            <div className="bg-slate-700 w-full col-span-2 row-span-3 p-2 text-slate-200">
              <ul className="ml-5 list-disc">
                <li>A porfolio created using ReactJS framework.</li>
                <li>
                  Flexible design that enables the webpage to adapt in different
                  screen size.
                </li>
                <li>3D loading page.</li>
              </ul>
            </div>
            <a
              className="bg-slate-700 w-full col-span-2 p-2"
              href="https://jeraldregidor.github.io/first-portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-white hover:scale-110 hover:text-blue-400 flex text-wrap items-center justify-center">
                <FaLink className="mx-2" />
                <div className="italic">Page link</div>
              </div>
            </a>
          </div> */}

          {/**################################################################################################################ */}
        </section>
      </div>
    </motion.div>
  );
};

export default BCGitDetails;
