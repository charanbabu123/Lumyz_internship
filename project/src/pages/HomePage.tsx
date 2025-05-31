import React from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Industries } from "../components/Industries";
import { Blog } from "../components/Blog";
import { Contact } from "../components/Contact";

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Industries />
      <Blog />
      <Contact />
    </>
  );
};
