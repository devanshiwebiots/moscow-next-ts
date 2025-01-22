import { DollarSign, FileText, ShoppingBag, Users } from "react-feather";
import { IncomeChart, OrderCharts, SalesChart, VisitorChart } from "./Ecommercechart";

export const Saleschartdata = [
    {
      id: 'sales-chart',
      icon:<ShoppingBag className="txt-primary"/>,
      bgColor: 'bg-light-primary',
      textColor: 'txt-primary',
      title: 'Total Sales',
      value: '54,750',
      chartdata:SalesChart
    },
    {
      id: 'income-chart',
      icon:<DollarSign className="txt-secondary"/>,
      bgColor: 'bg-light-secondary',
      textColor: 'txt-secondary',
      title: 'Total Income',
      value: '$35,532',
      chartdata:IncomeChart,
    },
    {
      id: 'order-chart',
      icon:<FileText className="txt-warning"/>,
      bgColor: 'bg-light-warning',
      textColor: 'txt-warning',
      title: 'Orders Paid',
      value: '55,900',
      chartdata:OrderCharts
    },
    {
      id: 'visitor-chart',
      icon:<Users className="txt-info"/>,
      bgColor: 'bg-light-info',
      textColor: 'txt-info',
      title: 'Total Visitor',
      value: '67,900',
      chartdata:VisitorChart
    },
  ];

  export const ManageOrderdata = [
    {
      imgSrc: "/dashboard-2/product/1.png",
      productName: "Apple laptop",
      id: "#59638",
      date: "15/02/24",
      price: "$526",
      status: "In Stock",
      statusClass: "bg-primary",
      quantity: "12 PCS"
    },
    {
      imgSrc: "/dashboard-2/product/2.png",
      productName: "iPhone Pro model",
      id: "#65981",
      date: "16/02/24",
      price: "$835",
      status: "Low Stock",
      statusClass: "bg-secondary",
      quantity: "09 PCS"
    },
    {
      imgSrc: "/dashboard-2/product/3.png",
      productName: "Smartwatch",
      id: "#54739",
      date: "10/03/24",
      price: "$600",
      status: "In Stock",
      statusClass: "bg-primary",
      quantity: "18 PCS"
    },
    {
      imgSrc: "/dashboard-2/product/4.png",
      productName: "Apple AirPods",
      id: "#41563",
      date: "25/03/24",
      price: "$652",
      status: "Out of stock",
      statusClass: "bg-warning",
      quantity: "20 PCS"
    }
  ];

  export const DeliveryData = [
    {
      imgSrc: "/dashboard-2/product/5.png",
      productName: "Designed T-shirts",
      recipient: "Vinicius Correia",
      status: "Delivered",
      badgeClass: "badge-light-primary",
    },
    {
      imgSrc: "/dashboard-2/product/6.png",
      productName: "Stillbirth Helmet",
      recipient: "Fabio Correia",
      status: "Shipping",
      badgeClass: "badge-light-success",
    },
    {
      imgSrc: "/dashboard-2/product/7.png",
      productName: "Hardwood Sofa",
      recipient: "Brenda Ferreira",
      status: "Delivered",
      badgeClass: "badge-light-primary",
    },
    {
      imgSrc: "/dashboard-2/product/8.png",
      productName: "Wireless Headphone",
      recipient: "Mariana Ribeiro",
      status: "Confirmed",
      badgeClass: "badge-light-warning",
    },
    {
      imgSrc: "/dashboard-2/product/9.png",
      productName: "Makeover Tube",
      recipient: "Rebeca Fernandes",
      status: "Delivered",
      badgeClass: "badge-light-primary",
    },
  ];
  

  export const RecentCustomers = [
    {
      imgSrc: '/dashboard-2/user/1.png',
      name: 'Agatha Azevedo',
      id: '#65249',
      status: 'Paid',
      statusClass: 'text-success',
      amount: '$9856.52',
      time: '40 min ago'
    },
    {
      imgSrc: '/dashboard-2/user/2.png',
      name: 'Rafael Rodrigues',
      id: '#54837',
      status: 'Pending',
      statusClass: 'text-danger',
      amount: '$4168.51',
      time: '28 min ago'
    },
    {
      imgSrc: '/dashboard-2/user/3.png',
      name: 'Evelyn Rocha',
      id: '#45126',
      status: 'Paid',
      statusClass: 'text-success',
      amount: '$2244.12',
      time: '20 min ago'
    },
    {
      imgSrc: '/dashboard-2/user/4.png',
      name: 'Fabio Santos',
      id: '#95124',
      status: 'Pending',
      statusClass: 'text-danger',
      amount: '$2538.25',
      time: '30 min ago'
    },
    {
      imgSrc: '/dashboard-2/user/5.png',
      name: 'Julieta Castro',
      id: '#32486',
      status: 'Paid',
      statusClass: 'text-success',
      amount: '$4255.85',
      time: '35 min ago'
    }
  ];

  export const OrderTablesData = [
    {
      id: 1,
      productName: "Camera Lens",
      productImage: "/dashboard-2/product/10.png",
      productBrand: "Canon",
      date: "15 Jan 2024",
      time: "09:00 AM",
      customerName: "Emily Fernandes",
      price: "$365.28",
      status: "Succeed",
      statusColor: "success",
      dropdownId: "userdropdownes5"
    },
    {
      id: 2,
      productName: "Black shirt",
      productImage: "/dashboard-2/product/11.png",
      productBrand: "Shasmi",
      date: "22 Feb 2024",
      time: "04:00 AM",
      customerName: "Bianca Barros",
      price: "$458.20",
      status: "Waiting",
      statusColor: "warning",
      dropdownId: "userdropdownes6"
    },
    {
      id: 3,
      productName: "Argan Oil",
      productImage: "/dashboard-2/product/12.png",
      productBrand: "Moroccan",
      date: "22 Mar 2024",
      time: "11:30 AM",
      customerName: "Laura Goncalves",
      price: "$218.25",
      status: "Succeed",
      statusColor: "success",
      dropdownId: "userdropdownes7"
    },
    {
      id: 4,
      productName: "Parfum",
      productImage: "/dashboard-2/product/13.png",
      productBrand: "Bella Vita",
      date: "05 Mar 2024",
      time: "04:22 AM",
      customerName: "Yasmin Ribeiro",
      price: "$258.16",
      status: "Canceled",
      statusColor: "danger",
      dropdownId: "userdropdownes8"
    }
  ];
  