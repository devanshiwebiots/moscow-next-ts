"use client";
import { Container, Row } from "reactstrap";
import GridColumnCard from "./GridColumn";
import GridOptionsCard from "./GridOptions";
import VerticalAlignmentCard from "./VerticalAlignment";
import HorizontalAlignmentCard from "./HorizontalAlignment";
import NestingCard from "./Nesting";
import OrderCard from "./Order";
import OffsetCart from "./Offset";

const GridContainer = () => {
  return (
    <Container fluid>
      <Row>
        <GridOptionsCard />
        <GridColumnCard />
        <VerticalAlignmentCard />
        <HorizontalAlignmentCard/>
        <NestingCard/>
        <OrderCard/>
        <OffsetCart/>
      </Row>
    </Container>
  );
};

export default GridContainer;
