import { useState } from "react";
import { Button } from "reactstrap";
import { ScrollingContent } from "@/Constant";
import CommonModal from "../../Common/CommonModal";
import WedDesigners from "./WedDesigner";
import { UXDesigner } from "./UXDesigner";

const ScrollingModal = () => {
  const [scrollingModal, setScrollingModal] = useState(false);
  const scrollModaltoggle = () => setScrollingModal(!scrollingModal);

  return (
    <>
      <Button color='success' onClick={scrollModaltoggle}>
        {ScrollingContent}
      </Button>
      <CommonModal isOpen={scrollingModal} toggle={scrollModaltoggle} title='Scrolling Modal'>
          <WedDesigners/>
          <UXDesigner/>
      </CommonModal>
    </>
  );
};

export default ScrollingModal;
