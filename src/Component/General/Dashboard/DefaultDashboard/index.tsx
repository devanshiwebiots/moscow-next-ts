"use client";
import { Container, Row } from "reactstrap";
import WelcomeBanner from "./WelcomeBanner";
import Activity from "./Activity";
import Expenditures from "./Expenditures";
import TopUsers from "./TopUsers";
import SubscriptionEarning from "./SubscriptionEarning";
import Teamactivity from "./Teamactivity";
import JobToday from "./JobToday";
import TotalGrowth from "./TotalGrowth";
import RecentStatistics from "./RecentStatistics";
import TransactionTable from "./TransactionTable";

const DefaultDashboardContainer = () => {
  return (
    <Container fluid className='dashboard_default'>
      <Row className='widget-grid'>
        <WelcomeBanner />
        <Activity />
        <Expenditures xl={3}/>
        <TopUsers />
        <SubscriptionEarning />
        <Teamactivity />
        <JobToday />
        <TotalGrowth />
        <RecentStatistics xl={5}/>
        <TransactionTable />
      </Row>
    </Container>
  );
};

export default DefaultDashboardContainer;
