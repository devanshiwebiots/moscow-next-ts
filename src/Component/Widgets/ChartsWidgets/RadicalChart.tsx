import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { optionsCircle } from "@/Data/Widgets/chart/ChartData";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const RadicalChart = () => {
  return (
    <Col xl='6' lg='12' className='box-col-6 xl-50'>
      <Card>
        <DashboardCommonHeader title={'Skill Status'} />
        <CardBody className='chart-container'>
          <ReactApexChart options={optionsCircle} series={optionsCircle.series} type={'radialBar'} height={350} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadicalChart;
