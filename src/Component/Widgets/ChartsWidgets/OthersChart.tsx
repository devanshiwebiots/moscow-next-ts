import React from "react";
import { Row } from "reactstrap";
import StockChart from "./StockChart";
import StatusChart from "./StatusChart";
import OrderStatusChart from "./OrderStatusChart";
import MonthlySalesChart from "./MonthlySalesChart";
import UsersChart from "./UsersChart";

const OthersChart = () => {
  return (
    <Row>
      <StockChart />
      <StatusChart/>
      <OrderStatusChart/>
      <MonthlySalesChart/>
      <UsersChart/>
    </Row>
  );
};

export default OthersChart;
