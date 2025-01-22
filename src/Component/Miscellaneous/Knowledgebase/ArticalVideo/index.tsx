import { Col, Row } from "reactstrap";
import { LatestArticles } from "@/Constant";
import { ArticalAndVideo1 } from "./ArticalAndVideo1";
import ArticalAndVideo2 from "./ArticalAndVideo2";
import ArticalAndVideo3 from "./ArticalAndVideo3";

const ArticalAndVideo = () => {
  return (
    <Col lg='12'>
      <div className='header-faq'>
        <h5 className='mb-0'>{LatestArticles}</h5>
      </div>
      <Row>
        <ArticalAndVideo1 />
        <ArticalAndVideo2 />
        <ArticalAndVideo3/>
      </Row>
    </Col>
  );
};

export default ArticalAndVideo;
