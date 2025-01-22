"use client";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Card, Col, Container, Row } from "reactstrap";
import { FeatherIcons } from "@/Constant";
import { FeatherIconCardBody } from "./FeatherIconCardBody";

const FeatherIconContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={FeatherIcons} />
            <FeatherIconCardBody />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeatherIconContainer;
