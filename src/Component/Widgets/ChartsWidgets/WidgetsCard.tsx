import { WidgetCardData } from "@/Data/Widgets/chart/Widgetscarddata";
import ReactApexChart from "react-apexcharts";
import { Card, Col, Row } from "reactstrap";

const WidgetsCard = () => {
  return (
    <Row>
      {WidgetCardData.map((widget, index) => (
        <Col key={index} xl='4' md='12' className='box-col-12'>
          <Card className='o-hidden'>
            <div className='chart-widget-top'>
              <Row className='card-body pb-0 m-0'>
                <Col xl='9' lg='8' className='p-0'>
                  <h5 className='mb-2'>{widget.title}</h5>
                  <h5 className='f-w-600'>{widget.value}</h5>
                  <span>{widget.comparisonText}</span>
                </Col>
                <Col xl='3' lg='4' className='text-end p-0'>
                  <h6 className='txt-success'>{widget.percentage}</h6>
                </Col>
              </Row>
              <ReactApexChart options={widget.chartData} series={widget.chartData.series} type='area' height={200} />
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default WidgetsCard;
