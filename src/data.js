import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import { SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";

/* -------------------------- 1. PERFIL ------------------------*/

export const profileData = {
  name: "Lorenzo López",
  role: "Desarrollador Front-end",
  photoUrl: "mi_foto.webp",
  socials: [
    { icon: FaGithub, link: "https://github.com/lolo1809-sudo" },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/lorenzo-lopez-8608b4257/",
    },
  ],
};

/* -------------------------- 2. EXPERIENCIA ------------------------*/

export const experienceData = [
  {
    id: 1,
    date: "Marzo 2025 - Noviembre 2025",
    role: "Primer año de Facultad",
    company: "UNSJ",
    description: [
      "Conocimientos sólidos de lógica de programación en C",
      "Análisis de algoritmos y estructuras de computadoras",
      "Bases sólidas de Álgebra Lineal",
    ],
  },
  {
    id: 2,
    date: "Noviembre 2025 - Febrero 2026",
    role: "Desarrollador Front-end",
    company: "Estudiante",
    description: [
      "Desarrollé conocimientos sólidos en HTML, CSS, JS y REACT",
      "Realicé proyectos como un 'Clon de Netflix', 'Catálogo de Componentes', una documentación de React mas clara y corta, para principiantes",
      "Bases sólidas de experiencia del usuario UI/UX",
    ],
  },
];

/* -------------------------- 3. PROYECTOS ------------------------*/

export const projectsData = [
  {
    id: 1,
    title: "El Rincón del Front-end",
    year: "2026",
    description:
      "Catálogo de componentes web, desde inputs hasta páginas webs completas",
    imageUrl: "el_rincon_del_frontend.webp",
    stack: [
      { icon: FaReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],

    link: "https://el-rincon-del-front-end.netlify.app/",
  },

  {
    id: 2,
    title: "React Lite",
    year: "2026",
    description:
      "Adaptación de la documentación oficial de React para principiantes, con explicaciones claras y cortas",
    imageUrl: "react_lite.webp",
    stack: [{ icon: FaReact, name: "React" }],

    link: "https://reactlite.netlify.app/",
  },
];

/* -------------------------- 4. SKILLS ------------------------*/

export const skillsData = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];
