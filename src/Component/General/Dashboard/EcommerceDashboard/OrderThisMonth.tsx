import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { OrderThisMonthchart } from "@/Data/Dashboard/Ecommercechart"; 
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const OrderThisMonth = () => {
  return (
    <Col xl='5' md='6'>
      <Card>
        <DashboardCommonHeader title={"Order This Month"} />
        <CardBody>
          <ReactApexChart options={OrderThisMonthchart} series={OrderThisMonthchart.series} type='bar' height={295} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderThisMonth;
