const Hero = ({ data }) => {
  return (
    <header className="flex flex-col-reverse items-center justify-between gap-8 py-16 md:flex-row">
      <div className="text-center md:text-left">
        <h1 className="mb-2 text-5xl font-extrabold">{data.name}</h1>
        <p className="mb-6 text-[1.2rem] text-text-secondary">{data.role}</p>
        <div className="flex justify-center gap-4 md:justify-start">
          {data.socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="text-text-secondary transition-all duration-300 hover:-translate-y-[3px] hover:text-accent">
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="shrink-0">
        <img src={data.photoUrl} alt={data.name} className="h-[200px] w-[200px] rounded-full border-[3px] border-bg-secondary object-cover shadow-[0_0_20px_rgba(160,184,0,0.2)]" />
      </div>
    </header>
  );
};

export default Hero;
