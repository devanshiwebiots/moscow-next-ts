import { Href } from "@/Constant";
import { chartCardData } from "@/Data/Widgets/chart/Widgetscarddata";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const ProgressChart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Col xl='6' lg='12' className='box-col-6 xl-50'>
      <Card>
        <CardHeader>
          <div className='header-top'>
            <h5>Order Status</h5>
            <div className='card-header-right-icon'>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret color='btn' className='border-0 pe-0'>
                  Today
                </DropdownToggle>
                <DropdownMenu end className='dropdown-menu-end'>
                  <DropdownItem tag='a' href={Href}>{`${"Today"}`}</DropdownItem>
                  <DropdownItem tag='a' href={Href}>{`${"Tomorrow"}`}</DropdownItem>
                  <DropdownItem tag='a' href={Href}>{`${"Yesterday"}`}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </CardHeader>

        <CardBody className='chart-container progress-chart'>
          {chartCardData.map((item, i) => {
            return <ReactApexChart options={item} series={item.series} type={"bar"} height={70} />;
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProgressChart;
