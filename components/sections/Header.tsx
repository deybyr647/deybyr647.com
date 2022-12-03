import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import headShot from "../../public/images/deyby.jpg";

const HeaderSection = () => {
  return (
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

        <div
          className={`column is-flex is-flex-direction-column is-justify-content-center`}
        >
          <h1 className={`title ${styles.name}`}>Deyby Rodriguez</h1>
          <h2 className={`subtitle ${styles.heading}`}>
            Full-Stack Web Developer
          </h2>

          <div className={"block"}>{/*<!-- Icons Go Here -->*/}</div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
