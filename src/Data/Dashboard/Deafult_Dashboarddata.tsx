import { ApexOptions } from "apexcharts";

export const activities = [
  {
    imgSrc: "/dashboard/activity/1.jpg",
    title: "Study application, Jim Smith",
    date: "Jan 04 20 11:24 PM at Tame",
    timeAgo: "14m Ago",
  },
  {
    imgSrc: "/dashboard/activity/2.jpg",
    title: "Fresh email was added",
    date: "Jan 03 20 02:18 PM at Fresno",
    timeAgo: "22m Ago",
  },
  {
    imgSrc: "/dashboard/activity/3.jpg",
    title: "Submit review (504)236-7302",
    date: "Jan 04 20 08:40 PM at Iris",
    timeAgo: "30m Ago",
  },
];

export const TopusersData = [
  {
    imgSrc: "/dashboard/user/01.png",
    name: "Breno Ribeiro",
    location: "Texas",
    amount: "$240.00",
    status: "Completed",
    statusClass: "success",
  },
  {
    imgSrc: "/dashboard/user/02.png",
    name: "Vitor Souza",
    location: "Texas",
    amount: "$584.00",
    status: "Completed",
    statusClass: "success",
  },
  {
    imgSrc: "/dashboard/user/03.png",
    name: "Luiza Castro",
    location: "Texas",
    amount: "$986.00",
    status: "Pending",
    statusClass: "warning",
  },
  {
    imgSrc: "/dashboard/user/04.png",
    name: "Lara Araujo",
    location: "Texas",
    amount: "$456.00",
    status: "Canceled",
    statusClass: "danger",
  },
  {
    imgSrc: "/dashboard/user/05.png",
    name: "Vitor Alves",
    location: "Texas",
    amount: "$653.00",
    status: "Completed",
    statusClass: "success",
  },
  {
    imgSrc: "/dashboard/user/06.png",
    name: "Diego Lima",
    location: "Texas",
    amount: "$254.00",
    status: "Completed",
    statusClass: "success",
  },
  {
    imgSrc: "/dashboard/user/07.png",
    name: "Danilo Costa",
    location: "Texas",
    amount: "$351.00",
    status: "Canceled",
    statusClass: "danger",
  },
];

export const TeamActivitiesData = [
  {
    imgSrc: "/dashboard/user/8.png",
    name: "Alex Castro",
    time: "6 min ago",
    activity: "Alex got into the warehouse."
  },
  {
    imgSrc: "/dashboard/user/9.png",
    name: "Arthur Castro",
    time: "10 min ago",
    activity: "Arthur has completed Mr. Williams' task."
  },
  {
    imgSrc: "/dashboard/user/10.png",
    name: "Sofia Dias",
    time: "12 min ago",
    activity: "Esther has changed his to active, now."
  },
  {
    imgSrc: "/dashboard/user/11.png",
    name: "Luiz Lima",
    time: "16 min ago",
    activity: "Luiz has updated his status to active currently."
  },
  {
    imgSrc: "/dashboard/user/12.png",
    name: "Aline Souza",
    time: "18 min ago",
    activity: "Aline has completed both old and new tasks."
  }
];

export const JobData = [
  { count: 40, label: 'Total Jobs', bgColor: 'primary', icon: 'job-bag' },
  { count: 30, label: 'Employees', bgColor: 'secondary', icon: 'employees' },
  { count: 40, label: 'Hours of work', bgColor: 'warning', icon: 'hours-work' }
];

export const JobtableData = [
  { time: '08:AM', job: 'Upkeep', company: 'Apple Inc.', employeeImg: '/dashboard/user/1.png', employeeName: 'Isabelle Lima' },
  { time: '10:AM', job: 'General', company: 'Hewlett packard', employeeImg: '/dashboard/user/2.png', employeeName: 'Lara Melo' },
  { time: '04:AM', job: 'Cleaning', company: 'Microsoft', employeeImg: '/dashboard/user/3.png', employeeName: 'Martim Sous' }
];

export const TransactionsData = [
  {
    id: 1,
    name: 'Ladies Bag',
    delivery: '₹44.55 delivery',
    date: '05 Mar 2024',
    time: 'In 4 Days',
    income: '-$40',
    progress: 60,
    status: 'Credit Card',
    statusColor: 'primary',
    image: '/dashboard/product/4.png'
  },
  {
    id: 2,
    name: 'Sunglasses',
    delivery: 'Free delivery',
    date: '20 Jan 2024',
    time: 'in 2 Months',
    income: '+$562',
    progress: 60,
    status: 'Paypal',
    statusColor: 'secondary',
    image: '/dashboard/product/5.png'
  },
  {
    id: 3,
    name: 'Nike Sports NK',
    delivery: 'Free delivery',
    date: '22 Feb 2024',
    time: 'In 2 Days',
    income: '+$546',
    progress: 60,
    status: 'Paypal',
    statusColor: 'info',
    image: '/dashboard/product/3.png'
  },
  {
    id: 4,
    name: 'Cotton T-shirt',
    delivery: '₹561.85 delivery',
    date: '25 Mar 2024',
    time: 'In 3 Days',
    income: '-$685',
    progress: 60,
    status: 'Credit Card',
    statusColor: 'warning',
    image: '/dashboard/product/6.png'
  }
];

export const TotalGrowthData:ApexOptions = {
  series: [
    {
      name: "Daily",
      type: "column",
      data: [0, 20, 8, 22, 8, 20, 8, 22, 8, 20, 8, 22],
    },
    {
      name: "Weekly",
      type: "area",
      data: [0, 12, 15, 25, 13, 24, 20, 26, 16, 22, 16, 0],
    },
    {
      name: "Monthly",
      type: "line",
      data: [0, 30, 25, 22, 35, 30, 40, 30, 39, 20, 34, 0],
    },
  ],
  chart: {
    height: 270,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth",
    dashArray: [0, 0, 4],
  },
  grid: {
    show: true,
    borderColor: "#1a5f7f",
    strokeDashArray: 3,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: -140,
      bottom: -13,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "1%",
    },
  },
  colors: ["#1a5f7f", "#dd7031", "#1a5f7f"],
  fill: {
    type: ["gradient", "gradient", "solid"],
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.4,
      stops: [100, 100, 100],
    },
  },
  labels: ["Mon", " ", "Tue", " ", "Wed", " ", "Thu", " ", "Fri", " ", "Sat", "Sun"],
  markers: {
    size: [0, 4, 0],
  },
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
    min: 0,
    tickAmount: 6,
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
  responsive: [
    {
      breakpoint: 1300,
      options: {
        chart: {
          height: 280,
        },
      },
    },
    {
      breakpoint: 1362,
      options: {
        chart: {
          height: 280,
        },
        series: [
          {
            name: "Daily",
            type: "column",
            data: [],
          },
          {
            name: "Weekly",
            type: "area",
            data: [0, 12, 15, 25, 13, 24, 20, 26],
          },
          {
            name: "Monthly",
            type: "line",
            data: [0, 30, 25, 22, 35, 30, 40, 30],
          },
        ],
      },
    },
  ],
};

export const ExpendituresChart: ApexOptions = {
  series: [
    {
      name: "Earning",
      data: [92, 64, 43, 80, 58, 92, 46, 76, 80, 30, 50],
    },
  ],
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
    height: 170,
    stacked: true,
  },
  states: {
    hover: {
      filter: {
        type: "darken",
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 3,
      columnWidth: "35%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
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
    show: false,
  },
  fill: {
    opacity: 1,
    colors: ["#dd7031", "#F2F5FA"],
  },
  legend: {
    show: false,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return '<div class="apex-tooltip p-2">' + "<span>" + '<span class="bg-primary">' + "</span>" + "Expenses" + "<h3>$" + series[seriesIndex][dataPointIndex] + "</h3>" + "</span>" + "</div>";
    },
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 210,
        },
      },
    },
  ],
};

export const EarningChartData:ApexOptions = {
  series: [46],
  chart: {
    type: "radialBar",
    offsetY: 0,
    height: 280,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -100,
      endAngle: 100,
      hollow: {
        size: "45%",
      },
      track: {
        background: "#e8eff2",
        strokeWidth: "90%",
        startAngle: -100,
        endAngle: 100,
      },
    },
  },
  grid: {
    padding: {
      top: -40,
      bottom: 0,
    },
  },
  stroke: {
    lineCap: "round",
  },
  colors: ["#1a5f7f"],
  responsive: [
    {
      breakpoint: 1362,
      options: {
        chart: {
          height: 220,
        },
        grid: {
          padding: {
            top: -20,
          },
        },
      },
    },
  ],
};

export const SubscriptionData:ApexOptions = {
  series: [
    {
      name: 'Desktops',
      data: [30, 50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
    },
  ],
  chart: {
    height: 135,
    type: 'area',
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#dd7031"],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      opacityFrom: 0.4,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
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
    show: false,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: '#fff',
        strokeColor: '#dd7031',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: '#fff',
        strokeColor: '#dd7031',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 9,
        fillColor: '#fff',
        strokeColor: '#dd7031',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 12,
        fillColor: '#fff',
        strokeColor: '#dd7031',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 13,
        fillColor: '#fff',
        strokeColor: '#dd7031',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 16,
        fillColor: '#fff',
        strokeColor: '#dd7031',
        size: 3,
        shape: 'circle',
      },
      {
        seriesIndex: 0,
        dataPointIndex: 19,
        fillColor: '#fff',
        strokeColor: '#dd7031',
        size: 3,
        shape: 'circle',
      },
    ],
  },
  responsive: [
    {
      breakpoint: 1362,
      options: {
        series: [
          {
            data: [30, 50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62],
          },
        ],
        chart: {
          height: 150,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        series: [
          {
            data: [30, 50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
          },
        ],
        chart: {
          height: 150,
        },
      },
    },
  ],
};

export const RecentStatasticsData:ApexOptions = {
  series: [
    {
      name: "Earning",
      type: "area",
      data: [30, 100, 70, 120, 70, 95, 150],
    },
    {
      name: "Order", 
      type: "area", 
      data: [20, 50, 100, 90, 90, 50, 60],
    },
  ],
  chart: {
    height: 285,
    type: "line",
    stacked: false,
    toolbar: {
      show: false, 
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2, 2],
    curve: "straight",
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)", 
    strokeDashArray: 0,
    position: "back", 
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: -230,
      right: 0,
      bottom: 0,
      left: 0
    }, 
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  colors: ["#1a5f7f" ,"#dd7031"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100], 
    },
  }, 
  labels: [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun", 
  ],
  markers: {
    size: 5
  }, 
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
    min: 0, 
    tickAmount: 6,
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
  responsive: [
    {
      breakpoint: 1299,
      options: {
        chart: {
          height: 285,
        },
        series: [
          {
            name: "Earning", 
            type: "area",
            data: [0, 20, 70, 25, 100],
          },
          {
            name: "Order",
            type: "area",
            data: [0, 50, 40, 90, 60],
          },
        ],
      },
    },
  ],
};

