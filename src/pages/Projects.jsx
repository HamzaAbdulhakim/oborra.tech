import { useState } from "react";

import projects from "../data/projects";

import SectionTitle from "../components/SectionTitle";

import ProjectFilter from "../components/ProjectFilter";

import ProjectCard from "../components/ProjectCard";

import Reveal from "../components/Reveal";

import EmptyState from "../components/EmptyState";

import Stagger from "../components/Stagger";
import '../styles/projects.css'

import FeaturedProject from "../components/FeaturedProject";
function Projects() {
    const featuredProject =
  projects.find(
    project => project.featured
  );


    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(projects.map(project => project.category))
    ];

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter(
                project => project.category === selectedCategory
            );

    return (

        <div
            className="projects-section"
        >
            <div className="projects-container">

                <Reveal>

                    <SectionTitle

                        title="Projects"

                        subTitle="Some of the projects I've built throughout my software engineering journey."

                    />

                </Reveal>

                <FeaturedProject project={featuredProject} />
                <Reveal>

                    <ProjectFilter

                        categories={categories}

                        selectedCategory={selectedCategory}

                        setSelectedCategory={setSelectedCategory}

                    />

                </Reveal>

                {filteredProjects.length > 0 ? (
<Stagger>
  <div className="projects-grid">

    {filteredProjects.map(project => (

      <Reveal key={project.id}>

        <ProjectCard
          project={project}
        />

      </Reveal>

    ))}

  </div>
</Stagger>
) : (

  <EmptyState />

)}

            </div>

        </div>

    );

}

export default Projects;