import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import logo from "../../public/logo.png";

const AboutSection = () => {
  return (
    <section className={`section`}>
      <div className={`columns ${styles.about}`}>
        <div className={`column`}>
          <h1 className={`title has-text-centered ${styles.heading}`}>
            About Me
          </h1>

          <div className={"block"}>
            <p>
              Hi, I&apos;m Deyby. I&apos;m a Full-Stack Web Developer based in
              New York City. I&apos;m currently a 2nd year undergraduate student
              at New York Institute of Technology, with hopes of graduating in
              2025 with a major in Computer Science and a minor in Business.
              I&apos;m always looking for opportunities to learn new
              technologies and improve my skills. Whether it be a learning
              opportunity, a side project, or an internship, I&apos;m all for
              it.
              <br />
              <br />
              As previously mentioned, I&apos;m very passionate about all things
              web. I love working with technologies such as TypeScript, Next.js,
              Node.js, and Firebase. Web-Dev aside, my background also mainly
              revolves around Computer Science Education. I&apos;ve been
              involved within a variety of organizations that focus on educating
              high school students on the fundamentals of Computer Science and
              Entrepreneurship. I&apos;ve had the pleasure of working with a
              multitude of students at organizations such as All Star Code,
              ELiTE, and Code Next at Google.
              <br />
              <br />
              Currently, I&apos;m interning at Google as a Code Next Site
              Coordinator. Code Next is a program which focuses on preparing
              high school students for fruitful careers within the tech
              industry. I assist in the development and facilitation of the
              program&apos;s curriculum, as well as the recruitment of students.
              I&apos;m also super excited for the Summer of 2023, as I&apos;ll
              be taking on a Software Engineering internship at Prudential
              Financial. I can&apos; wait to make more connections and learn
              more about the industry!
            </p>
          </div>
        </div>

        <div
          className={`column is-flex is-flex-direction-column is-justify-content-center`}
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
