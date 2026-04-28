import Image from "next/image";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({
  name,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) => {
  return (
    <div key={name} className={`card ${styles.projectCard} has-text-black`}>
      <div className="card-image">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <figure className="image is-16by9">
            <Image
              src={image || "https://www.deybyr647.com/logo.png"}
              alt={name}
              fill
              style={{ objectFit: "cover" }}
            />
          </figure>
        </a>
      </div>

      <div className="card-content">
        <p className="title is-5">{name}</p>
        <p className="subtitle is-6 has-text-white">{description}</p>
        <div className="tags">
          {tags?.map((tag) => (
            <span key={tag} className="tag is-info is-light">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
