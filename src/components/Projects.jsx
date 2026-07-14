import { projectData } from "./data";

const Projects = () => {
  return (
    <section className="section band reveal" id="projects">
      <div className="inner">
        <div className="block-head">
          <span className="idx">03</span>
          <h2>Proyectos</h2>
        </div>
        <div className="projects-grid">
          {projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Demo →
                </a>
                <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                  Código →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
