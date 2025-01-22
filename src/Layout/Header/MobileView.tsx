import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducers/LayoutSlice";
import Link from "next/link";
import { Col } from "reactstrap";

export const MobileView = () => {
  const dispatch = useAppDispatch();
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  return (
    <Col className="header-logo-wrapper col-auto p-0">
      <div className="logo-wrapper">
        <Link href={`/dashboard/default_dashboard`}>
          <img className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="" />
          <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt=""/>
        </Link>
      </div>
      <div className="toggle-sidebar" onClick={() => dispatch(setToggleSidebar(!toggleSidebar))}>
        <SVG className="stroke-icon sidebar-toggle status_toggle middle" iconId="menu" />
      </div>
    </Col>
  );
};
