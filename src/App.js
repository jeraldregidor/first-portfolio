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

  return (
    <div className="h-screen w-auto m-2 grid gap-2 grid-rows-[auto_1fr_90px] md:grid-cols-2 md:grid-template-rows-none">
      <section className="flex flex-wrap h-fit">
        <Greeting />
      </section>
      <section className="row-span-2 md:mt-20 md:mr-10 relative">
        <BigCard comp={dispComponent} />
      </section>
      <section className=" h-auto w-full flex items-center justify-center mb-2">
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
      </section>
    </div>
  );
}

export default App;
