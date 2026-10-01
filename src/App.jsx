import "./global.css";

// Importar datos
import { profileData, educationData, projectsData, skillsData } from "./data";

// Importar componentes
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import Education from "./components/Education";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Hero data={profileData} />

      <main>
        {/* 1. SECCIÓN DE EDUCACIÓN */}
        <section className="mb-16">
          <SectionTitle>Educación</SectionTitle>
          <div className="mt-8 grid gap-4">
            {educationData.map((item) => (
              <Education key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 2. SECCIÓN DE PROYECTOS */}
        <section className="mb-16">
          <SectionTitle>Proyectos</SectionTitle>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 3. SECCIÓN DE SOBRE MÍ */}
        <section className="mb-16">
          <SectionTitle>Sobre mí</SectionTitle>
          <p className="text-text-secondary max-w-[100ch]">
            Estudiante de 3° de la Licenciatura en Sistemas de Información en la UNSJ y Desarrollador Full-Stack apasionado por crear aplicaciones web eficientes. Me enfoco en escribir código limpio,
            aprender de forma constante y me encanta transformar ideas en productos funcionales con gran potencial.
          </p>
        </section>

        {/* 4. SECCIÓN DE SKILLS */}
        <section className="mb-16">
          <SectionTitle>Tecnologías</SectionTitle>
          <Skills data={skillsData} />
        </section>

        {/* 5. SECCIÓN DE FOOTER/CONTACTO */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
