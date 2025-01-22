import { Row } from "reactstrap";
import MonthlyHistoryChart from "./MonthlyHistoryChart";
import ProgressChart from "./ProgressChart";
import RadicalChart from "./RadicalChart";

const BarChartMain = () => {
  return (
    <Row>
      <MonthlyHistoryChart />
      <RadicalChart />
      <ProgressChart/>
    </Row>
  );
};

export default BarChartMain;
