import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SizesModal } from "@/Constant";
import { SizeDatas } from "@/Data/Uikits/modal";
import { Card, CardBody, Col } from "reactstrap";
import ExtraLargeModal from "./ExtraLargeModal";
import FullScreenModal from "./FullscreenModal";
import LargeModal from "./LargeModal";
import SmallModal from "./SmallModal";

const SizeModalCart = () => {
  return (
    <Col lg='6'>
      <Card>
        <CommonCardHeader title={SizesModal} span={SizeDatas} />
        <CardBody className='badge-spacing'>
          <FullScreenModal />
          <ExtraLargeModal />
          <LargeModal/>
          <SmallModal/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizeModalCart;
