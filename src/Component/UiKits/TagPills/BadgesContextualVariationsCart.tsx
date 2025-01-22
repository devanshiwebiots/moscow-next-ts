import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgesContextualVariations } from "@/Constant";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { BadgeData, BadgetsContext } from "@/Data/Uikits/tag-pills";

const BadgesContextualVariationsCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="badges-custom-card">
        <CommonCardHeader title={BadgesContextualVariations} span={BadgeData} />
        <CommonTagAndPillsCardBody data={BadgetsContext} />
      </Card>
    </Col>
  );
};

export default BadgesContextualVariationsCard;
