import "../styles/Skills.css";

const Skills = ({ data }) => {
  return (
    <div className="skills-grid">
      {data.map((skill, index) => {
        const Icon = skill.icon;
        return (
          <div key={index} className="skill-item">
            <Icon className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
