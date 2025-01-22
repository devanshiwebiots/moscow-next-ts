import { SalesCardData } from "@/Data/Widgets/general/Genraldata";
import { Fragment } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const SaleCard = () => {
  return (
    <Fragment>
      {SalesCardData.map((data, index) => (
        <Col xl='3' sm='6' key={index}>
          <Card className='overflow-hidden'>
            <CardBody className={`total-sale ${data.type} px-0`}>
              <Row className='d-flex align-items-center gap-2'>
                <Col className={`bg-icon bg-light-${data.iconBg}`} sm='auto'>
                  <div className={`flex-shrink-0 bg-light-${data.iconBg}`}>
                    <svg>
                      <use href={`../assets/svg/icon-sprite.svg#${data.icon}`}></use>
                    </svg>
                  </div>
                </Col>
                <Col className='flex-grow-1'>
                  <div className='d-flex align-items-center'>
                    <h4>{data.amount}</h4>
                    <span className='text-truncate'>{data.label}</span>
                    <Col className='total-icon mt-1'>
                      <p className={`mb-0 up-arrow bg-light-success me-1`}>
                        <i className='fa fa-arrow-up text-success'></i>
                      </p>
                      <span className='f-w-500 font-success me-1'>{data.percentage} </span>
                      <h6>Than last week</h6>
                    </Col>
                  </div>
                </Col>
              </Row>
              {data.charttype === "area" ? (
                <Fragment>
                  <ReactApexChart options={data.chartData} series={data.chartData.series} type={"area"} height={105} />
                </Fragment>
              ) : (
                <Fragment>
                  <ReactApexChart options={data.chartData} series={data.chartData.series} type={"bar"} height={105} />
                </Fragment>
              )}
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default SaleCard;
