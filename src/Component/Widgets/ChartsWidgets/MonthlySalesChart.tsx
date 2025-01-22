import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { optionssaleschart } from "@/Data/Widgets/chart/ChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const MonthlySalesChart = () => {
  return (
    <Col xl='5' lg='12' className='xl-50 box-col-6'>
      <Card>
        <DashboardCommonHeader title='Monthly Sales' dropDownFalse />
        <CardBody>
          <div className='chart-container column-container'>
            <ReactApexChart options={optionssaleschart} series={optionssaleschart.series} type={"radar"} height={300} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MonthlySalesChart;
