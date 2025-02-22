import { ImagePath, StarColorTwo } from "@/Constant";
import { JobData } from "@/Data/Miscellaneous/JobSearch";
import { SimilarJobsCardsType } from "@/Types/JobSearchType";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";

const SimilarJobsCards:React.FC<SimilarJobsCardsType> = ({limit,jobClass,ribbon: ribbon,column}) => {
  return (
    <Row>
      {JobData.slice(0, 5).map((item) => (
        <Col
          className={`col-auto ${limit === item.id && column? "col-xl-12 xl-100": jobClass}`} key={item.id}>
          <Card className={`${item.ribbons && ribbon ? "ribbon-vertical-left-wrapper" : ""}`}>
            {item.ribbons ? (
              <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!ribbon && "d-none"}`}>
                <i className="icofont icofont-love"></i>
              </div>
            ) : (" ")}
            <div className="job-search">
              <CardBody>
                <div className="d-flex">
                  <img className="img-40 img-fluid m-r-20" src={`${ImagePath}/${item.logo}`} alt=""/>
                  <div className="flex-grow-1">
                    <h6>
                      <Link href={`/job_search/job_detail`}>{item.job_name}</Link>
                      {item.type === "new" ? (<Badge color="primary" className="pull-right">{item.badgeValue}</Badge>) : 
                      (<span className="pull-right">{item.type}</span>)}
                    </h6>
                    <p>
                      {item.job_area}, {item.job_city}
                      <Rating className="ms-1" fillColor={StarColorTwo} initialValue={Math.random() * 5} size={14}/>
                    </p>
                  </div>
                </div>
                <p>{item.Job_description}</p>
              </CardBody>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SimilarJobsCards;
