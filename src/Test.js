import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { dataset } from "./GDPperCapita";

export default function StackedAreas() {
  return (
    <LineChart
      dataset={dataset}
      xAxis={[
        {
          id: "Years",
          dataKey: "date",
          scaleType: "time",
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: "WB",
          label: "West Bengal Demand",
          dataKey: "WB",
          stack: "total",
          area: true,
          showMark: false,
          color: "blue",
        },
        {
          id: "JH",
          label: "Jharkhand Demand",
          dataKey: "JH",
          stack: "total",
          area: true,
          showMark: false,
          color: "green",
        },
        {
          id: "OD",
          label: "Odisha Demand",
          dataKey: "OD",
          stack: "total",
          area: true,
          showMark: false,
          color: "red",
        },
      ]}
      width={500}
      height={425}
      margin={{ left: 60 }}
    />
  );
}
