import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { OrderMonthChartData } from "@/Data/Dashboard/Ecommercechart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const OrderMonthChart = () => {
  return (
    <Col xl='5' md='6'>
      <Card>
        <DashboardCommonHeader title={"Order This Month"} />
        <CardBody>
          <ReactApexChart options={OrderMonthChartData} series={OrderMonthChartData.series} type='line' height={285} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderMonthChart;
