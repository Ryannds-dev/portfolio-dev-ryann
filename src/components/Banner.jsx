import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import photoRyann from "../assets/img/photo-ryann.webp";
import "./Banner.scss";

function Banner() {
  return (
    <section className="banner" id="accueil">
      <Container fluid className="px-5">
        <Row className="align-items-center">
          <Col lg={6} xl={6} className="banner-left">
            <h1>Ryann DERA-SCHTYK</h1>
            <span className="tagline">Développeur Web</span>
            <p>
              Je développe des applications web complètes, du front-end en React
              jusqu’aux API back-end avec Node.js et bases de données.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Me contacter
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col md={6} xl={5} className="col-picture">
            <img src={photoRyann} alt="Photo Ryann" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
