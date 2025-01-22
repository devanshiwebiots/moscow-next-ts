"use client";
import { Container, Row } from "reactstrap";
import StyleBorderCart from "./StyleBorderCart";
import BorderCart from "./BorderCart";
import BackgroundColorsCart from "./BackgroundColorsCart";
import BorderColorCart from "./BorderColorCart";
import ImagesSizesCart from "./ImagesSizesCart";
import FontStyleCart from "./FontStyleCart";
import FontWeightCart from "./FontWeightCart";
import TextColorsCart from "./TextColorsCart";
import PaddingCart from "./PaddingCart";
import SidePadding from "./SidePadding";
import MarginCart from "./MarginCart";
import SideMargin from "./SideMargin";
import FontSizesCart from "./FontSizesCart";

const HelperClassesContainer = () => {
  return (
    <Container fluid>
      <Row>
        <StyleBorderCart />
        <BorderCart/>
        <BackgroundColorsCart/>
        <BorderColorCart/>
        <ImagesSizesCart/>
        <FontStyleCart/>
        <FontWeightCart/>
        <TextColorsCart/>
        <PaddingCart/>
        <SidePadding/>
        <MarginCart/>
        <SideMargin/>
        <FontSizesCart/>
      </Row>
    </Container>
  );
};

export default HelperClassesContainer;
