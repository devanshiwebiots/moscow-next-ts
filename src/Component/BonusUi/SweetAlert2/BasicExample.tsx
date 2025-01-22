import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicExamples, ClickIt } from "@/Constant";
import { BasicSweetAlert } from "@/Data/BonusUi/SweetAlert";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const BasicExample = () => {
  const displayAlert = () => {
    SweetAlert.fire({ title: "Welcome! to the Moscow theme", confirmButtonColor: "var(--theme-default)" });
  };

  return (
    <Col xxl='3' lg='4' sm='6' xs='12'>
      <Card className='height-equal'>
        <CommonCardHeader title={BasicExamples} span={BasicSweetAlert} />
        <CardBody className='btn-showcase'>
          <Button color='primary' className='sweet-1' onClick={displayAlert}>
            {ClickIt}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicExample;
