import { ApexOptions } from "apexcharts";

export const SalesChart: ApexOptions = {
  series: [
    {
      name: "Statistics",
      data: [20, 60, 50, 70, 40, 80, 20],
    },
    {
      name: "Statistics",
      data: [80, 40, 50, 30, 60, 20, 20],
    },
  ],
  chart: {
    type: "bar",
    height: 100,
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40px",
      borderRadius: 2,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: ["#1a5f7f", "#1a5f7f1a "],
  xaxis: {
    // show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    fixed: {
      enabled: false,
      position: "bottomRight",
      offsetX: 0,
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 992,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 915,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 848,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 816,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 770,
      options: {
        chart: {
          width: 100,
        },
      },
    },
    {
      breakpoint: 720,
      options: {
        chart: {
          width: 80,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 190,
        },
      },
    },
    {
      breakpoint: 440,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 400,
      options: {
        chart: {
          width: 130,
        },
      },
    },
    {
      breakpoint: 355,
      options: {
        chart: {
          width: 100,
        },
      },
    },
  ],
};

export const IncomeChart: ApexOptions = {
  series: [
    {
      name: "Statistics",
      data: [20, 60, 50, 70, 40, 80, 20],
    },
    {
      name: "Statistics",
      data: [80, 40, 50, 30, 60, 20, 20],
    },
  ],
  chart: {
    type: "bar",
    height: 100,
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40px",
      borderRadius: 2,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: ["#dd7031", "#dd70311a"],
  xaxis: {
    // show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    fixed: {
      enabled: false,
      position: "bottomRight",
      offsetX: 0,
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 992,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 915,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 848,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 816,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 770,
      options: {
        chart: {
          width: 100,
        },
      },
    },
    {
      breakpoint: 720,
      options: {
        chart: {
          width: 80,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 190,
        },
      },
    },
    {
      breakpoint: 440,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 400,
      options: {
        chart: {
          width: 130,
        },
      },
    },
    {
      breakpoint: 355,
      options: {
        chart: {
          width: 100,
        },
      },
    },
  ],
};

export const OrderCharts: ApexOptions = {
  series: [
    {
      name: "Statistics",
      data: [20, 60, 50, 70, 40, 80, 20],
    },
    {
      name: "Statistics",
      data: [80, 40, 50, 30, 60, 20, 20],
    },
  ],
  chart: {
    type: "bar",
    height: 100,
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40px",
      borderRadius: 2,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: ["#da9817", "#da98171a"],
  xaxis: {
    // show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    fixed: {
      enabled: false,
      position: "bottomRight",
      offsetX: 0,
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 992,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 915,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 848,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 816,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 770,
      options: {
        chart: {
          width: 100,
        },
      },
    },
    {
      breakpoint: 720,
      options: {
        chart: {
          width: 80,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 190,
        },
      },
    },
    {
      breakpoint: 440,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 400,
      options: {
        chart: {
          width: 130,
        },
      },
    },
    {
      breakpoint: 355,
      options: {
        chart: {
          width: 100,
        },
      },
    },
  ],
};

export const VisitorChart: ApexOptions = {
  series: [
    {
      name: "Statistics",
      data: [20, 60, 50, 70, 40, 80, 20],
    },
    {
      name: "Statistics",
      data: [80, 40, 50, 30, 60, 20, 20],
    },
  ],
  chart: {
    type: "bar",
    height: 100,
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "40px",
      borderRadius: 2,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: ["#0ea4ba", "#0ea4ba1a"],
  xaxis: {
    // show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    marker: {
      show: false,
    },
    fixed: {
      enabled: false,
      position: "bottomRight",
      offsetX: 0,
      offsetY: 0,
    },
  },
  responsive: [
    {
      breakpoint: 992,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 915,
      options: {
        chart: {
          width: 160,
        },
      },
    },
    {
      breakpoint: 848,
      options: {
        chart: {
          width: 140,
        },
      },
    },
    {
      breakpoint: 816,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 770,
      options: {
        chart: {
          width: 100,
        },
      },
    },
    {
      breakpoint: 720,
      options: {
        chart: {
          width: 80,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 190,
        },
      },
    },
    {
      breakpoint: 440,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 400,
      options: {
        chart: {
          width: 130,
        },
      },
    },
    {
      breakpoint: 355,
      options: {
        chart: {
          width: 100,
        },
      },
    },
  ],
};

export const OrderThisMonthchart: ApexOptions = {
  series: [
    {
      type: "bar",
      data: [300, 700, 200, 400, 570, 300, 700, 400],
    },
    {
      type: "bar",
      data: [500, 500, 280, 300, 400, 190, 500, 300],
    },
    {
      type: "line",
      data: [300, 700, 200, 400, 570, 300, 700, 400],
    },
  ],
  chart: {
    height: 300,
    toolbar: {
      show: false,
    },
  },
  markers: {
    size: 6,
    // strokeColor: "#ffffff",
    strokeWidth: 3,
    offsetX: -3,
    strokeOpacity: 1,
    fillOpacity: 1,
    hover: {
      size: 6,
    },
  },
  // hover: {
  //     size: 5,
  //     sizeOffset: 0,
  // },
  plotOptions: {
    bar: {
      // vertical: true,
      columnWidth: "60%",
      borderRadius: 6,
      dataLabels: {
        position: "top",
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
    offsetX: -6,
    style: {
      fontSize: "14px",
      fontWeight: 600,
      colors: ["#fff"],
    },
  },
  stroke: {
    show: true,
    width: [4, 4, 3],
    curve: "straight",
    colors: ["#ffffff", "#ffffff", "#1a5f7f"],
  },
  colors: ["#1a5f7f", "#dd7031"],
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug"],
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#3D434A",
      },
    },
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        series: [
          {
            type: "bar",
            data: [350, 180, 240, 470, 200],
          },
          {
            type: "bar",
            data: [500, 390, 280, 140, 290],
          },
          {
            type: "line",
            data: [350, 180, 240, 470, 200],
          },
        ],
      },
    },
    {
      breakpoint: 1200,
      options: {
        series: [
          {
            type: "bar",
            data: [350, 180, 240, 470, 200, 570, 300, 200],
          },
          {
            type: "bar",
            data: [500, 390, 280, 140, 290, 190, 390, 90],
          },
          {
            type: "line",
            data: [350, 180, 240, 470, 200, 570, 300, 200],
          },
        ],
        chart: {
          height: 320,
          toolbar: {
            show: false,
          },
        },
      },
    },
    {
      breakpoint: 550,
      options: {
        series: [
          {
            type: "bar",
            data: [350, 180, 240, 470],
          },
          {
            type: "bar",
            data: [500, 390, 280, 140],
          },
          {
            type: "line",
            data: [350, 180, 240, 470],
          },
        ],
      },
    },
  ],
};

export const GoalOverviewChart: ApexOptions = {
  series: [
    {
      name: " Our Goal ",
      type: "area",
      data: [50, 40, 48, 37, 50],
    },
    {
      name: " Our Goal ",
      type: "line",
      data: [40, 50, 35, 45, 45],
    },
  ],
  chart: {
    height: 235,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: [3, 2],
    dashArray: [0, 5],
  },
  fill: {
    gradient: {
      opacityFrom: [0.1, 0.7],
      gradientToColors:["#1a5f7f", "#dd7031"]    
    },
  },
  markers: {
    size: [5, 0],
    colors: ["#fff"],
    strokeColors: ["#1a5f7f", "#dd7031"],
    strokeWidth: [2, 0],
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 240,
        },
      },
    },
  ],
  // colors: ["#1a5f7f", "#dd7031"],
  colors: ["#1a5f7f", "#dd7031"],
};

export const OrderMonthChartData:ApexOptions = {
  series: [
    {
      name: 'series1',
      data: [42.5, 40, 36, 32, 28, 25, 22, 20, 18, 16.5, 15.5, 15, 15, 16, 18, 20, 23, 26, 30, 34, 38, 41.5, 45, 48, 51, 54, 56, 58, 59, 59, 58, 56.5, 54.5, 51.5, 48, 44],
    },
    {
      name: 'series2',
      data: [57, 58, 58, 57.5, 56.5, 55, 52.5, 50, 47, 43.5, 40, 36, 32, 28, 24, 20, 17, 15, 14.0, 14, 15, 17, 20, 24, 28, 32, 36, 40, 44, 48, 51.5, 54.5, 56.6, 58, 58.5, 58],
    },
  ],
  chart: {
    height: 310,
    width: '100%',
    type: 'line',
    offsetY: 12,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#1a5f7f", "#dd7031"],
  markers: {
    size: 5,
    strokeColors: '#fff',
    strokeWidth: 2,
    shape: 'circle',
    // radius: 2,
    hover: {
      size: 10,
      // strokeWidth: 20,
    },
  },
  stroke: {
    curve: 'straight',
    lineCap: 'butt',
    width: 3,
  },
  grid: {
    show: true,
    borderColor: 'var(--border-light)',
    padding: {
      top: -20,
      right: 10,
      bottom: 0,
      left: 12,
    },
  },
  yaxis: {
    tickAmount: 6,
    min: 0,
    max: 60,
    labels: {
      formatter: (value: any) => `${value}k`,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ],
    tickAmount: 12,
    labels: {
      offsetX: 10,
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }:any) {
      return `<div class="apex-tooltip"> 
                <span>
                    <span class="bg-secondary"> </span>
                      Selling: ${series[0][dataPointIndex]} K
                </span> 
                <span class="mt-2">
                    <span class="bg-primary"> </span>
                      Selling: ${series[1][dataPointIndex]} K
                </span> 
              </div>`;
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        series: [
          {
            name: 'series1',
            data: [42.5, 40, 36, 32, 28, 25, 22, 20, 18, 16.5, 15.5, 15, 15, 16, 18, 20, 23, 26, 30, 34, 38],
          },
          {
            name: 'series2',
            data: [57, 58, 58, 57.5, 56.5, 55, 52.5, 50, 47, 43.5, 40, 36, 32, 28, 24, 20, 17, 15, 14.0, 14, 15],
          },
        ],
        chart: {
          height: 290,
        },
      },
    },
  ],
};
