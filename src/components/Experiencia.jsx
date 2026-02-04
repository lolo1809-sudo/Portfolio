import "../styles/Experiencia.css";
import { FaArrowRight } from "react-icons/fa";

const TimelineItem = ({ item }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <span className="timeline-date">{item.date}</span>
        <h3 className="timeline-role">{item.role}</h3>
        <h4 className="timeline-company">{item.company}</h4>
        <ul className="timeline-description">
          {item.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        {item.link && (
          <a href={item.link.url} className="timeline-link-button">
            {item.link.text} <FaArrowRight className="timeline-link-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
