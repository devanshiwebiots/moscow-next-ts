import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import SVG from "@/CommonComponent/SVG";
import { RecentStatasticsData } from "@/Data/Dashboard/Deafult_Dashboarddata";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const RecentStatistics:React.FC<{xl:number}> = ({xl}) => {
  return (
    <Col xl={xl} md={6}>
      <Card>
        <DashboardCommonHeader title={"Recent Statistics"} />
        <CardBody className='pb-0'>
          <div className='recent-statistics'>
            <ListGroup horizontal>
              <ListGroupItem className="p-0 border-0">
                <div className='arrow-up'>
                  <SVG iconId='Arrow-Up' />
                </div>
                <span>$4.280</span>
              </ListGroupItem>
              <ListGroupItem className="p-0 border-0">
                <div className='arrow-down'>
                  <SVG iconId='Arrow-Down' />
                </div>
                <span>$1.530</span>
              </ListGroupItem>
            </ListGroup>
          </div>
        </CardBody>
          <ReactApexChart options={RecentStatasticsData} series={RecentStatasticsData.series} type='area' height={270} />
      </Card>
    </Col>
  );
};

export default RecentStatistics;
