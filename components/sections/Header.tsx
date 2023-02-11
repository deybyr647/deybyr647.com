import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import headShot from "../../public/images/deyby.jpg";
import { EmailIcon, GithubIcon, LinkedinIcon, ResumeIcon } from "../Icons";

const HeaderSection = () => {
  return (
    <section className={`section`}>
      <div className={`columns ${styles.intro} has-background-white`}>
        <div className={`column my-5`}>
          <figure className={`image ${styles.headshot}`}>
            <Image
              src={headShot}
              alt={"Deyby Rodriguez"}
              className={`is-rounded`}
            />
          </figure>
        </div>

        <div
          className={`column is-flex is-flex-direction-column is-justify-content-center is-align-items-center`}
        >
          <h1 className={`title ${styles.name}`}>Deyby Rodriguez</h1>
          <h2 className={`subtitle ${styles.heading}`}>
            Full-Stack Web Developer
          </h2>

          <div className={"block"}>
            <a
              href={"https://www.linkedin.com/in/deyby-rodriguez/"}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              <EmailIcon />
            </a>
            <a
              href={"https://www.github.com/deybyr647"}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              <GithubIcon />
            </a>
            <a
              href={"https://www.linkedin.com/in/deyby-rodriguez/"}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              <LinkedinIcon />
            </a>
            <a
              href={"/Resume.pdf"}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              <ResumeIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
