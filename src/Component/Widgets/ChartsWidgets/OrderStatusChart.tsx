import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { optionsColumn, optionsLine } from "@/Data/Widgets/chart/ChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const OrderStatusChart = () => {
  return (
    <Col xl='7' lg='12' className='box-col-6'>
      <Card>
        <DashboardCommonHeader title='Order Status' dropDownFalse />
        <CardBody>
          <div className='chart-container'>
            <div id='linechart'>
              <ReactApexChart options={optionsLine} series={optionsLine.series} type={"line"} height={350} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatusChart;
