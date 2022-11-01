import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import styles from "../styles/components/Navigation.module.scss";

const Navigation = () => {
  return (
    <nav
      className={"navbar has-background-purple"}
      role={"navigation"}
      aria-label={"main navigation"}
    >
      <div className={"navbar-brand is-flex is-align-items-center"}>
        <Link href={"/"}>
          <figure className={`image is-48x48 ${styles.logo}`}>
            <Image src={logo} alt={"Deyby Rodriguez Logo"} />
          </figure>
        </Link>

        <a
          role={"button"}
          className={"navbar-burger"}
          aria-label={"menu"}
          aria-expanded={"false"}
          data-target={"navbarBasicExample"}
        >
          <span aria-hidden={"true"}></span>
          <span aria-hidden={"true"}></span>
          <span aria-hidden={"true"}></span>
        </a>
      </div>

      <div id={"navbarBasicExample"} className={"navbar-menu"}>
        <div className={"navbar-end"}>
          <a className={"navbar-item has-text-white"}>Home</a>
          <a className={"navbar-item has-text-white"}>Documentation</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
