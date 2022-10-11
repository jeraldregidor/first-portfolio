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
      "A porfolio develop using ReactJS framework.",
      "Flexible design that enables the webpage to adapt in different screen size.",
      "3D loading page.",
    ],
  },
  {
    title: "Client Register Validation Example",
    imageLink:
      process.env.PUBLIC_URL +
      "/images/CreatedProjectsTN/RegisterExampleTN.PNG",
    url: "https://jeraldregidor.github.io/ClientRegisterExample/",
    descriptions: [
      "Registration validation develop with react redux",
      "Live error message every key pressed",
      "Disabled submit button if the requirements were not met.",
    ],
  },
  {
    title:
      "Automobile Insurance Policy and Claims Administration System (PAS) Specification Server",
    imageLink: process.env.PUBLIC_URL + "/images/CreatedProjectsTN/PasTN.PNG",
    url: "https://github.com/jeraldregidor/pas-repository",
    descriptions: [
      "Server develop using Spring Framework",
      "Spring security with JWT token for login authentication and authorization",
      "Database(MySQL) design for detailed RestAPI response and to prevent redundant data .",
    ],
  },
  {
    title: "The Fastest Finger Game (Client)",
    imageLink:
      process.env.PUBLIC_URL +
      "/images/CreatedProjectsTN/TheFastestFingerTN.PNG",
    url: "https://github.com/jeraldregidor/FastestFingerGame",
    descriptions: [
      "Game develop using react-redux",
      "Fetching/saving RestAPI data from database(MySQL) using axios.",
      "Handled backend to frontend connection problem.",
    ],
  },
  {
    title: "The Fastest Finger Game (Server)",
    imageLink:
      process.env.PUBLIC_URL +
      "/images/CreatedProjectsTN/TheFastestFingerServer.PNG",
    url: "https://github.com/jeraldregidor/FastestFingerGameServer",
    descriptions: [
      "Simple Server develop using SpringBoot",
      "RestAPI response",
      "Business logic for data keeping only",
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
            <div className="bg-slate-800 w-full grid grid-cols-1 md:grid-cols-3 gap-2 p-2 my-1.5 rounded-md my-4">
              <div className="bg-slate-600 w-full col-span-2 md:col-span-3 p-2">
                <div className="text-white font-bold">{project.title}</div>
              </div>
              <img
                src={project.imageLink}
                alt=""
                className="h-full row-span-4 md:p-2"
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
                  <div className="italic">Link</div>
                </div>
              </a>
            </div>
          ))}
          {/**################################################################################################################ */}
        </section>
      </div>
    </motion.div>
  );
};

export default BCGitDetails;
