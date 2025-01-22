"use client";
import { Container, Row } from "reactstrap";
import SlidesOnly from "./SlidesOnly";
import WithControls from "./WithControls";
import AutoPlayVariant from "./AutoPlayVariant";
import MouseOver from "./MouseOver";
import WithCaptions from "./WithCaptions";
import CrossFade from "./CrossFade";
import IndividualInterval from "./IndividualInterval";
import DisableTouchSwiping from "./DisableTouchSwiping";
import DarkVariant from "./DarkVariant";

const CarouselContainer = () => {
  return (
    <Container fluid>
      <Row>
        <SlidesOnly />
        <WithControls />
        <AutoPlayVariant />
        <MouseOver />
        <WithCaptions />
        <CrossFade />
        <IndividualInterval />
        <DisableTouchSwiping />
        <DarkVariant />
      </Row>
    </Container>
  );
};

export default CarouselContainer;
