import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicModal } from "@/Constant";
import { BasicData } from "@/Data/Uikits/modal";
import { Card, CardBody, Col } from "reactstrap";
import { SimpleModal } from "./SimpleModal";
import ScrollingModal from "./ScrollingModal";
import { ToolTipAndPopover } from "./ToolTipAndPopover";
import OpenModalMoscow from "./OpenModalMoscow";
 
const BasicModalCart = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={BasicModal} span={BasicData} />
        <CardBody className="badge-spacing">
          <SimpleModal/>
          <ScrollingModal/>
          <ToolTipAndPopover/>
          <OpenModalMoscow/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModalCart;
