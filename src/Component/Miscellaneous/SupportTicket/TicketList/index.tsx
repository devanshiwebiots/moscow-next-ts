import { Row, Col, Card, CardBody, Progress } from "reactstrap";
import CountUp from "react-countup";
import { TicketData } from "@/Data/Miscellaneous/SupportTicket";
import ProfitAndLoss from "./ProfitAndLoss";

const TicketList = () => {
  return (
    <Row>
      {TicketData.map((item, index) => (
        <Col xl='4' md='6' className='box-col-4' key={index}>
          <Card className={`ecommerce-widget ${item.bgclass}`}>
            <CardBody className='support-ticket-font'>
              <Row>
                <Col xs='5'>
                  <span>{item.title}</span>
                  <h5 className='total-num counter'>
                    <CountUp end={item.num} delay={1} />
                  </h5>
                </Col>
                <ProfitAndLoss />
              </Row>
              <Progress animated className={`mt-3 sm-progress-bar progress-striped-${item.class}`} value={75} />
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default TicketList;
