import React from "react"
import socialLinks from "./socialLinks.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SocialLinks() {

    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs={6} md={3}>
              xs=6 md=3
            </Col>
            <Col xs={6} md={3}>
              xs=6 md=3
            </Col>
            <Col xs={6} md={3}>
              xs=6 md=3
            </Col>
            <Col xs={6} md={3}>
              xs=6 md=3
            </Col>
          </Row>
        </Container>
      </div>
    );
      
         
    
}

export default SocialLinks;