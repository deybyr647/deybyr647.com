import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import headShot from "../public/images/deyby.jpg";

const Home: NextPage = () => {
  return (
    <>
      <section className={`section`}>
        <div className={`columns ${styles.container}`}>
          <div className={`column ${styles.container}`}>
            <figure className={`image ${styles.headshot}`}>
              <Image
                src={headShot}
                alt={"Deyby Rodriguez"}
                className={`is-rounded`}
              />
            </figure>
          </div>

          <div className={`column ${styles.container}`}>
            <h1 className={`title ${styles.name}`}>Deyby Rodriguez</h1>
            <h2 className={`subtitle ${styles.heading}`}>
              Full-Stack Web Developer
            </h2>
          </div>
        </div>
      </section>

      <section className={`section`}>
        <div className={`columns ${styles.container}`}>
          <div className={`column ${styles.container}`}>
            <h1 className={`title ${styles.name}`}>About Me</h1>
          </div>

          <div className={`column ${styles.container}`}>
            <figure className={`image ${styles.headshot}`}>
              <Image
                src={headShot}
                alt={"Deyby Rodriguez"}
                className={`is-rounded`}
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
