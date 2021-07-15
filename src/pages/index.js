import React, { useState } from "react";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/data";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import SideBar from "../components/SideBar";
import HeroSection from "../components/ZeroSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Service id="service" />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
