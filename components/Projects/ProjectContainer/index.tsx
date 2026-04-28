import { useEffect, useRef } from "react";

import ProjectCard from "@/components/Projects/ProjectCard";
import projects from "@/public/projects.json";
import styles from "./ProjectContainer.module.scss";

const ProjectContainer = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // If we've reached the end, reset to the beginning
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by one "page" width or a fixed amount
          scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    }, 3000); // Scrolls every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={"section mx-5"}>
      <div className={`columns has-background-white ${styles.container}`}>
        <div className={"container my-5"}>
          <h2 className={"title is-3 has-text-centered mb-6"}>Past Projects</h2>
          <div className={styles.projectContainer} ref={scrollRef}>
            {projects.map((p, index) => (
              <ProjectCard
                key={Math.floor(Math.random() * index)}
                name={p.name}
                description={p.description}
                tags={p.tags}
                image={p.image}
                link={p.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
