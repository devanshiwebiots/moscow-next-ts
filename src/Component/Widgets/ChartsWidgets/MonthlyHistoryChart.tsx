import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { optionscolumnchart } from "@/Data/Widgets/chart/ChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const MonthlyHistoryChart = () => {
  return (
    <Col md={12} className='box-col-12'>
      <Card className='o-hidden'>
        <DashboardCommonHeader title='Monthly History' dropDownFalse />
        <div className='bar-chart-widget'>
          <CardBody className='bottom-content'>
            <Row>
              <Col xs='12'>
                <div id='chart-widget4'>
                  <ReactApexChart options={optionscolumnchart} series={optionscolumnchart.series} type='bar' height={395} />
                </div>
              </Col>
            </Row>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};
export default MonthlyHistoryChart;
