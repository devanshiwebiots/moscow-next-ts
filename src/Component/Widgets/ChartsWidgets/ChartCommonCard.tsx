import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { Chartdata } from "@/Types/CommonTypes";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const ChartCommonCard: React.FC<Chartdata> = ({ headerTitle, chartData, types, height, colsize }) => {
  return (
    <Col xl={colsize} lg='12' className='box-col-6 xl-50'>
      <Card>
        <DashboardCommonHeader title={headerTitle} dropDownFalse />
        <CardBody className='chart-container'>
          <Row>
            <Col xs='12'>
              <ReactApexChart options={chartData} series={chartData.series} type={types} height={height} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ChartCommonCard;
