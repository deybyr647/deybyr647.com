import { mdiFileDocument } from "@mdi/js";
import Icon from "@mdi/react";
import AOS from "aos";
import Image from "next/image";
import { useEffect, useState } from "react";
import ResumeModal from "@/components/Modals/ResumeModal";
import headShot from "../../../public/images/deyby.png";
import { EmailIcon, FileIcon, GithubIcon, LinkedinIcon } from "../../Icons";
import styles from "./Header.module.scss";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [showResume, setShowResume] = useState(false); // State for the modal
  const toggleResume = () => setShowResume(!showResume);

  return (
    <section className={`section mx-5`} data-aos={"fade-up"}>
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
          <h1 className={`title has-text-centered ${styles.name}`}>
            Deyby Rodriguez
          </h1>
          <h2 className={`subtitle mt-2 has-text-centered`}>
            Full-Stack Software Engineer
          </h2>

          <div className={"block"}>
            <EmailIcon />
            <GithubIcon />
            <LinkedinIcon />

            <ResumeModal isActive={showResume} onClose={toggleResume} />

            <button
              onClick={(e) => {
                e.preventDefault();
                toggleResume();
              }}
              type={"button"}
            >
              <FileIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
