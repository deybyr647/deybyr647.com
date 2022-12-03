import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import logo from "../../public/logo.png";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
