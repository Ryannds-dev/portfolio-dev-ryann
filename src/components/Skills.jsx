import htmlLogo from "../assets/img/skills/html5.svg";
import cssLogo from "../assets/img/skills/css.svg";
import jsLogo from "../assets/img/skills/javascript.svg";
import reactLogo from "../assets/img/skills/react.svg";
import nodeLogo from "../assets/img/skills/nodedotjs.svg";
import mongoLogo from "../assets/img/skills/mongodb.svg";
import gitLogo from "../assets/img/skills/git.svg";
import githubLogo from "../assets/img/skills/github.svg";
import vscodeLogo from "../assets/img/skills/visual-studio-code.svg";

import "./Skills.scss";

function Skills() {
  return (
    <section className="skills" id="competences">
      <h2>Compétences</h2>

      <div className="skills-group">
        <h3>Frontend</h3>
        <div className="skills-grid">
          <img src={htmlLogo} alt="HTML" />
          <img src={cssLogo} alt="CSS" />
          <img src={jsLogo} alt="JavaScript" />
          <img src={reactLogo} alt="React" />
        </div>
      </div>

      <div className="skills-group">
        <h3>Backend</h3>
        <div className="skills-grid">
          <img src={nodeLogo} alt="Node.js" />
          <img src={mongoLogo} alt="MongoDB" />
        </div>
      </div>

      <div className="skills-group">
        <h3>Outils</h3>
        <div className="skills-grid">
          <img src={gitLogo} alt="Git" />
          <img src={githubLogo} alt="GitHub" />
          <img src={vscodeLogo} alt="VS Code" />
        </div>
      </div>

      <ul className="soft-skills">
        <li>Rigueur technique</li>
        <li>Autonomie dans l’apprentissage</li>
        <li>Recherche de solutions simples et efficaces</li>
        <li>Travail organisé sur les projets</li>
        <li>Explication claire des choix techniques</li>
      </ul>
    </section>
  );
}

export default Skills;
