import { useState } from "react";

import BigCard from "./component/BigCard";
import Card from "./component/Card";
import Greeting from "./component/Greeting";
import BCCompPic from "./component/BCCompPic";
import BCCompPerson from "./component/BCCompPerson";
import BCCompEduc from "./component/BCCompEduc";
import BCCompExp from "./component/BCCompExp";
import BCCompSkill from "./component/BCCompSkill";

import { FaUser } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import CardCube from "./component/CardCube";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const defaultBC = <BCCompPic />;
  const [dispComponent, setDispComponent] = useState(defaultBC);
  const labels = [
    {
      name: "Personal and Contact Details",
      logo: <FaUser size={85} />,
      component: (
        <BCCompPerson defaultDisplay={() => setDispComponent(defaultBC)} />
      ),
    },
    {
      name: "Educational Background",
      logo: <FaGraduationCap size={85} />,
      component: (
        <BCCompEduc defaultDisplay={() => setDispComponent(defaultBC)} />
      ),
    },
    {
      name: "Skills",
      logo: <FaBrain size={85} />,
      component: (
        <BCCompSkill defaultDisplay={() => setDispComponent(defaultBC)} />
      ),
    },
    {
      name: "Work Experience",
      logo: <FaCogs size={85} />,
      component: (
        <BCCompExp defaultDisplay={() => setDispComponent(defaultBC)} />
      ),
    },
  ];

  const [isLoading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false); // TODO: Set it to false
  }, 6000);

  return (
    <div>
      {isLoading ? (
        <div className="flex-row justify-center items-center text-center text-white font text-2xl h-screen">
          <div className="">
            <CardCube />
          </div>
        </div>
      ) : (
        <div className="h-screen w-auto m-2 grid gap-2 grid-rows-[minmax(180px,auto)_1fr_90px] md:grid-cols-2 md:grid-template-rows-none">
          <section className="flex flex-wrap min-h-1/2">
            <Greeting />
          </section>
          <section className="row-span-2 md:mt-20 md:mr-10 relative overflow-x-hidden">
            <BigCard comp={dispComponent} />
          </section>
          <section className=" h-auto w-full flex items-center justify-center mb-2">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-4 md:grid-cols-2 w-full md:w-96 md:gap-5">
                  {labels.map((item) => (
                    <Card
                      key={item.name}
                      logo={item.logo}
                      name={item.name}
                      noAction={() => setDispComponent()}
                      clickDisplay={() => setDispComponent(item.component)}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
