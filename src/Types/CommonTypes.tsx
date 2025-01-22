import { ReactNode } from "react";

interface SpanType {
  text?: string;
  code?: string;
  mark?: string;
}

export interface CommonCardHeaderProp {
  title: string;
  span?: SpanType[];
  headClass?: string;
  icon?: JSX.Element;
  tagClass?: string;
}

export interface DashboardCommonHeaderType {
  title: string;
  tagClass?: string;
  dropDownFalse?: boolean;
  children?: ReactNode;
  classname?:string
}

export interface DashBoardCommonDropdown {
  days?: boolean;
}

export interface Chartdata {
  headerTitle: string;
  chartId: string;
  chartData: any;
  types: any;
  height: number;
  colsize:number;
}
