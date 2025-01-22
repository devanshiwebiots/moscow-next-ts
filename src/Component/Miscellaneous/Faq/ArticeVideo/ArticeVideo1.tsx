import { ArticleDataOne } from "@/Data/Miscellaneous/Faq";
import { Card, CardBody, Col, Row } from "reactstrap";

export const ArticeVideo1 = () => {
  return (
    <Col xl="4" md="6">
      <Row className="latest-articles">
        {ArticleDataOne.map((item, i) => (
          <Col sm="12" key={i}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  {item.iconClass}
                  <div className="flex-grow-1">
                    <h6 className="pb-2 f-w-600">{item.title}</h6>
                    <p>{item.description}</p> 
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
