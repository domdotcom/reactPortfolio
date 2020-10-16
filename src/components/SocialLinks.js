import React from "react"
import App from "../App.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SocialLinks() {

    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs={6} md={3}>
            <a className="social-link" href="https://github.com/domdotcom" target="_blank"><i className="fab fa-github"> </i></a>
            </Col>
            <Col xs={6} md={3}>
            <a  className="social-link" href="https://www.linkedin.com/in/dominika-perkowska/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
            </Col>
            <Col xs={6} md={3}>
            <a className="social-link" href="https://twitter.com/somminika" target="_blank" ><i className="fab fa-twitter"></i></a>
            </Col>
            <Col xs={6} md={3}>
            <a className="social-link" href="https://instagram.com/dominika_with_a_k"  target="_blank" ><i className="fab fa-instagram"></i></a>
            </Col>
          </Row>
        </Container>
      </div>
    );
      
         
    
}

export default SocialLinks;