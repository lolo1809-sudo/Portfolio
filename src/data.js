import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiMercadopago, SiSupabase, SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";

/* -------------------------- 1. PERFIL ------------------------*/

export const profileData = {
  name: "Lorenzo López",
  role: "Desarrollador Full-Stack",
  photoUrl: "mi_foto.webp",
  socials: [
    { icon: FaGithub, link: "https://github.com/lolo1809-sudo" },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/lorenzo-lopez-8608b4257/",
    },
  ],
};

/* -------------------------- 2. EDUCACIÓN ------------------------*/

export const educationData = [
  {
    id: 1,
    degree: "Licenciatura en Sistemas de Información (3°)",
    institution: "Universidad Nacional de San Juan",
    period: "2025 - Presente",
    url: "../LSI.pdf",
  },
];

/* -------------------------- 3. PROYECTOS ------------------------*/

export const projectsData = [
  {
    id: 1,
    title: "DevShelf",
    year: "2026",
    description:
      "Aplicación web Full-Stack. \nLibrería UI para devs que les permite copiar, descargar y ver componentes UI de toda clase, desde inputs hasta páginas webs completas, permitiendo acceder a contenido premium con una suscripción mensual.",
    imageUrl: "devshelf.webp",
    stack: [
      { icon: FaReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiSupabase, name: "Supabase" },
      { icon: SiMercadopago, name: "Mercado Pago" },
    ],

    link: "https://dev-shelf.netlify.app/",
  },

  {
    id: 2,
    title: "FacuPanas",
    year: "2025",
    description: "Aplicación web Full-Stack (4 integrantes). \nPágina que centraliza el contenido y material de estudio de toda la UNSJ, y así facilitar la vida de los estudiantes universitarios.",
    imageUrl: "facupanas.webp",
    stack: [
      { icon: FaReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiSupabase, name: "Supabase" },
    ],

    link: "https://campusvirtual-facupanas.com/",
  },
];

/* -------------------------- 4. SKILLS ------------------------*/

export const skillsData = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Vite", icon: SiVite },
  { name: "Supabase", icon: SiSupabase },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];
