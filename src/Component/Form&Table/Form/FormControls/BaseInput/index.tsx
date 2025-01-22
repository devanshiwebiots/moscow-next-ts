"use client";
import { Container, Row } from "reactstrap";
import BasicForm from "./BasicForm";
import FileInput from "./FileInput";
import FloatingForm from "./FloatingForm";
import FormControlSizing from "./FormControlSizing";
import SelectSizing from "./SelectSizing";
import FlatInputStyle from "./FlatInputStyle";
import BasicHtmlInputControl from "./BasicHtmlInputControl";
import BasicFloatingInputControl from "./BasicFloatingInputControl";
import EdgesInputStyle from "./EdgesInputStyle";
import RaiseInputStyle from "./RaiseInputStyle";

const BaseInputContainer = () => {
  return (
    <Container fluid>    
      <Row>
        <BasicForm />
        <FloatingForm />
        <SelectSizing />
        <FormControlSizing />
        <FileInput />
        <FlatInputStyle />
        <BasicHtmlInputControl />
        <BasicFloatingInputControl />
        <EdgesInputStyle />
        <RaiseInputStyle />
      </Row>
    </Container>
  );
};

export default BaseInputContainer;
