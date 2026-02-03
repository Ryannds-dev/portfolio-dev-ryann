import { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "../data/projects";
import "./Projects.scss";

const TABS = [
  { key: "all", label: "Tous" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
];

function Projects() {
  const [tab, setTab] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (tab === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === tab);
  }, [tab]);

  // Focus trap + Escape dans la modale
  useEffect(() => {
    if (!selected) return;

    const panel = document.querySelector(".project-modal__panel");
    if (!panel) return;

    const focusable = panel.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
        return;
      }
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  return (
    <section className="projects" id="projets">
      <h2>Projets</h2>

      <div className="projects-tabs">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`tab ${tab === t.key ? "active" : ""}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((p) => (
          <div
            key={p.id}
            role="button"
            tabIndex={0}
            aria-label={p.title}
            className="project-card"
            onClick={() => setSelected(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelected(p);
              }
            }}
          >
            <img className="project-shot" src={p.screenshot} alt={p.title} />

            <div className="project-overlay">
              <h3>{p.title}</h3>
              <p>{p.shortDesc}</p>

              <div className="project-tech">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Démo
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div
            className="project-modal__backdrop"
            onClick={() => setSelected(null)}
          />
          <div className="project-modal__panel">
            <button
              className="project-modal__close"
              onClick={() => setSelected(null)}
              aria-label="Fermer"
            >
              ✕
            </button>

            <div className="project-modal__hero">
              <img src={selected.screenshot} alt={selected.title} />
            </div>

            <div className="project-modal__body">
              <h3 id="modal-title">{selected.title}</h3>
              <p className="muted">{selected.shortDesc}</p>

              <div className="project-modal__tech">
                {selected.tech.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="modal-links">
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Démo live
                  </a>
                )}
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo GitHub
                  </a>
                )}
              </div>

              {selected.note && <p className="note">{selected.note}</p>}

              <div className="oc-grid">
                <div>
                  <h4>Contexte</h4>
                  <p>{selected.narrative.contexte}</p>
                </div>
                <div>
                  <h4>Objectifs</h4>
                  <p>{selected.narrative.objectifs}</p>
                </div>
                <div>
                  <h4>Stack</h4>
                  <p>{selected.narrative.stack}</p>
                </div>
                <div>
                  <h4>Compétences</h4>
                  <p>{selected.narrative.competences}</p>
                </div>
                <div>
                  <h4>Résultats</h4>
                  <p>{selected.narrative.resultats}</p>
                </div>
                <div>
                  <h4>Perspectives</h4>
                  <p>{selected.narrative.perspectives}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
