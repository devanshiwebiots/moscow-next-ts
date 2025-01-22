import SVG from "@/CommonComponent/SVG";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md="12" className="footer-copyright text-center align-items-center justify-content-between">
          <p className="mb-0 fw-600">Copyright 2024 © Moscow theme by pixelstrap  </p>             
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
 