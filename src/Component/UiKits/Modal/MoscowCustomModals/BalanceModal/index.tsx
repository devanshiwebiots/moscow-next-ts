import { ClickOut, ImagePath } from "@/Constant";
import { useState } from "react";
import { Button, Col } from "reactstrap";
import { CommonMoscowModalTitle } from "../Common/CommonMoscowModalTitle";
import { BalanceModal } from "./BalanceModal";

const ModalThird = () => {
  const [modalThird, setModalThird] = useState(false);
  const modalThirdTogggle = () => setModalThird(!modalThird);

  return (
    <Col xl="4" md="12" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="Lagos-demo-img">
          <CommonMoscowModalTitle heading="Modal 3 -" subHeading="Balance Modal" text="Example of Moscow dashboard balance card." />
          <div className="overflow-hidden balance-modal">
            <img src={`${ImagePath}/alert/balance.png`} alt="learning" />
            <Button color="primary" className="mx-auto mt-3" onClick={modalThirdTogggle}>{ClickOut}</Button>
          </div>
          <BalanceModal modalThird={modalThird} modalThirdToggle={modalThirdTogggle} />
        </div>
      </div>
    </Col>
  );
};

export default ModalThird;
