import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">¿Te interesa mi perfil? ¡Hablemos!</p>
      <a href="mailto:lonalo1809@gmail.com" className="email-button">
        lonalo1809@gmail.com
      </a>
      <p className="copyright">
        © {new Date().getFullYear()} Lorenzo López. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
