import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import { optionsuserchart } from "@/Data/Widgets/chart/ChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const UsersChart = () => {
  return (
    <Col xl='7' lg='12' className='xl-50 box-col-12'>
    <Card>
      <DashboardCommonHeader title='Monthly Sales' dropDownFalse />
      <CardBody>
        <div className='chart-container column-container'>
          <ReactApexChart options={optionsuserchart} series={optionsuserchart.series} type={"bubble"} height={320} />
        </div>
      </CardBody>
    </Card>
  </Col>
  )
}

export default UsersChart