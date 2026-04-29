import Image from "next/image";
import logo from "../../../public/logo.png";
import styles from "./Experience.module.scss";

const Experience = () => {
  const paragraphPadding: string = "p-5";

  return (
    <section className={`section mx-5`}>
      <div className={`columns ${styles.education} has-background-white`}>
        <div
          className={`column is-flex is-flex-direction-column is-justify-content-center my-5`}
        >
          <figure className={`image ${styles.logo}`}>
            <Image
              src={logo}
              alt={"Deyby Rodriguez Logo"}
              className={`is-rounded`}
            />
          </figure>
        </div>

        <div className={`column my-5`}>
          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>Current Role</h2>
            <p className={paragraphPadding}>
              As of July 2026, Deyby works full time as a Software Engineer at{" "}
              <a
                href={"https://www.prudential.com/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Prudential Financial
              </a>
              {". "}
              Prior to joining full time, Deyby was a 3x Software Engineering
              Intern at{" "}
              <a
                href={"https://www.prudential.com/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Pru
              </a>
              {", "}
              working on projects focusing on Data Analytics, Cybersecurity, and
              Back-End Development over the summers of 2023, 2024, and 2025,
              respectively.
            </p>
          </div>
          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>Experience</h2>
            <p className={paragraphPadding}>
              Deyby has previously served as a Computer Science Instructor at
              organizations such as{" "}
              <a
                href={"https://codenext.withgoogle.com/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Google Code Next
              </a>
              {", "}
              <a
                href={"https://allstarcode.org"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                All Star Code
              </a>{" "}
              and{" "}
              <a
                href={"https://www.elite-education.org/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Emerging Leaders in Technology and Engineering (ELiTE)
              </a>
              . He has developed and delivered curriculums in Full-Stack Web
              Development, Computer Science Fundamentals, iOS Development and
              Deep Learning with Python.
            </p>
          </div>

          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>Education</h2>
            <p className={paragraphPadding}>
              Deyby graduated from{" "}
              <a
                href={"https://hunter.cuny.edu/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                CUNY Hunter College
              </a>{" "}
              with a B.A in Computer Science in Spring 2026. He is planning to
              pursue a Master&apos;s in Business Administration in the near
              future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
