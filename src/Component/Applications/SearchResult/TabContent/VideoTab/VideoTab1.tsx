import { Col } from "reactstrap";
import { AllAbout, Href } from "@/Constant";
import PagesSort from "../Pages";
import Link from "next/link";
import { SearchTabData } from "@/Data/Applications/SearchResult";

const VideoTab1 = () => {
  return (
    <Col xxl="6">
      <h6 className="mb-2">{AllAbout}</h6>
      {SearchTabData.slice(0, 3).map((item) => (
        <div className="d-flex info-block" key={item.id}>
          <iframe className="me-3" width="200" height="100" src={item.videoLink} title="videos"></iframe>
          <div className="flex-grow-1">
            <Link href={Href}>{item.url}</Link>
            <h6>{item.title}</h6>
            <div className="star-ratings">
              <ul className="search-info">
                <li>{item.star}</li>
                <li>{item.vote}</li>
                <li>{item.news}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
      <PagesSort pageClass="start" />
    </Col>
  );
};

export default VideoTab1;