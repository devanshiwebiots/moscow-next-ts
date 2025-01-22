import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducers/LayoutSlice";
import Link from "next/link";

export const LogoWrapper = () => {
  const dispatch = useAppDispatch();
  const { toggleSidebar } = useAppSelector((state) => state.layout);

  return (
    <>
      <div className="logo-wrapper">
        <Link href={`/dashboard/default_dashboard`}>
          <img className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="" />
          <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt=""/>
        </Link>
        <div className="back-btn" onClick={() => dispatch(setToggleSidebar(!toggleSidebar))}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="toggle-sidebar" onClick={() => dispatch(setToggleSidebar(!toggleSidebar))} defaultChecked>
        <SVG className="status_toggle middle sidebar-toggle" iconId="menu" />
        </div>
      </div>
      <div className="logo-icon-wrapper">
        <Link href={`/dashboard/default_dashboard`}>
          <img className="img-fluid" src={`${ImagePath}/logo/logo-icon.png`} alt="" />
        </Link>
      </div>
    </>
  );
};