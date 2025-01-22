import { DashboardCommonHeaderType } from "@/Types/CommonTypes";
import React from "react";
import { CardHeader } from "reactstrap";
import { CommonDropdown } from "./CommonDropdown";

const DashboardCommonHeader: React.FC<DashboardCommonHeaderType> = ({ title ,tagClass, dropDownFalse,children,classname}) => {
  return (
    <CardHeader className={`card-no-border pb-0 d-flex justify-content-between mt-0 ${classname}`}>
      <h5 className={tagClass ? tagClass : ""}>{title}</h5>
      {!dropDownFalse ? <CommonDropdown/>  : null}
      {children}
    </CardHeader>
  );
};

export default DashboardCommonHeader;
