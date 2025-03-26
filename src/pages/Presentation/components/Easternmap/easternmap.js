import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

import { scaleQuantile } from "d3-scale";
import { geoCentroid } from "d3-geo";
import axios from "axios";
// import Container1 from "./Container1.js";
// import Container3 from "./Container3.js";
// import { geoPolyhedralWaterman } from "d3-geo-projection";
import { Dialog } from "primereact/dialog";
import "./App.css";
const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const INDIA_TOPO_JSON = require("./eastcopy.json");
const DEFAULT_COLOR = "#ffedea";
// const DEFAULT_COLOR = "#00FF00";

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

function Eastern2(props) {
  // const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState([
    {
      id: "BR",
      name: "Bihar",
      color: "#f8c460",
      content: "Bihar demand: 6500 MW",
      clatlong: [84.9629, 25.5937],
      tooltiplatlong: [109, 67],

      // color: "#6cecf8",
    },
    {
      id: "JH",
      name: "Jharkhand",
      color: "#cccdfb",
      content: "Jharkhand demand: 3000 MW",
      clatlong: [84.3629, 23.4937],
      tooltiplatlong: [109, 190],

      // color: "#f8c460",
    },
    {
      id: "OR",
      name: "Odisha",
      color: "#6cecf8",
      content: "Odisha demand: 5500 MW",
      tooltiplatlong: [109, 337],
      clatlong: [84.9629, 20.5937],
    },
    {
      id: "WB",
      name: "West Bengal",
      color: "#8bf579",
      content: "WB demand: 7000 MW",
      clatlong: [88.9629, 23.5937],
      tooltiplatlong: [109, 137],

      // color: "#6cecf8",
    },
    {
      id: "SK",
      name: "Sikkim",
      color: "#ded946",
      content: "Sikkim demand: 90 MW",
      clatlong: [87.9629, 27.5937],
      tooltiplatlong: [109, 87],
    },
    {
      id: "DVC",
      name: "DVC",
      color: "#ffad9f",
      content: "DVC demand: 4500 MW",
      clatlong: [85.8629, 23.6937],
      tooltiplatlong: [109, 157],
    },
  ]);

  const [keyList, setKeyList] = useState([]);

  const [showdailog, setshowdailog] = useState(false);
  const [clickdata, setclickdata] = useState([]);

  var temp_list = [...keyList];
  temp_list.splice(0, 3);

  const onMouseclick = (e) => {
    var x = e[0];
    // console.log(e[0], e[1], e[2]);

    setclickdata([x]);
    setshowdailog(true);
  };

  const onMouseLeave = () => {
    setshowdailog(false);
  };

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: "by default",
  });
  const [showDialog, setShowDialog] = useState(false);
  const [clickData, setClickData] = useState(null);

  const handleMouseEnter = (e, region) => {
    // console.log(e);
    // console.log(region[0].clatlong[0]);
    const rect = e.target.getBoundingClientRect();
    // console.log(rect);

    setTooltip({
      visible: true,
      // x: region[0].clatlong[0],
      // y: region[0].clatlong[0] + window.scrollY,
      x: region[0].tooltiplatlong[0],
      y: region[0].tooltiplatlong[1],
      // x: 109,
      // y: 63,
      content: region[0].content,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  // const handleClick = (region) => {
  //   setClickData(region);
  //   setShowDialog(true);
  // };
  return (
    <>
      <div className="full-width-height ">
        <h2 className="no-margin center">Eastern Regional Map</h2>
        {/* <h1 className="no-margin center">Eastern Regional {Energy} map</h1> */}
        <div className="devider">
          <div className="container_1">
            <ComposableMap
              width={1742}
              height={2307}
              projection="geoMercator"
              // projection="geoAzimuthalEqualArea"
              projectionConfig={{
                rotate: [-87.0, -22.0, 10],
                center: [0, 0],
                scale: 10000,
              }}
            >
              <Geographies geography={INDIA_TOPO_JSON}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const current = [
                      data.find((s) => {
                        return s["id"] === geo.properties.id;
                      }),
                    ];

                    return (
                      <g key={geo.rsmKey}>
                        <Geography
                          geography={geo}
                          fill={current[0].color}
                          style={geographyStyle}
                          onMouseEnter={(e) => handleMouseEnter(e, current)}
                          onMouseLeave={handleMouseLeave}
                        />

                        <Annotation
                          subject={current[0].clatlong}
                          dx={0}
                          dy={0}
                          connectorProps={{
                            stroke: "#FF5533",
                            strokeWidth: 1,
                            strokeLinecap: "round",
                          }}
                        >
                          <text
                            x="130"
                            textAnchor="end"
                            alignmentBaseline="middle"
                            fill="black"
                            style={{
                              fontSize: "64px", // Adjust the font size to make the text larger
                            }}
                          >
                            {current[0].name}
                          </text>
                        </Annotation>
                      </g>
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
      </div>
      {tooltip.visible && (
        <div
          style={{
            position: "absolute",
            top: tooltip.y,
            left: tooltip.x,
            backgroundColor: "rgba(8, 110, 141, 0.75)",
            color: "white",
            padding: "2px",
            borderRadius: "4px",
            pointerEvents: "none",
            fontSize: "14px",
            // transform: "translate(-50%, 200%)",
          }}
        >
          {tooltip.content}
        </div>
      )}
      {/* <Button size="small">See ER Power Map</Button> */}
      <Dialog
        header="Values"
        visible={showdailog}
        style={{ width: "13vw", height: "18vw" }}
        onHide={() => setshowdailog(false)}
      >
        {clickdata[0] ? (
          <div>
            <p>State : {clickdata[0].name}</p>
            {/* <p>District : {clickdata[0].District}</p> */}
            {/* <p>Ac_name : {clickdata[0].Ac_name}</p> */}
            {temp_list.map((item) => (
              <p>
                {item} : {clickdata[0][item] ? clickdata[0][item] : "NA"}
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
      </Dialog>
    </>
  );
}

export default Eastern2;
