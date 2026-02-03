import logoRyann from "../assets/img/logo-ryann.png";
import linkedinLogo from "../assets/img/linkedin-logo.svg";
import youtubeLogo from "../assets/img/youtube-logo.svg";
import githubLogo from "../assets/img/skills/github.svg";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logoRyann} alt="Logo Ryann" />
      </div>

      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/ryann-dera-schtyk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/Ryannds-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={youtubeLogo} alt="YouTube" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
