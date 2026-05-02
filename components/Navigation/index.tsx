import Image from "next/image";
import Link from "next/link";
import { type MouseEvent, useState } from "react";
import logo from "../../public/images/branding/logo.png";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const [activeStatus, setActiveStatus] = useState(false);

  const showNavbar = (_e: MouseEvent<HTMLButtonElement>): void => {
    setActiveStatus(!activeStatus);
  };

  return (
    <nav className={`navbar ${styles.navbar}`} aria-label={"main navigation"}>
      <div className={"navbar-brand is-flex is-align-items-center"}>
        <Link href={"/public"}>
          <figure className={`image is-48x48 ${styles.logo}`}>
            <Image src={logo} alt={"Deyby Rodriguez Logo"} />
          </figure>
        </Link>

        <button
          type={"button"}
          className={
            activeStatus
              ? `is-active navbar-burger ${styles.navbarBurger}`
              : `navbar-burger ${styles.navbarBurger}`
          }
          aria-label={"menu"}
          aria-expanded={"false"}
          data-target={"navbarBasicExample"}
          onClick={showNavbar}
        >
          <span aria-hidden={"true"}></span>
          <span aria-hidden={"true"}></span>
          <span aria-hidden={"true"}></span>
          <span aria-hidden={"true"}></span>
        </button>
      </div>

      <div
        className={
          activeStatus
            ? `is-active navbar-menu ${styles.navbarMenu}`
            : "navbar-menu"
        }
      >
        <div className={"navbar-end has-text-centered"}>
          <Link
            className={`navbar-item has-text-white ${styles.navbarItem}`}
            href={"#about"}
          >
            About
          </Link>

          <Link
            className={`navbar-item has-text-white ${styles.navbarItem}`}
            href={"/Deyby%20Rodriguez%20-%20Resume.pdf"}
            target={"_blank"}
            rel={"noreferrer noopener"}
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
