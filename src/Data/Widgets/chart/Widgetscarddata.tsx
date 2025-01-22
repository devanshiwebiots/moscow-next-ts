import { Height } from "@/Constant";
import { optionsCircle, optionsProgress1, optionsProgress2, optionsProgress3, optionsProgress4, optionsProgress5, optionsannotation, optionscryptopricechart, optionsproductchart, optionsturnoverchart, widgetscardchart1, widgetscardchart2, widgetscardchart3 } from "./ChartData";

export const WidgetCardData = [
  {
    title: "Total Sale",
    value: "$3654.00",
    comparisonText: "Compare to last month",
    percentage: "+65%",
    chartId: "chart-widget1",
    chartPlaceholder: "",
    chartData: widgetscardchart1,
  },
  {
    title: "Total Project",
    value: "12569",
    comparisonText: "Compare to last month",
    percentage: "+65%",
    chartId: "chart-widget2",
    chartPlaceholder: "chart-widget-top-second",
    chartData: widgetscardchart2,
  },
  {
    title: "Total Product",
    value: "93M",
    comparisonText: "Compare to last month",
    percentage: "+65%",
    chartId: "chart-widget3",
    chartPlaceholder: "chart-widget-top-third",
    chartData: widgetscardchart3,
  },
];

export const chartCardData = [optionsProgress1, optionsProgress2, optionsProgress3, optionsProgress4, optionsProgress5];


export const Commonchartdata = [
  {
    headerTitle: 'Live Products',
    chartId: 'chart-widget6',
    chartData:optionsproductchart,
    type:'area',
    Height:320,
    colsize:7
  },
  {
    headerTitle: 'Turn over',
    chartId: 'chart-widget7',
    chartData:optionsturnoverchart,
    type:'area',
    Height:300,
    colsize:5,     
  },
  {
    headerTitle: 'Cryptocurrency Prices',
    chartId: 'chart-crypto',
    chartData:optionscryptopricechart,
    type:'area',
    Height:400,
    colsize:6,     
  },
  {
    headerTitle: 'Crypto Annotations',
    chartId: 'crypto-annotation',
    chartData:optionsannotation,
    type:'line',
    Height:400,
    colsize:6,     
  }
]
