import styles from "../../styles/Home.module.scss";
import Card from "../Card";

const ProjectSection = () => {
  return (
    <section className={`section`}>
      <div className={`columns ${styles.about} is-flex-direction-column`}>
        <div className={"column"}>
          <h1 className={`title has-text-centered ${styles.heading}`}>
            Projects
          </h1>
        </div>

        <div className={"column"}>
          <div className={"columns"}>
            <div className={"column is-flex-direction-row"}>
              <div className={"columns"}>
                <Card />
                <Card />
                <Card />
              </div>
            </div>

            <div className={"column is-flex-direction-row"}>
              <div className={"columns"}>
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
