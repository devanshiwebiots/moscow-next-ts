"use client";
import { Container, Row } from "reactstrap";
import DefaultTouchspin from "./DefaultTouchspin";
import OutlinedTouchspin from "./OutlinedTouchspin";
import IconsWithPrefixAndPostfix from "./IconsWithPrefixAndPostfix";
import ButtonsWithPrefixAndPostfix from "./ButtonsWithPrefixAndPostfix";
import RoundedTouchspin from "./RoundedTouchspin";

const TouchSpinContainer = () => {
  return (
    <Container fluid>
      <div className='bootstrap-touchspin'>
        <Row>
          <DefaultTouchspin />
          <OutlinedTouchspin />  
          <IconsWithPrefixAndPostfix />
          <ButtonsWithPrefixAndPostfix />
          <RoundedTouchspin />
        </Row>
      </div>
    </Container>
  );
};

export default TouchSpinContainer;
