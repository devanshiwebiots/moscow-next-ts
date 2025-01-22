import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { optionsColumn } from "@/Data/Widgets/chart/ChartData";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const StatusChart = () => {
  return (
    <Col xl='5' lg='12' className='box-col-12'>
      <Card>
        <DashboardCommonHeader title='Finance' dropDownFalse />
        <CardBody>
          <div className='chart-container column-container'>
            <ReactApexChart options={optionsColumn} series={optionsColumn.series} type={"line"} height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatusChart;
