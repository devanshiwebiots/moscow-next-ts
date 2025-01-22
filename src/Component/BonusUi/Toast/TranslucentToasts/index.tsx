import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MoscowTheme, TranslucentToast } from "@/Constant";
import { TranslucentToastData, TranslucentToastDataList } from "@/Data/BonusUi/Toast";
import { useEffect, useState } from "react";
import { Disc } from "react-feather";
import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { CommonToast } from "../Common/CommonToast";

const TranslucentToasts = () => {
  const [open, setOpen] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setOpen(false);
    },7000)
  },[])

  return (
    <Col md="6">
      <Card className="overflow-hidden">
        <CommonCardHeader title={TranslucentToast} span={TranslucentToastData} />
        <CardBody className="toast-rtl">
          <div className="toast-container">
            <Toast isOpen={open}>
              <div className="toast-header">
                <Disc className="toast-icons toast-info" />
                <strong className="me-auto">{MoscowTheme}</strong>
                <small className="text-muted d-sm-block d-none">11 mins ago</small>
                <Button close className="p-0" onClick={() => setOpen(false)}></Button>
              </div>
              <ToastBody className="toast-dark"> Hello, I'm a web-designer.</ToastBody>
            </Toast>
            {TranslucentToastDataList.map((data, index) => (
              <CommonToast item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TranslucentToasts;
