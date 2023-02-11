import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import logo from "../../public/logo.png";

const AboutSection = () => {
  return (
    <section className={`section`}>
      <div className={`columns ${styles.about} has-background-white`}>
        <div className={`column my-5`}>
          <h1 className={`title has-text-centered ${styles.heading}`}>
            About Deyby
          </h1>
          <div className={"block"}>
            <p className={"p-3"}>
              Deyby is a Full-Stack Web Developer & Computer Science Educator
              based in New York City. He specializes in working with
              technologies, such as Node.js, Next.js, and Firebase.
            </p>
          </div>

          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>Current Role</h2>
            <p className={"p-3"}>
              Deyby is currently a Code Next Intern Coach at Google. Code Next
              is a program which focuses on preparing high school students for
              fruitful careers within the tech industry. Deyby assists in the
              development and facilitation of the program&apos;s curriculum, as
              well as in recruitment and advisement of students.
            </p>
          </div>

          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>Prior Experience</h2>
            <p className={"p-3"}>
              Deyby has previously served as a Computer Science Instructor at
              organizations such as All Star Code, Emerging Leaders in
              Technology and Engineering (ELiTE). He has developed and delivered
              curriculums in Full-Stack Web Development, Computer Science
              Fundamentals, and iOS Development.
            </p>
          </div>

          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>Education</h2>
            <p className={"p-3"}>
              Deyby is currently a 2nd year student at New York Institute of
              Technology (NYIT). He&apos;s working towards a B.S in Computer
              Science, with hopes of graduating in 2025.
            </p>
          </div>

          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>
              Looking Into The Future
            </h2>
            <p className={"p-3"}>
              Deyby will be working at Prudential Financial as a Software
              Engineering Intern in Summer 2023. His end goal is to achieve a
              full-time role within the Financial Technology industry.
            </p>
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default AboutSection;
