import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

import "./EasternMap.css";

// Function to lighten color on hover
const lightenColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    r = (num >> 16) + amt,
    g = ((num >> 8) & 0x00ff) + amt,
    b = (num & 0x0000ff) + amt;
  return `#${(
    0x1000000 +
    (r < 255 ? r : 255) * 0x10000 +
    (g < 255 ? g : 255) * 0x100 +
    (b < 255 ? b : 255)
  )
    .toString(16)
    .slice(1)}`;
};

const INDIA_TOPO_JSON = require("./eastcopy.json");
// const DEFAULT_COLOR = "#ffedea";
// const DEFAULT_COLOR = "#00FF00";

const geographyStyle = {
  default: {
    outline: "none",
    cursor: "pointer", // Makes the pointer a hand by default
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
    cursor: "pointer", // Ensures the hand pointer on hover
  },
  pressed: {
    outline: "none",
  },
};

function EasternMap({ demandData, drawlData }) {
  // const [tooltipContent, setTooltipContent] = useState("");
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");

  const data = [
    {
      id: "BR",
      name: "Bihar",
      color: "#f8c460",
      demand: "Demand: " + demandData.BH + " MW",
      // generation: "Generation: 4560 MW",
      drawal: "Drawal: " + drawlData.BH + " MW",

      clatlong: [84.9629, 25.5937],
      tooltiplatlong: [109, 67],
      content:
        "Bihar  is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",

      // color: "#6cecf8",
    },
    {
      id: "JH",
      name: "Jharkhand",
      color: "#cccdfb",
      demand: "Demand: " + demandData.JH + " MW",
      // generation: "Generation: 4560 MW",
      drawal: "Drawal: " + drawlData.JH + " MW",
      clatlong: [84.3629, 23.4937],
      tooltiplatlong: [109, 190],
      content:
        "Jharkhand  is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",

      // color: "#f8c460",
    },
    {
      id: "OR",
      name: "Odisha",
      color: "#6cecf8",
      demand: "Demand: " + demandData.OD + " MW",
      // generation: "Generation: 4560 MW",
      drawal: "Drawal: " + drawlData.OD + " MW",
      tooltiplatlong: [109, 337],
      clatlong: [84.9629, 20.5937],
      content:
        "Bihar  is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      id: "WB",
      name: "West Bengal",
      color: "#8bf579",
      demand: "Demand: " + demandData.WB + " MW",
      // generation: "Generation: 4560 MW",
      drawal: "Drawal: " + drawlData.WB + " MW",
      clatlong: [88.9629, 23.5937],
      tooltiplatlong: [109, 137],
      content:
        "WB  is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",

      // color: "#6cecf8",
    },
    {
      id: "SK",
      name: "Sikkim",
      color: "#ded946",
      demand: "Demand: " + demandData.SI + " MW",
      // generation: "Generation: 4560 MW",
      drawal: "Drawal: " + drawlData.SI + " MW",
      clatlong: [87.9629, 27.5937],
      tooltiplatlong: [109, 87],
      content:
        "SIkkim  is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
    {
      id: "DVC",
      name: "DVC",
      color: "#ffad9f",
      demand: "Demand: " + demandData.DVC + " MW",
      // generation: "Generation: 4560 MW",
      drawal: "Drawal: " + drawlData.DVC + " MW",
      clatlong: [85.8629, 23.6937],
      tooltiplatlong: [109, 157],
      content:
        "DVC  is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    },
  ];

  const [keyList, setKeyList] = useState([]);

  const [showdailog, setshowdailog] = useState(false);
  const [clickdata, setclickdata] = useState([]);

  var temp_list = [...keyList];
  temp_list.splice(0, 3);

  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };
  // const onMouseclick = (e, region) => {
  //   show("right");
  //   // console.log(region);
  //   setTooltip2({
  //     header: region[0].name,
  //     visible: true,
  //     content: region[0].content,
  //   });
  // };

  const onMouseLeave = () => {
    setshowdailog(false);
  };

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: "Data not available",
    demand: "Demand: 0 MW",
    // generation: "Generation: 0 MW",
    drawal: "Drawal: 0 MW",
  });

  const [tooltip2, setTooltip2] = useState({
    header: "",
    visible: false,
    content: "Data not available",
  });

  const handleMouseEnter = (e, region) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: region[0].tooltiplatlong[0],
      y: region[0].tooltiplatlong[1],
      content: (
        <div>
          Constituent: {region[0].name}. <br /> {region[0].demand}
          <br /> {region[0].drawal}
          {/* <br /> {region[0].generation} */}
        </div>
      ),
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <React.Fragment className="EasternMap">
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
              // Calculate the centroid of the current geography

              return (
                <g key={geo.rsmKey}>
                  <Geography
                    geography={geo}
                    fill={current[0].color}
                    style={geographyStyle}
                    // onMouseEnter={(e) => handleMouseEnter(e, current)}
                    // onClick={(e) => onMouseclick(e, current)}
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
                      // fill="#F53"
                      fill="black"
                      style={{
                        fontSize: "70px", // Adjust the font size to make the text larger
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      {current[0].name}
                      {/* {tooltip.content} */}
                    </text>
                  </Annotation>
                </g>
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {tooltip.visible && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x + 10,
            top: tooltip.y + 10,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            pointerEvents: "none",
            transform: "translate(-50%, -100%)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            whiteSpace: "nowrap",
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

      <Dialog
        header={tooltip2.header}
        visible={visible}
        style={{
          width: "auto",
          minWidth: "350px",
          maxWidth: "20vw",
          padding: "0.2rem",
          textAlign: "justify",
          borderRadius: "12px",
        }}
        contentStyle={{
          backgroundColor: "#E5E5E5",
          padding: "1.5rem",
          textAlign: "justify",
          fontSize: "1rem",
          lineHeight: "1.6",
          color: "#333",
        }}
        modal
        onHide={() => setVisible(false)}
        draggable={false}
        resizable={false}
      >
        <p style={{ margin: 0 }}>{tooltip2.content}</p>
      </Dialog>
    </React.Fragment>
  );
}

export default EasternMap;
