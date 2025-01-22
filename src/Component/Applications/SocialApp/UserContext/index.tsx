import { Row, TabContent, TabPane } from "reactstrap";
import { SocialAppTabContentProp } from "@/Types/SocialAppType";
import TimelineTab from "./TimeLineTab";
import AboutTab from "./AboutTab";
import AllCards from "./AllCards";
import PhotosTab from "./PhotosTab";

const SocialAppTabContent :React.FC<SocialAppTabContentProp> = ({ activeTab }) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1}>
        <TimelineTab />
      </TabPane>
      <TabPane tabId={2}>
        <AboutTab />
      </TabPane>
      <TabPane tabId={3}>
        <Row>
          <AllCards />
        </Row>
      </TabPane>
      <TabPane tabId={4}>
        <Row>
          <PhotosTab />
        </Row>
      </TabPane>
    </TabContent>
  );
};

export default SocialAppTabContent;
