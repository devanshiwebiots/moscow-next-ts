import { ArcElement, BarController, BarElement, CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, RadialLinearScale, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarController, BarElement, ArcElement, RadialLinearScale);

const primary = "var(--theme-default)";
const secondary = "var(--theme-secondary)";

export const ChartJsBarChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(26, 95, 127, 0.4)",
      borderColor: primary,
      highlightFill: "rgba(26, 95, 127, 0.6)",
      highlightStroke: primary,
      borderWidth: 2,
      data: [35, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgba(221, 112, 49, 0.4)",
      borderColor: secondary,
      highlightFill: "rgba(221, 112, 49, 0.6)",
      highlightStroke: secondary,
      data: [28, 48, 40, 19, 86, 27, 90],
      borderWidth: 2,
    },
  ],
};

export const ChartJsBarChartDataOption = {
  responsive: true,
  legend: {
    display: false,
  },
};

export const LineGraphChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      fill: true,
      label: "My First dataset",
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: secondary,
      backgroundColor: "rgba(221, 112, 49, 0.7)",
      borderWidth: 2,
    },
    {
      fill: true,
      data: [10, 59, 80, 81, 56, 55, 40],
      label: "My Second dataset",
      borderColor: primary,
      backgroundColor: "rgba(26, 95, 127, 0.6)",
      borderWidth: 2,
    },
  ],
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
  },
};

export const LineGraphChartDataOption = {
  maintainAspectRatio: true,
  legend: {
    display: false,
  },
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

export const RadarGraphChartData = {
  labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
  datasets: [
    {
      label: "My First Dataset",
      data: [12, 3, 5, 18, 7],
      fill: true,
      backgroundColor: "rgba(26, 95, 127, 0.4)",
      borderColor: primary,
      borderWidth: 1,
      pointColor: primary,
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderWidth: 2,
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
  },
};

export const LineChartData = {
  labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
  datasets: [
    {
      fill: true,
      backgroundColor: "rgba(81, 187, 37, 0.2)",
      borderColor: primary,
      pointColor: primary,
      data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
      borderWidth: 2,
    },
    {
      fill: true,
      backgroundColor: "rgba(221, 112, 49, 0.3)",
      pointColor: secondary,
      borderColor: secondary,
      data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
      borderWidth: 2,
    },
    {
      fill: true,
      backgroundColor: "rgba(26, 95, 127, 0.3)",
      borderColor: primary,
      pointColor: primary,
      data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
      borderWidth: 2,
    },
  ],
};

export const LineChartDataOption = {
  maintainAspectRatio: true,
  animation: {
    duration: 0,
  },
  scaleShowVerticalLines: false,
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: false,
    },
  },
};

export const DoughnutChartData = {
  labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["rgba(26, 95, 127, 1)", "rgba(221, 112, 49, 1)", "#51bb25"],
    },
  ],
};

export const DoughnutChartDataOption = {
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: false,
    },
  },
};

export const PolarChartData = {
  labels: ["Download Sales", "In-Store Sales", "Mail Sales", "Telesales", "Corporate Sales"],
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: ["rgba(26, 95, 127, 1)", "#f8d62b", "#51bb25", "#a927f9", "rgba(221, 112, 49, 1)"],
    },
  ],
};

export const PolarChartDataOption = {
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: false,
    },
  },
};
