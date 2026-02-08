import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Metadata from "../components/Metadata";
import Footer from "../components/Footer";
import About from "../components/PageSections/About";
import ProjectSection from "../components/PageSections/projects/Projects";
import Header from "../components/PageSections/Header";
import Education from "../components/PageSections/Experience";

const Home: NextPage = () => {
  return (
    <>
      <Metadata />
      <Navigation />
      <Header />
      <About />
      <Education />
      <Footer />
    </>
  );
};

export default Home;
