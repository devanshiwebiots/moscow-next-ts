import { ApexOptions } from "apexcharts";

export const totalLikesOption: ApexOptions = {
  series: [
    {
      name: "series2",
      data: [0, 40, 25, 80, 35, 40, 38, 50, 35, 70, 40, 100, 20],
    },
  ],
  chart: {
    height: 105,
    type: "area",
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["var(--theme-default)"],
  fill: {
    type: ["gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["var(--theme-default)"],
      inverseColors: true,
      opacityFrom: 0.6,
      opacityTo: 0,
      stops: [0, 100, 100, 100],
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }: any) {
      return '<div class="apex-tooltip p-2">' + "<span>" + '<span class="bg-primary">' + "</span>" + "Total-Sales" + "<h3>" + "$" + series[seriesIndex][dataPointIndex] + "<h3/>" + "</span>" + "</div>";
    },
  },
};

export const TOtalVisitorOptions: ApexOptions = {
  series: [
    {
      name: "series2",
      data: [60, 50, 114, 65, 56, 93, 50, 72, 60, 50, 114, 65, 56],
    },
  ],
  colors: ["#e87f2433", "#e87f2433", "#e87f2433", "#e87f2433", "#dd7031", "#dd7031", "#dd7031", "#dd7031", "#dd7031", "#e87f2433", "#e87f2433", "#e87f2433", "#e87f2433"],
  chart: {
    height: 105,
    type: "bar",
    offsetY: 25,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      distributed: true,
      barHeight: "35%",
      dataLabels: {
        position: "top",
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }: any) {
      return '<div class="apex-tooltip p-2">' + "<span>" + '<span class="bg-primary">' + "</span>" + "Total-Visitors" + "<h3>" + "$" + series[seriesIndex][dataPointIndex] + "<h3/>" + "</span>" + "</div>";
    },
  },
};


export var Visitorfulldata:ApexOptions = {
  series: [
    {
      name: "Active",
      data: [18, 50, 65, 18, 28, 70, 15, 35],
    },
    {
      name: "Bounce",
      data: [35, 70, 30, 60, 25, 45, 50, 50],
    },
  ],
  chart: {
    type: "bar",
    height: 220,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 6,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)",
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  colors: ["var(--theme-secondary)", "var(--theme-default)"],
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
    tickAmount: 4,
    tickPlacement: "between",
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    labels: {
      style: {
        fontFamily: "Rubik, sans-serif",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Rubik, sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    labels: {
      colors: "var(--chart-text-color)",
    },
    itemMargin: {
      horizontal: 10,
    },
  },
  responsive: [
    {
      breakpoint: 1366,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        grid: {
          padding: {
            right: 0,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        grid: {
          padding: {
            right: 0,
          },
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "60%",
          },
        },
        grid: {
          padding: {
            right: 5,
          },
        },
      },
    },
  ],
};