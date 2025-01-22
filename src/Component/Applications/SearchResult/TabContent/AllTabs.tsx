import { Col, Row } from "reactstrap";
import { SearchPixelStrap } from "@/Constant";
import InformationCommon from "./common/InformationCommon";
import { SearchTabData } from "@/Data/Applications/SearchResult";
import SearchBanner from "./SearchBanner";
import PagesSort from "./Pages";

const AllTabs = () => {
  return (
    <Row>
      <h6 className='mb-2'>{SearchPixelStrap}</h6>
      <Col xxl='6' xl='6' className='box-col-12'>
        {SearchTabData.map((item, i) => (
          <InformationCommon item={item} key={i} />
        ))}
      </Col>
      <Col xxl='6' xl='6' className='box-col-12'>
        {SearchTabData.map((item, i) => (
          <InformationCommon item={item} key={i} />
        ))}
      </Col>
      <PagesSort pageClass='end' />
    </Row>
  );
};
export default AllTabs;
