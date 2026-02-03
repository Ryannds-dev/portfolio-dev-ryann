import { useEffect, useRef } from "react";
import { EDUCATION } from "../data/education";
import "./Education.scss";

function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".timeline-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="education" id="parcours" ref={sectionRef}>
      <h2>Parcours</h2>
      <div className="timeline">
        {EDUCATION.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            style={{ "--delay": `${index * 0.15}s` }}
          >
            <div className="timeline-card">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="timeline-school">{item.school}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
