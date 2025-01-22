import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MoscowCustomModal } from "@/Constant";
import { CustomModalData } from "@/Data/Uikits/modal";
import { Card, CardBody, Col, Row } from "reactstrap";
import { ModalOne } from "./ProfileModal";
import ModalTwo from "./ResultModal";
import ModalThird from "./BalanceModal";

const MoscowCustomModals = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={MoscowCustomModal} span={CustomModalData} />
        <CardBody>
          <Row className="g-3">
             <ModalOne/>
             <ModalTwo/>
             <ModalThird/>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MoscowCustomModals;
