import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { MoscowTheme } from "@/Constant";
import { CommonCardProp } from "@/Types/BonusUiType";

const CommonCard: React.FC<CommonCardProp> = ({ data }) => {
  return (
    <>
      <Col xl="4" sm={data.sm}>
        <Card className="height-equal">
          <CardHeader className={`${data.headerClass} pb-20`}>
            <h5 className={data.headingClass}>{data.title}</h5>
          </CardHeader>
          <CardBody className={data.bodyClass}>
            <h5 className="pb-2">{data.text}</h5>
            <p className="mb-0">{data.span}</p>
          </CardBody>
          <CardFooter className={data.footerClass}>
            <h6 className="mb-0 text-end">{MoscowTheme}</h6>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default CommonCard;
