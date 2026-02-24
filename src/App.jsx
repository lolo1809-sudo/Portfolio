import "./global.css";
import "./styles/App.css";

// Importar datos
import { profileData, experienceData, projectsData, skillsData } from "./data";

// Importar componentes
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import TimelineItem from "./components/Experiencia";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Hero data={profileData} />

      <main>
        {/* 1. SECCIÓN DE EXPERIENCIA */}
        <section className="section">
          <SectionTitle>Experiencia</SectionTitle>
          <div className="timeline">
            {experienceData.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 2. SECCIÓN DE PROYECTOS */}
        <section className="section">
          <SectionTitle>Proyectos</SectionTitle>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 3. SECCIÓN DE SOBRE MÍ */}
        <section className="section">
          <SectionTitle>Sobre mí</SectionTitle>
          <p className="about-text">
            Desarrollador Front-end con avanzada experiencia en tecnologías. Me
            encanta trabajar en proyectos que tengan un gran potencial.
          </p>
        </section>

        {/* 4. SECCIÓN DE SKILLS */}
        <section className="section">
          <SectionTitle>Tecnologías</SectionTitle>
          <Skills data={skillsData} />
        </section>

        {/* 5. SECCIÓN DE FOOTER/CONTACTO */}
        <Footer>Tecnologías</Footer>
      </main>
    </div>
  );
}

export default App;
