"use client";
import { Container, Row } from "reactstrap";
import BasicTooltip from "./BasicTooltip";
import ColoredTooltip from "./ColoredTooltip";
import TooltipDirections from "./TooltipDirections";
import ElementsWithHoverEffect from "./ElementsWithHoverEffect";
import FilledTooltip from "./FilledTooltip";

const TooltipContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicTooltip />
        <ColoredTooltip />
        <TooltipDirections />
        <ElementsWithHoverEffect />
        <FilledTooltip />
      </Row>
    </Container>
  );
};

export default TooltipContainer;
