import "../styles/Hero.css";

const Hero = ({ data }) => {
  return (
    <header className="hero">
      <div className="hero-info">
        <h1 className="hero-name">{data.name}</h1>
        <p className="hero-role">{data.role}</p>
        <div className="hero-socials">
          {data.socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="hero-image-container">
        <img src={data.photoUrl} alt={data.name} className="hero-photo" />
      </div>
    </header>
  );
};

export default Hero;
