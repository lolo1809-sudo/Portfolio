const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-[15px] flex h-full w-full sm:w-[80%] cursor-pointer flex-col overflow-hidden rounded-[var(--radius-custom)] border border-transparent bg-bg-secondary transition-all duration-300 hover:-translate-y-[5px] hover:border-accent"
    >
      <div className="h-[180px] overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-baseline justify-between">
          <h3 className="text-[1.2rem] font-bold text-text-primary">{project.title}</h3>
          <span className="text-[0.9rem] text-text-secondary">{project.year}</span>
        </div>

        <p className="whitespace-pre-line mb-6 flex-1 text-[0.95rem] text-text-secondary">{project.description}</p>

        <div className="flex flex-wrap gap-3">
          {project.stack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="flex items-center gap-[0.4rem] rounded-full bg-white/5 px-[0.8rem] py-[0.4rem] text-[0.8rem] text-text-secondary [&>svg]:text-accent">
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
