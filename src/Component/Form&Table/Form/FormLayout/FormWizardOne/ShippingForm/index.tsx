import { ShippingFormHeading } from "@/Constant";
import { useCallback, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ShippingFormData } from "@/Data/Form&Table/Form";
import CurrentCart from "./CurrentCart";
import NavComponent from "./NavComponent";
import ShippingFormTabContent from "./ShippingFormTabContent";

const ShippingForm = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
    setActiveTab(tab);
  }, []);

  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={ShippingFormHeading} span={ShippingFormData}/>
        <CardBody>
          <Row className="shopping-wizard">
            <Col xs="12">
              <Row className="shipping-form g-5">
                <Col xl="8" className="shipping-border">
                  <NavComponent callbackActive={callback} activeTab={activeTab}/>
                  <ShippingFormTabContent activeTab={activeTab} callbackActive={callback}/>
                </Col>
                <CurrentCart />
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShippingForm;
