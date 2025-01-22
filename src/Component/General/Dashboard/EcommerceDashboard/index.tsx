"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import DashboardCards from "./DashboardCards";
import ManageOrderTable from "./ManageOrderTable";
import OrderThisMonth from "./OrderThisMonth";
import ProductDelivery from "./ProductDelivery";
import GoalOverview from "./GoalOverview";
import RecentCustomer from "./RecentCustomer";
import OrderMonthChart from "./OrderMonthChart";
import RecentOrders from "./RecentOrders";

const EcommerceDashboardContainer = () => {
  return (
    <Container fluid className='dashboard_ecommerce'>
      <Row className='size-column'>
        <DashboardCards/>
        <ManageOrderTable/>
        <OrderThisMonth/>
        <ProductDelivery xl={4}/>
        <GoalOverview/>
        <RecentCustomer/>
         <OrderMonthChart/>
        <RecentOrders/>
      </Row>
    </Container>
  );
};

export default EcommerceDashboardContainer;
