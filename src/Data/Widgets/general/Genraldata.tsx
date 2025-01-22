import { TOtalVisitorOptions, totalLikesOption } from "./GenaralChartData";

export const SalesCardData = [
    {
      amount: '$55.200',
      label: 'Total Sales',
      percentage: '+ 4.2%',
      type: '',
      icon: 'fill-Buy',
      iconBg: 'primary',
      chartData: totalLikesOption,
      charttype:'area'
    },
    {
      amount: '$42.685',
      label: 'Total Visitor',
      percentage: '+ 6.3%',
      type: 'visitor',
      icon: 'user',
      iconBg: 'secondary',
      chartData: TOtalVisitorOptions,
      charttype:'bar'
    },
  ];