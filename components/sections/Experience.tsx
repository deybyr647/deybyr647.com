import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import logo from "../../public/logo.png";

const ExperienceSection = () => {
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
              Deyby is currently a{" "}
              <a
                href={"https://codenext.withgoogle.com/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Code Next
              </a>{" "}
              Intern Coach at Google.{" "}
              <a
                href={"https://codenext.withgoogle.com/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Code Next
              </a>{" "}
              is a program which focuses on preparing high school students for
              fruitful careers within the tech industry. Deyby assists in the
              development and facilitation of the program&apos;s curriculum, as
              well as in recruitment and advisement of students.
            </p>
          </div>
          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>Experience</h2>
            <p className={paragraphPadding}>
              Deyby has previously served as a Computer Science Instructor at
              organizations such as{" "}
              <a
                href={"http://allstarcode.org"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                All Star Code
              </a>{" "}
              and{" "}
              <a
                href={"http://www.elite-education.org/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Emerging Leaders in Technology and Engineering (ELiTE)
              </a>
              . He has developed and delivered curriculums in Full-Stack Web
              Development, Computer Science Fundamentals, and iOS Development.
            </p>
          </div>

          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>Education</h2>
            <p className={paragraphPadding}>
              Deyby is currently a 3rd year student at{" "}
              <a
                href={"https://hunter.cuny.edu/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                CUNY Hunter College
              </a>
              . He&apos;s working towards a B.A degree in Computer Science, with
              an expected graduation in Spring of 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
