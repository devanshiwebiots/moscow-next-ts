import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { optionscandlestickchart } from "@/Data/Widgets/chart/ChartData";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const StockChart = () => {
  return (
    <Col sm='12' className='box-col-12'>
      <div className='donut-chart-widget'>
        <Card>
          <DashboardCommonHeader title='Stock Market' dropDownFalse />
          <CardBody>
            <div id='chart-widget13'>
              <ReactApexChart options={optionscandlestickchart} series={optionscandlestickchart.series} type={"line"} height={450} />
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default StockChart;
