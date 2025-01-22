"use client";
import React from "react";
import { Container } from "reactstrap";
import WidgetsCard from "./WidgetsCard";
import BarChartMain from "./BarChartMain";
import LiveChartSection from "./LiveChartSection";
import OthersChart from "./OthersChart";

const ChartContainer = () => {
  return (
    <Container fluid>
      <WidgetsCard />
      <BarChartMain />
      <LiveChartSection/>
      <OthersChart/>
    </Container>
  );
};

export default ChartContainer;
