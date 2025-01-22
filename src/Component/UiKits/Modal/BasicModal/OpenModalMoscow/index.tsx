import React, { useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { OpenModalForm } from "./OpenModalForm";
import { Button } from "reactstrap";
import { OpenModalForMoscow, MoscowSignUp } from "@/Constant";

const OpenModalMoscow = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModaltoggle = () => setOpenModal(!openModal);

  return (
    <>
      <Button color="primary" onClick={openModaltoggle}>{OpenModalForMoscow}</Button>
      <CommonModal isOpen={openModal} toggle={openModaltoggle} modalBodyClassName="p-0" heading="Moscow SIGN-UP">
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <h4 className="modal-header justify-content-center border-0">{MoscowSignUp}</h4>
          <OpenModalForm modal={openModaltoggle}/>
        </div> 
      </CommonModal>
    </>
  );
};

export default OpenModalMoscow;
