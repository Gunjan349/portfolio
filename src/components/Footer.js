import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="footer-logo">G.</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Gunjan349" target="_blank">
                <FaGithub className="text-white z-3"/>
              </a>
              <a
                href="https://www.instagram.com/garg__gunjan?igsh=bWphM25zNHd3bWIz"
                target="_blank"
              >
                <FaInstagram className="text-white z-3" />
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()}; Developed by GuNjaN GaRg</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
