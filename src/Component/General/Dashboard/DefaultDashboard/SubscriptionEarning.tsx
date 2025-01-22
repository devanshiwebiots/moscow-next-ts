import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { EarningChartData, SubscriptionData } from "@/Data/Dashboard/Deafult_Dashboarddata";

const SubscriptionEarning = () => {
  return (
    <Col xl='3' sm='6'>
      <Row>
        <Col xl='12'>
          <Card className='earning-chart'>
            <DashboardCommonHeader title={"Earnings"} />
            <CardBody className='pt-0 earning-chart'>
              <h5 className='mt-2'>$8,252</h5>
              <ReactApexChart options={EarningChartData} series={EarningChartData.series} type='radialBar' />
            </CardBody>
          </Card>
        </Col>
        <Col xl='12'>
          <Card className='earning-chart'>
            <DashboardCommonHeader title={"Subscripation"} />
            <CardBody className='py-0 subscripation-chart'>
              <h5 className='mt-2'>$2,249</h5>  
              <ReactApexChart options={SubscriptionData} series={SubscriptionData.series} type='area' height={135} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default SubscriptionEarning;
