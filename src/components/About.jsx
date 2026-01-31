import { Container, Row, Col } from "react-bootstrap";
import aboutPhoto from "../assets/img/photo-ryann.webp";
import "./About.scss";

function About() {
  return (
    <section className="about" id="a-propos">
      <Container>
        <div className="about-card">
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <div className="about-photo-wrap">
                <img className="about-photo" src={aboutPhoto} alt="Ryann" />
              </div>
            </Col>

            <Col lg={7}>
              <h2>À propos</h2>
              <p>
                Étudiant ingénieur en réorientation vers le développement web,
                je conçois des interfaces modernes et responsives principalement
                avec React et Sass. Je développe également des API simples avec
                Node.js, Express et MongoDB afin de comprendre l’ensemble d’une
                application web. Je développe mes projets avec une approche
                pragmatique, en privilégiant la lisibilité du code et
                l’expérience utilisateur.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default About;
