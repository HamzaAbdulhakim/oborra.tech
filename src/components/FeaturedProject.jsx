import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";

//import ImageLoader from "./ImageLoader";
function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <Reveal>
      <section className="featured-project">

        <div className="featured-image">

          <img
            src={project.image}
            alt={project.title}
          />

          <span className="featured-ribbon">
            ⭐ Featured Project
          </span>

        </div>

        <div className="featured-content">

          <span className="featured-year">
            {project.year}
          </span>

          <h2 className="title">
            {project.title}
          </h2>

          <p className="subtitle">
            {project.fullDescription}
          </p>

          <div className="featured-technologies title">

            {project.technologies.map((tech) => (

              <span
                key={tech}
                className="tech-badge"
              >
                {tech}
              </span>

            ))}

          </div>

          <div className="featured-buttons">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <FaGithub />

              GitHub

            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="demo-btn"
            >
              <FiExternalLink />

              Live Demo

            </a>

          </div>

        </div>

      </section>
    </Reveal>
  );
}

export default FeaturedProject;