import React from 'react'
import { Row } from 'reactstrap';
import ChartCommonCard from './ChartCommonCard';
import { Commonchartdata } from '@/Data/Widgets/chart/Widgetscarddata';
 

const LiveChartSection = () => {
  return (
    <Row>
    {Commonchartdata.map((item, index) => (
      <ChartCommonCard
        key={index}
        headerTitle={item.headerTitle}
        chartId={item.chartId}
        chartData={item.chartData}
        types={item.type}
        height={item.Height}
        colsize={item.colsize}
      />
    ))}
  </Row>
  )
}

export default LiveChartSection