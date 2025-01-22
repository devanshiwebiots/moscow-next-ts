import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { SubscriptionData } from "@/Data/Dashboard/Deafult_Dashboarddata";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const SubScription = () => {
  return (
    <Col xl='4' sm='6'>
      <Card className='earning-chart'>
        <DashboardCommonHeader title={"Subscripation"} />
        <CardBody className='py-0'>
          <h5 className='mt-2'>$2,249</h5>
          <ReactApexChart options={SubscriptionData} series={SubscriptionData.series} type='area' height={165} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SubScription;
