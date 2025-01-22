import DashboardCommonHeader from "@/CommonComponent/CommonDropdown/DashboardCommonHeader";
import SVG from "@/CommonComponent/SVG";
import { ExpendituresChart } from "@/Data/Dashboard/Deafult_Dashboarddata";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";

const Expenditures:React.FC<{xl:number}> = ({xl}) => {
  return (
    <Col xl={xl} md='6' className='expenses-card'>
      <Card className='earning-card'>
        <DashboardCommonHeader title={"Total Expenditures"} />
        <CardBody className='pb-0 px-0'>
          <Row>
            <Col xxl='7' xl='12' lg='8' md='7' sm='8' xs='12' className='box-col-12'>               
                <ReactApexChart options={ExpendituresChart} series={ExpendituresChart.series} type='bar' height={170} />               
            </Col>
            <Col xl='5' lg='4' md='5' sm='4' className='earning-content'>
              <div className='total-header p-2 pt-0'>
                <h2 className='mb-2'>$ 16,842</h2>
                <div className='d-flex'>
                  <span className='bg-light-success'>
                    <SVG iconId='up-arrow' />
                  </span>
                  <h6 className='font-success'>+ 40.09%</h6>
                </div>
                <span>Than last week</span>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Expenditures;
