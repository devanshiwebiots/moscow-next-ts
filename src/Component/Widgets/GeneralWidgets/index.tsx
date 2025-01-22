"use client";
import Activity from "@/Component/General/Dashboard/DefaultDashboard/Activity";
import Expenditures from "@/Component/General/Dashboard/DefaultDashboard/Expenditures";
import DashboardCards from "@/Component/General/Dashboard/EcommerceDashboard/DashboardCards";
import { Container, Row } from "reactstrap";
import SubScription from "./SubScription";
import OrderMonthChart from "@/Component/General/Dashboard/EcommerceDashboard/OrderMonthChart";
import ProductDelivery from "@/Component/General/Dashboard/EcommerceDashboard/ProductDelivery";
import RecentStatistics from "@/Component/General/Dashboard/DefaultDashboard/RecentStatistics";
import SaleCard from "./SalesVisitor/SalesCard";
import Visitorfull from "./Visitorfull";

const GeneralWidgetsContainer = () => {
  return (
    <Container fluid className='genral-widget'>
      <Row>
        <DashboardCards />
        <SubScription/>
        <Activity />
        <Expenditures xl={4}/>
        <OrderMonthChart/>
        <ProductDelivery xl={3}/>
        <RecentStatistics xl={4} />
        <SaleCard/>
        <Visitorfull/>
      </Row>
    </Container>
  );
};

export default GeneralWidgetsContainer;
