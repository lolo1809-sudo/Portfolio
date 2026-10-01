import { FaGraduationCap, FaDownload } from "react-icons/fa";

const Education = ({ item }) => {
  return (
    <div className="group rounded-xl border border-white/10 bg-bg-secondary/40 p-4 sm:p-5 transition-all duration-300 hover:border-accent/40 hover:bg-bg-secondary/70">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Datos de la carrera e institución */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-bg-custom">
            <FaGraduationCap size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white sm:text-base leading-snug">{item.degree}</h3>
            <p className="text-xs text-text-secondary sm:text-sm">{item.institution}</p>
          </div>
        </div>

        {/* Fecha y botón de descarga */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start sm:self-auto">
          <span className="shrink-0 rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[0.75rem] font-medium text-accent">{item.period}</span>

          {item.url && (
            <a
              href={item.url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[0.75rem] font-semibold text-text-secondary transition-all duration-200 hover:border-accent/50 hover:bg-accent hover:text-bg-custom"
            >
              <FaDownload size={11} />
              <span>Plan de estudio</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
