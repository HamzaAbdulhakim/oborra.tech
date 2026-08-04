import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import '../styles/projectCard.css'
function ProjectCard({ project }) {
  return (
    <article className="project-card">

      {/* Project Image */}

      <div className="project-image">

        <img
          src={project.image}
          loading="lazy"
          alt={project.title}
        />

        {project.featured && (
          <span className="featured-badge">
            Featured
          </span>
        )}

      </div>

      {/* Project Content */}

      <div className="project-content">

        <div className="project-header">

          <h3>{project.title}</h3>

          <span className="project-year">
            {project.year}
          </span>

        </div>

        <p className="project-description">
          {project.shortDescription}
        </p>

        {/* Technologies */}

        <div className="project-technologies">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="project-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            <FaGithub />

            <span>GitHub</span>

          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="demo-btn"
          >
            <FiExternalLink />

            <span>Live Demo</span>

          </a>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;