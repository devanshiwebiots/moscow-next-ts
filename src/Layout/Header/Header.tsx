import { Row } from "reactstrap";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { headerResponsive } from "@/Redux/Reducers/LayoutSlice";
import { MobileView } from "./MobileView";
import { PageHeader } from "./PageHeader";
 
 

export const Header = () => {
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(headerResponsive());
  }, []);

  return (
    <div className={`page-header ${toggleSidebar ? "close_icon" : ""}`}>
    <Row className="header-wrapper m-0" id="page-header">
      <MobileView />       
      <PageHeader />  
    </Row>
    </div>
  );
};
