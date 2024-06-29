import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/HomePage.module.css";
import logo from "../assets/logo.png";

const HomePage = () => {
  <Container className={`mb-5 ${styles.Container}`}>
        <Row>
          <Col md="9">
            <h1>
              Welcome to
              <img src={logo} alt="Logo" width="230px" />
            </h1>

            <p>
            Book Nook is a cozy and welcoming space for bibliophiles to share their reviews on books they've read with fellow book lovers. 
            It captures the idea of a community where readers can find refuge and camaraderie through their shared love of literature. 
            Happy reading!
            </p>
          </Col>
        </Row>
  </Container>
};

export default HomePage;