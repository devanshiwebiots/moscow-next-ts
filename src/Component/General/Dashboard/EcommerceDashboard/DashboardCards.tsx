import { Saleschartdata } from "@/Data/Dashboard/EcommerceDashboarddata";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const DashboardCards = () => {
  return (
    <Row>
      {Saleschartdata.map((item) => (
        <Col xl='3' lg='3' md='6' sm='6' key={item.id}>
          <Card className='sale-chart'>
            <CardBody>
              <div className='d-flex'>
                <div className='flex-shrink-0'>
                  <div className='sale-detail'>
                    <div className={`icon ${item.bgColor}`}>{item.icon}</div>
                    <div className='sale-content'>
                      <h5 className={item.textColor}>{item.title}</h5>
                      <p>{item.value}</p>
                    </div>
                  </div>
                </div>
                <div className={`small-chart-view sales-chart ${item.id}`}>
                  <ReactApexChart options={item.chartdata} series={item.chartdata.series} type='bar' height={100} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default DashboardCards;
