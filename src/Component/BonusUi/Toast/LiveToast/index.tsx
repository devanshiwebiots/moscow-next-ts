import { Card, CardBody, Col } from "reactstrap";

import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LiveToasts } from "@/Constant";
import { LiveToastData } from "@/Data/BonusUi/Toast";
import TopRightToast from "./TopRightToast";
import BottomRightToast from "./BottomRightToast";
import TopLeftToast from "./TopLeftToast";
import BottomLeftToast from "./BottomLeftToast";

const LiveToast = () => {
  return (
    <Col md='6'>
      <Card>
        <CommonCardHeader title={LiveToasts} span={LiveToastData} />
        <CardBody className='position-relative common-flex'>
          <TopRightToast />
          <BottomRightToast />
          <TopLeftToast />
          <BottomLeftToast />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveToast;
