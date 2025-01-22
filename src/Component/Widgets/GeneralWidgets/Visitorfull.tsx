import { CommonDropdown } from "@/CommonComponent/CommonDropdown/CommonDropdown";
import SVG from "@/CommonComponent/SVG";
import { Visitorfulldata } from "@/Data/Widgets/general/GenaralChartData";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const Visitorfull = () => {
  return (
    <Col xl='6' md='12'>
      <Card className='visitor-card'>
        <CardHeader className='card-no-border pb-0'>
          <div className='header-top d-flex justify-content-between align-items-center'>
            <h5 className='f-w-600 m-0'>
              Visitors
              <span className='f-14 font-primary f-w-500 ms-1'>
                <SVG iconId='user-visitor' />
                (+2.8)
              </span>
            </h5>
            <div className='card-header-right-icon'>
              <CommonDropdown />
            </div>
          </div>
        </CardHeader>
        <CardBody className='pt-3'>
          <div className='visitors-container'>
            <ReactApexChart options={Visitorfulldata} series={Visitorfulldata.series} type={"bar"} height={220} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Visitorfull;
