import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { GoalOverviewChart } from "@/Data/Dashboard/Ecommercechart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, ListGroup } from "reactstrap";

const GoalOverview = () => {
  return (
    <Col xl='4' md='6'>
      <Card className='goal-overview'>
        <DashboardCommonHeader title={"Our Goal Overview"} />
        <CardBody>
          <ReactApexChart options={GoalOverviewChart} series={GoalOverviewChart.series} type='area' height={235} />
          <ListGroup className='goal-list' horizontal>
            <li>
              <h4>65%</h4>
              <span>Completed Goal</span>
            </li>
            <li>
              <h4>96%</h4>
              <span>Expected Goal</span>
            </li>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GoalOverview;
