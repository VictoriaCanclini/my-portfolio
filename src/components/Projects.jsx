import { Download, GitHub } from "@/common/icons";
import { projectData } from "./data";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-header">
                <Image
                  src={project.imageSrc}
                  className="profile-img"
                  width={60}
                  height={50}
                  alt="personal"
                />
                <div className="small-icons">
                  <a href={project.demoLink} target="_blank">
                    <Download color="#c9a4e8" />
                  </a>
                  <a href={project.gitHubLink} target="_blank">
                    <GitHub color="#808080" />
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
