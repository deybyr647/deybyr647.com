import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Metadata from "../components/Metadata";
import Footer from "../components/Footer";
import AboutSection from "../components/sections/About";
import ProjectSection from "../components/sections/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Metadata />
      <Navigation />
      <AboutSection />
      <ProjectSection />
      <Footer />
    </>
  );
};

export default Home;
