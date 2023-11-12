import React from "react";
import AboutInitiative from "./../components/aboutUsComponents/AboutInitiative";
import InitiativeGoals from "../components/aboutUsComponents/InitiativeGoals";
import InitiativeMechanisms from "../components/aboutUsComponents/InitiativeMechanisms";
import Partners from "../components/aboutUsComponents/Partners";
import Activities from "../components/aboutUsComponents/Activities";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="bg-slate-50 py-10 pb-20 rounded-b-full text-blue-800 text-xl  font-semibold w-full text-center">
          عن المبادرة
        </h2>

        <AboutInitiative />
        <InitiativeGoals />
        <InitiativeMechanisms />
        <Partners />
        <Activities />
      </div>
    </>
  );
};

export default AboutUs;
