"use client";
import { Container, Row } from "reactstrap";
import ClipboardOnParagraph from "./ClipboardOnParagraph";
import ClipboardOnTextInput from "./ClipboardOnTextInput";
import ClipboardOnTextarea from "./ClipboardOnTextarea";
import CopyPortionFromParagraph from "./CopyPortionFromParagraph";

const ClipBoardContainer = () => {
  return (
    <Container fluid>
      <Row>
        <ClipboardOnTextInput />
        <ClipboardOnTextarea />
        <ClipboardOnParagraph />
        <CopyPortionFromParagraph />
      </Row>
    </Container>
  );
};

export default ClipBoardContainer;
