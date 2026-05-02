import Image from "next/image";
import deybyImage from "../../../public/images/headshots/deyby-portrait-2.jpg";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id={"about"} className={`section mx-5`}>
      <div className={`columns ${styles.about} has-background-white`}>
        <div className={`column my-5`}>
          <h2 className={`title is-4 has-text-centered`}>About Deyby</h2>
          <div className={"block"}>
            <p className={"p-5"}>
              Deyby is a Full-Stack Software Engineer & Computer Science
              Educator based in New York City. He specializes in working with
              web-based technologies, such as Next.js, TypeScript, and Firebase.
            </p>
          </div>

          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>
              Looking Into The Future
            </h2>
            <p className={"p-5"}>
              Deyby&apos;s end goal is to achieve a Technical Project Manager
              style role, where he has the opportunity to both lead a team and
              interact with end-users first hand, while still being able to dive
              into code with his team.
            </p>
          </div>

          <div className={"block"}>
            <h2 className={"title is-4 has-text-centered"}>
              Outside The Office
            </h2>
            <p className={"p-5"}>
              Technology aside, Deyby enjoys hobbies such as powerlifting and
              photography. His best lifts include a 501.5lb/227.5kg Squat, a
              242.5lb/110kg Bench Press, and a 518lb/235kg Conventional
              Deadlift, which result in a 1261.5lb/572.2kg lifting total. When
              it comes to photography, he shoots on a Lumix G100, focusing on
              street photography, nature photography, and portraiture.
            </p>
          </div>
        </div>

        <div
          className={`column is-flex is-flex-direction-column is-justify-content-center my-5`}
        >
          <figure className={`image ${styles.logo}`}>
            <Image
              src={deybyImage}
              alt={"Deyby Rodriguez Logo"}
              className={`is-rounded`}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
