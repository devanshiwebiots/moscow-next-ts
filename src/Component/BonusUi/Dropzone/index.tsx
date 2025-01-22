"use client";
import { Container, Row } from "reactstrap";
import DefaultDropzone from "./DefaultDropzone";
import ImagePreview from "./ImagePreview";
import SingleFileUpload from "./SingleFileUpload";
import MultiFileUpload from "./MultiFileUpload";

const DropzoneContainer = () => {
  return (
    <Container fluid>
      <Row>
         <DefaultDropzone/>
         <ImagePreview/>
         <SingleFileUpload/>
         <MultiFileUpload/>
      </Row>
    </Container>
  );
};

export default DropzoneContainer;
