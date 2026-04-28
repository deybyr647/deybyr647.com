import type { NextPage } from "next";
import ProjectContainer from "@/components/Projects/ProjectContainer";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";
import Navigation from "../components/Navigation";
import About from "../components/PageSections/About";
import Education from "../components/PageSections/Experience";
import Header from "../components/PageSections/Header";

const Home: NextPage = () => {
  return (
    <>
      <Metadata />
      <Navigation />
      <Header />
      <About />
      <Education />
      <ProjectContainer />
      <Footer />
    </>
  );
};

export default Home;
