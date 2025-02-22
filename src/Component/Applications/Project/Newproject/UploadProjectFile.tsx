import CommonFileUpload from "@/CommonComponent/CommonFileUpload";
import { UploadProjectFiles } from "@/Constant";
import { Col, FormGroup, Label, Row } from "reactstrap";

const UploadProjectFile = () => {
  return (
    <Row>
      <Col>
        <FormGroup>
          <Label check>{UploadProjectFiles}</Label>
          <CommonFileUpload />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default UploadProjectFile;
