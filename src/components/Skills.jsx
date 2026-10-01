const Skills = ({ data }) => {
  return (
    <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-6">
      {data.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div
            key={index}
            className="group flex flex-col items-center gap-[0.8rem] rounded-[var(--radius-custom)] border border-transparent bg-bg-secondary px-4 py-6 transition-all duration-300 hover:-translate-y-[5px] hover:border-accent"
          >
            <Icon className="text-[2.5rem] text-text-secondary transition-colors duration-300 group-hover:text-accent" />
            <span className="text-[0.9rem] font-medium text-text-primary">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
