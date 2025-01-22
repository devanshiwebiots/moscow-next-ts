"use client";
import { Col, Container, Row } from "reactstrap";
import { BasicProgressBarsCart } from "./BasicProgressBarsCart";
import { ProgressBarsStripedCard } from "./ProgressBarsStripedCart";
import { ProgressBarsAnimatedCart } from "./ProgressBarsAnimatedCart";
import { MultipleBarsCart } from "./MultipleBarsCart";
import { ProgressWithNumberStepsCard } from "./ProgressWithNumberSteps";
import { CustomProgressBarsCart } from "./CustomProgressBarsCart";
import { SmallProgressBarsCart } from "./SmallProgressBarsCart";
import { LargeProgressBarsCart } from "./LargeProgressBarsCart";
import { CustomHeightProgressBarsCart } from "./CustomHeightProgressBarsCart";

const ProgressContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm='12'>
          <BasicProgressBarsCart />
          <Row>
            <ProgressBarsStripedCard />
            <ProgressBarsAnimatedCart />
          </Row>
          <Row>
            <MultipleBarsCart />
            <ProgressWithNumberStepsCard />
          </Row>
          <CustomProgressBarsCart />
          <Row>
            <SmallProgressBarsCart />
            <LargeProgressBarsCart />
          </Row>
          <CustomHeightProgressBarsCart />
        </Col>
      </Row>
    </Container>
  );
};

export default ProgressContainer;
