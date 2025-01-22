import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { TotalGrowthData } from "@/Data/Dashboard/Deafult_Dashboarddata";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const TotalGrowth = () => {
  return (
    <Col xl='7' md='6'>
      <Card>
        <DashboardCommonHeader title={"Our Total Growth"} />
        <CardBody>
          <ReactApexChart options={TotalGrowthData} series={TotalGrowthData.series} type='line' height={270} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalGrowth;
