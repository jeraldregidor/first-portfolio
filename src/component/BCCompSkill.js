import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { motion } from "framer-motion";

const fronts = [
  {
    logo: <FaHtml5 className="mr-1 w-10 h-10" />,
    title: "HTML",
  },
  {
    logo: <FaCss3Alt className="mr-1 w-10 h-10" />,
    title: "CSS",
  },
  {
    logo: <FaJsSquare className="mr-1 w-10 h-10" />,
    title: "JavaScript",
  },
  {
    logo: (
      <div className="mr-1 w-10 h-10 invert">
        <img src={process.env.PUBLIC_URL + "/images/tailwind.png"} />
      </div>
    ),
    title: "Tailwind",
  },
  {
    logo: <FaReact className="mr-1 w-10 h-10" />,
    title: "React",
  },
  {
    logo: (
      <div className="mr-1 w-10 h-10 ">
        <img src={process.env.PUBLIC_URL + "/logo.svg"} />
      </div>
    ),
    title: "Redux",
  },
];

const backs = [
  {
    logo: <FaJava className="mr-1 w-10 h-10" />,
    title: "CoreJava",
  },
  {
    logo: (
      <div>
        <div className="flex w-10 h-10 items-center justify-center relative box-border">
          <div className="rotate-90 mr-0.5 text-center text-5xl">&#11041;</div>
          <FaPowerOff className="self-center mr-2 w-5 h-auto absolute" />
        </div>
      </div>
    ),
    title: "SpringBoot",
  },
];

const dBases = [
  {
    logo: (
      <div className="mr-1 w-10 h-10 invert">
        <img src={process.env.PUBLIC_URL + "/images/mysqllogo.png"} />
      </div>
    ),
    title: "MySQL",
  },
  {
    logo: (
      <div className="mr-1 w-10 h-10 invert">
        <img src={process.env.PUBLIC_URL + "/images/postgreslogo.png"} />
      </div>
    ),
    title: "PostgreSQL",
  },
  {
    logo: (
      <div className="mr-1 w-10 h-10 invert flex items-center">
        <img  src={process.env.PUBLIC_URL + "/images/oraclelogo.png"} />
      </div>
    ),
    title: "Oracle",
  },
];

const skillSections = [
  {
    sec: "Frontend",
    contents: fronts,
  },
  {
    sec: "Backend",
    contents: backs,
  },
  {
    sec: "Database",
    contents: dBases,
  },
];

const BCCompSkill = (props) => {
  const handleClickCancel = () => props.defaultDisplay();
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "bounce", stiffness: 30, duration: 1 }}
      className="flex w-full h-full flex-wrap items-center rounded-3xl bg-slate-700 bg-opacity-50 overflow-auto p-2"
    >
      <button
        onClick={handleClickCancel}
        className="absolute top-6 right-6 bg-red-500 w-6 rounded-full font-bold ring-1 ring-black hover:scale-125"
      >
        X
      </button>
      <div className="w-full h-full grid grid-cols-1 grid-rows-[1fr_1fr_1fr_1fr] gap-2 my-1 text-lg text-white lg:text-2xl text-left">
        {skillSections.map((skSection) => (
          <section
            className="bg-slate-700 bg-opacity-50 rounded-md"
            key={skSection.sec}
          >
            <div className="mt-2 ml-5 font-bold">{skSection.sec}</div>
            <div className="flex flex-wrap justify-center m-auto">
              <div className="flex-row sm:flex flex-wrap my-3">
                {skSection.contents.map((cont, index) => (
                  <div
                    className="flex items-center text-md mx-3 my-1"
                    key={index}
                  >
                    <div>{cont.logo}</div>
                    <div>{cont.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="bg-slate-700 bg-opacity-50 flex-row rounded-md">
          <div className="font-bold mt-2 ml-5 text-lg md:text-2xl">
            Other Tools
          </div>
          <ul className="text-sm list-disc ml-10">
            <li>
              Testing Tools (e.g. JUnit, Jacoco, Karate, k6)
            </li>
            <li>Monitoring Tool (e.g. Grafana Dashboard, Elastic)</li>
            <li>
              Containerization and Deployment (Azure Pipelines, Docker, Kubernetes, Openshift)
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default BCCompSkill;
