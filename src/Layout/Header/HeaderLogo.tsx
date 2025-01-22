import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducers/LayoutSlice";
import Link from "next/link";
import { Col } from "reactstrap";

export const HeaderLogo = () => {
  const dispatch = useAppDispatch();
  const { toggleSidebar } = useAppSelector((state) => state.layout);

  return (
    <Col className="header-logo-wrapper p-0 col-auto">
      <div className="logo-wrapper">
        <Link href={`/dashboard/default_dashboard`}>
          <img className="img-fluid" src={`${ImagePath}/logo/logo.png`} alt="" />
        </Link>
      </div>
      <div className="toggle-sidebar" onClick={() => dispatch(setToggleSidebar(!toggleSidebar))}>
        <SVG className="stroke-icon sidebar-toggle status_toggle middle" iconId="toggle-icon" />
      </div>
    </Col>
  );
};