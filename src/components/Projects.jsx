import { Download, Folder } from "@/common/icons";
import { projectData } from "./data";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-header">
                <Folder color="#c9a4e8" />
                <div className="small-icons">
                  <a href={project.gitHubLink} target="_blank">
                    <Download color="#c9a4e8" />
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
