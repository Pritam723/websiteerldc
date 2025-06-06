// Copyright ERLDC Website
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// const socket = io(process.env.REACT_APP_WEBSOCKET_API);

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters({ counterData }) {
  const [scadaData, setScadaData] = useState({
    LAST_UPDATED: "Loading...",
    ER_DEMAND_MET: -1,
    SCED_REV: -1,
    ER_FREQ: -1,
  });

  useEffect(() => {
    setScadaData(counterData);
  }, [counterData]);

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     // console.log("Connected to WebSocket");
  //   });
  //   socket.on("message", (data) => {
  //     // console.log(data);
  //     setScadaData(data.data);
  //   });

  //   // console.log("Runs");

  //   return () => socket.disconnect();
  // }, []);

  // const fetchData = async () => {
  //   console.log("Fetching SCADA Data");
  //   try {
  //     const response = await fetch("http://localhost:4001/getScadaData");
  //     const result = await response.json();
  //     console.log(result);
  //     setScadaData(result.counterData);
  //   } catch (error) {
  //     // console.error("Error fetching data:", error);
  //     return;
  //   }
  // };

  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
          {/* <Grid item xs={6} md={3} display="centre">
            <div class="MuiBox-root css-1qqu4ux">
              <h2 class="MuiTypography-root MuiTypography-h2 css-zg0wqh-MuiTypography-root">
                <span>{scadaData.LAST_UPDATED}</span>
              </h2>
              <h5 class="MuiTypography-root MuiTypography-h5 css-1itq6nk-MuiTypography-root">
                Last Updated On
              </h5>
            </div>
          </Grid> */}

          <Grid item xs={6} md={3} display="centre">
            <DefaultCounterCard
              // count={scadaData.LAST_UPDATED}
              count = "30th April 2025"
              suffix=""
              title="Data last updated on"
              // description="Mix the sections, change the colors and unleash your creativity"
            />
          </Grid>

          <Grid item xs={6} md={3} display="centre">
            <DefaultCounterCard
              count={scadaData.ER_DEMAND_MET}
              suffix=" MW"
              title="ER Demand Met"
              // description="Mix the sections, change the colors and unleash your creativity"
            />
          </Grid>

          <Grid item xs={6} md={3} display="centre">
            {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} /> */}

            <DefaultCounterCard
              count={scadaData.ER_FREQ}
              decimals={2}
              suffix=" Hz"
              title="ER Grid Frequency"
              // description="From buttons, to inputs, navbars, alerts or cards, you are covered"
            />
            {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} /> */}
          </Grid>

          <Grid item xs={6} md={3} display="centre">
            {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} /> */}

            <DefaultCounterCard
              count={scadaData.SCED_REV}
              title="Current Schedule Rev No."
              // description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
