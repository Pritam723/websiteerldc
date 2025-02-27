import React from "react";
// import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "highcharts/modules/drilldown";
// import "highcharts/modules/exporting";
// import "highcharts/modules/export-data";
// import "highcharts/modules/accessibility";

// import "highcharts/modules/drilldown";

// node_modules\highcharts\modules\drilldown.js

const options = {
  credits: {
    enabled: false,
  },
  chart: {
    type: "pie",
  },
  title: {
    text: "Easter Regional Demand. 14th January 2025 16:30 Hrs",
  },
  subtitle: {
    text: '<a href="http://statcounter.com" target="_blank"> Click here to see Real-Time Grid Data. </a>',
  },

  accessibility: {
    announceNewData: {
      enabled: true,
    },
    // point: {
    //   valueSuffix: "%",
    // },
  },

  plotOptions: {
    series: {
      borderRadius: 5,
      dataLabels: [
        {
          enabled: true,
          distance: 15,
          format: "{point.name}",
        },
        {
          enabled: true,
          distance: "-30%",
          filter: {
            property: "percentage",
            operator: ">",
            value: 5,
          },
          format: "{point.y:.1f} MW",
          style: {
            fontSize: "0.9em",
            textOutline: "none",
          },
        },
      ],
    },
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: ' +
      "<b>{point.y:.0f}MW</b> of total<br/>",
  },

  series: [
    {
      name: "Constituents",
      colorByPoint: true,
      data: [
        {
          name: "West Bengal",
          y: 6204,
          drilldown: "WB",
        },
        {
          name: "Odisha",
          y: 5689,
          drilldown: "OD",
        },
        {
          name: "DVC",
          y: 5389,
          drilldown: "DVC",
        },
        {
          name: "Bihar",
          y: 2764,
          drilldown: "BH",
        },
        {
          name: "Jharkhand",
          y: 2096,
          drilldown: "JH",
        },
        {
          name: "Sikim",
          y: 92,
          drilldown: null,
        },
      ],
    },
  ],
  drilldown: {
    series: [
      {
        name: "WB",
        id: "WB",
        data: [
          ["v97.0", 36.89],
          ["v96.0", 18.16],
          ["v95.0", 0.54],
          ["v94.0", 0.7],
          ["v93.0", 0.8],
          ["v92.0", 0.41],
          ["v91.0", 0.31],
          ["v90.0", 0.13],
          ["v89.0", 0.14],
          ["v88.0", 0.1],
          ["v87.0", 0.35],
          ["v86.0", 0.17],
          ["v85.0", 0.18],
          ["v84.0", 0.17],
          ["v83.0", 0.21],
          ["v81.0", 0.1],
          ["v80.0", 0.16],
          ["v79.0", 0.43],
          ["v78.0", 0.11],
          ["v76.0", 0.16],
          ["v75.0", 0.15],
          ["v72.0", 0.14],
          ["v70.0", 0.11],
          ["v69.0", 0.13],
          ["v56.0", 0.12],
          ["v49.0", 0.17],
        ],
      },
      {
        name: "OD",
        id: "OD",
        data: [
          ["v15.3", 0.1],
          ["v15.2", 2.01],
          ["v15.1", 2.29],
          ["v15.0", 0.49],
          ["v14.1", 2.48],
          ["v14.0", 0.64],
          ["v13.1", 1.17],
          ["v13.0", 0.13],
          ["v12.1", 0.16],
        ],
      },
      {
        name: "JH",
        id: "JH",
        data: [
          ["v97", 6.62],
          ["v96", 2.55],
          ["v95", 0.15],
        ],
      },
      {
        name: "BH",
        id: "BH",
        data: [
          ["v96.0", 4.17],
          ["v95.0", 3.33],
          ["v94.0", 0.11],
          ["v91.0", 0.23],
          ["v78.0", 0.16],
          ["v52.0", 0.15],
        ],
      },
      {
        name: "DVC",
        id: "DVC",
        data: [
          ["v97.0", 36.89],
          ["v96.0", 18.16],
          ["v95.0", 0.54],
          ["v94.0", 0.7],
          ["v93.0", 0.8],
          ["v92.0", 0.41],
          ["v91.0", 0.31],
          ["v90.0", 0.13],
          ["v89.0", 0.14],
          ["v88.0", 0.1],
          ["v87.0", 0.35],
          ["v86.0", 0.17],
          ["v85.0", 0.18],
          ["v84.0", 0.17],
          ["v83.0", 0.21],
          ["v81.0", 0.1],
          ["v80.0", 0.16],
          ["v79.0", 0.43],
          ["v78.0", 0.11],
          ["v76.0", 0.16],
          ["v75.0", 0.15],
          ["v72.0", 0.14],
          ["v70.0", 0.11],
          ["v69.0", 0.13],
          ["v56.0", 0.12],
          ["v49.0", 0.17],
        ],
      },
    ],
  },
};

export default function App() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      // constructorType={"stockChart"}
      options={options}
    />
  );
}

//////////////////////////////////////////////////////////////////
