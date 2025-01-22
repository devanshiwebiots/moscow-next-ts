import { Card, CardBody } from "reactstrap";
import DefaultCustomStateButtons from "./DefaultCustomStateButtons";
import { CustomButtons } from "@/Constant";
import { CustomButtonsSpan, CustomStateDataList } from "@/Data/Buttons/DefaultStyle";
import CommonCardHeading from "../../CommonButtons/CommonCardHeading";

const DefualtCustomStateButton = () => {
  return (
    <Card>
      <CommonCardHeading smallHeading={CustomButtons} span={CustomButtonsSpan} />
      <CardBody className="btn-showcase">
        {CustomStateDataList.map((item, index) => (
          <DefaultCustomStateButtons data={item} key={index} />
        ))}
      </CardBody>
    </Card>
  );
};

export default DefualtCustomStateButton;
