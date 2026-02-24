import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    // Envolvemos todo en un link para abrir la página web

    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-image-wrapper">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-year">{project.year}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-stack">
          {project.stack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="project-badge">
                {Icon && <Icon size={14} />}
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
