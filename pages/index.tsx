import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import headShot from "../public/images/deyby.jpg";
import logo from "../public/logo.png";
import Navigation from "../components/Navigation";
import Metadata from "../components/Metadata";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Metadata />
      <Navigation />

      <section className={`section`}>
        <div className={`columns ${styles.intro}`}>
          <div className={`column`}>
            <figure className={`image ${styles.headshot}`}>
              <Image
                src={headShot}
                alt={"Deyby Rodriguez"}
                className={`is-rounded`}
              />
            </figure>
          </div>

          <div className={`column`}>
            <h1 className={`title ${styles.name}`}>Deyby Rodriguez</h1>
            <h2 className={`subtitle ${styles.heading}`}>
              Full-Stack Web Developer
            </h2>
          </div>
        </div>
      </section>

      <section className={`section`}>
        <div className={`columns ${styles.about}`}>
          <div className={`column`}>
            <h1 className={`title ${styles.heading}`}>About Me</h1>
          </div>

          <div className={`column`}>
            <figure className={`image ${styles.logo}`}>
              <Image
                src={logo}
                alt={"Deyby Rodriguez Logo"}
                className={`is-rounded`}
              />
            </figure>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
