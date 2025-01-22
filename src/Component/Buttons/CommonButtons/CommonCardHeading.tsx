import { CommonCardHeadingPropsType } from "@/Types/ButtonType";
import { Fragment } from "react";
import { CardHeader } from "reactstrap";

const CommonCardHeading: React.FC<CommonCardHeadingPropsType> = ({ headingClassName, smallHeading, Heading, span, span2, bigHeadingClassName }) => {
  return (
    <CardHeader className={`${headingClassName ? headingClassName : ""}`}>
      {smallHeading ? <h5>{smallHeading}</h5> : <h5 className={bigHeadingClassName ? bigHeadingClassName : ""}>{Heading}</h5>}
      <span> 
      {span &&
        span.map((data, index) => (
          <Fragment key={index}>
           {data?.text} {data.code && <code>{data.code}</code>}
          </Fragment>
        ))}
        </span>
      {span2 && <span dangerouslySetInnerHTML={{ __html: span2 }} />}
    </CardHeader>
  );
};

export default CommonCardHeading;