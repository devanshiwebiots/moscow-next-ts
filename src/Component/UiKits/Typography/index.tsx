"use client";
import { Container, Row } from "reactstrap";
import { HeadingCard } from "./HeadingCard";
import ColorCart from "./ColorHeading";
import { FontWeightCart } from "./FontWeightCart";
import ListingCard from "./ListingTypography";
import DisplayCard from "./DisplayCard";
import InlinetextCart from "./InlinetextCart";
import TextColorCart from "./TextColorCart";
import BlockQuotsCart from "./BlockQuots";

const TypographtContainer = () => {
  return (
    <Container fluid>
      <Row>
          <HeadingCard/>
          <ColorCart/>
          <FontWeightCart/>
          <ListingCard/>
          <DisplayCard/>
          <InlinetextCart/>
          <TextColorCart/>
          <BlockQuotsCart/>
      </Row>
    </Container>
  );
};

export default TypographtContainer;
