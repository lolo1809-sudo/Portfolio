import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";

import { SiExpress } from "react-icons/si";

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
    description: ["Conocimientos sólidos de lógica de programación en C", "Análisis de algoritmos y estructuras de computadoras", "Bases sólidas de Álgebra Lineal"],
  },
  {
    id: 2,
    date: "Noviembre 2025 - Febrero 2026",
    role: "Desarrollador Front-end",
    company: "Estudiante",
    description: [
      "Desarrollé conocimientos sólidos en HTML, CSS, JS, REACT",
      "Realicé 'El Rincón del Front-end, un aplicación web con diversas herramientas para los Front-end'",
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
    description: "Aplicación web para Front-end, con un catálogo de componentes, consejos de UI, etc",
    imageUrl: "el-rincon-del-front.webp",
    stack: [
      { icon: FaReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],

    link: "https://el-rincon-del-front-end.netlify.app/",
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
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "Vite", icon: SiVite },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];
