import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CommonFileUpload from "@/CommonComponent/CommonFileUpload";
import { SingleFileUploads } from "@/Constant";
import { FileUploadData } from "@/Data/BonusUi/Dropzone";
import { Card, Col } from "reactstrap";

const SingleFileUpload = () => {
  return (
    <Col lg='6'>
      <Card>
        <CommonCardHeader title={SingleFileUploads} span={FileUploadData} />
        <CommonFileUpload />
      </Card>
    </Col>
  );
};

export default SingleFileUpload;
