import { CommonCardHeaderProp } from "@/Types/CommonTypes";
import React, { Fragment } from "react";
import { CardHeader } from "reactstrap";

const CommonCardHeader: React.FC<CommonCardHeaderProp> = ({ title, span, headClass, icon, tagClass }) => {
  return (
    <CardHeader className={headClass ? headClass : ""}>
      <h5 className={tagClass ? tagClass : ""}>{icon && icon}{title}</h5>
      {span && (
        <p className="f-m-light mt-1 fs-10">
          {span.map((data, index) => (
            <span key={index}>
              {data?.text} {data.code && <code>{data.code}</code>} {data.mark && <mark>{data.mark}</mark>}
            </span>
          ))}
        </p>
      )}
    </CardHeader>
  );
};

export default CommonCardHeader;
