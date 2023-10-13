import React from "react";
import Introducing from "../components/homeComponents/Introducing";
import WhatAreWeDoing from "../components/homeComponents/WhatAreWeDoing";
import Risks from "../components/homeComponents/Risks";
import AuxSources from "../components/homeComponents/AuxSources";
import LatestNews from "./../components/homeComponents/LatestNews";
import QuickMenu from "../components/homeComponents/QuickMenu";

const Home = () => {
  return (
    <>
      <Introducing />
      <WhatAreWeDoing />
      <Risks />
      <AuxSources />
      <LatestNews />
      <QuickMenu />
    </>
  );
};
export default Home;
