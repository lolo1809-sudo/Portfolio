import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 bg-bg-secondary/20 pt-16">
      {/* Contenido principal */}
      <div className="mx-auto max-w-xl px-4 text-center">
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">¿Te interesa mi perfil? ¡Hablemos!</h2>
        <p className="mb-8 text-sm text-text-secondary sm:text-base">Estoy disponible para nuevas oportunidades y proyectos. Escríbeme y charlamos.</p>

        {/* Botón de Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=lonalo1809@gmail.com&su=Contacto%20desde%20tu%20Portfolio&body=Hola%20Lorenzo,%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte."
          target="_blank"
          rel="noopener noreferrer"
          className="mb-8 inline-block rounded-full border-2 border-accent px-8 py-[0.8rem] font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-black hover:shadow-[0_0_15px_rgba(160,184,0,0.4)]"
        >
          lonalo1809@gmail.com
        </a>

        {/* Redes con el estilo exacto del Hero */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/lolo1809-sudo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-secondary transition-all duration-300 hover:-translate-y-[3px] hover:text-accent"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lorenzo-lopez-8608b4257/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary transition-all duration-300 hover:-translate-y-[3px] hover:text-accent"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Franja pegada al piso de la página */}
      <div className="mt-16 border-t border-white/5 py-6 text-center">
        <p className="text-xs text-text-secondary/70 sm:text-sm">© {new Date().getFullYear()} Lorenzo López. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
