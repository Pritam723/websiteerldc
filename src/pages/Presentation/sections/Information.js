// Copyright ERLDC Website
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// import "./information.css";

import GridDataInfographics from "examples/GridDataInfographics/GridDataInfographics.js";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

function Information({ demandData }) {
  const isMobile = useMediaQuery("(max-width:600px)");

  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <MKBox
      component="section"
      py={0}
      mt={6}
      mb={0}
      className="vertical-courasol-hide"
    >
      {/* <Container> */}
      <Grid
        container
        item
        xs={11}
        spacing={6}
        alignItems="stretch" // Ensures the grid items stretch to the same height
        sx={{ mx: 0 }}
      >
        {/* <Grid item xs={12} lg={5} sx={{ mx: "auto", ml: { xs: -2, lg: 0 } }}>
          <GridDataInfographics demandData={demandData} />
        </Grid> */}

      <Grid item xs={12} lg={12} sx={{ ml: { xs: -2, sm: -1.5, md: -2.5, lg: 0 } }}>
          <Grid container spacing={3}>
            {/* MISSION Card */}
            <Grid item xs={12} md={4} sx={{ display: "flex" }}>
              <FilledInfoCard
                color="info"
                icon="crisis_alert"
                title="MISSION"
                description="Ensure Integrated Operation of the Indian Power System to facilitate transfer of electric power within & across the regions and Transnational exchange of power with Reliability, Economy & Sustainability."
                sx={{ flex: 1, display: "flex", flexDirection: "column" }} // Ensures equal height and vertical layout
              />
            </Grid>

            {/* VISION Card */}
            <Grid item xs={12} md={4} sx={{ display: "flex" }}>
              <FilledInfoCard
                color="info"
                icon="visibility"
                title="VISION"
                description="To be a global institution of excellence for reliable & resilient power systems, fostering efficient electricity markets, promoting economy and sustainability."
                sx={{ flex: 1, display: "flex", flexDirection: "column" }} // Ensures equal height and vertical layout
              />
            </Grid>

            {/* WHO ARE WE Card */}
            <Grid item xs={12} md={4} sx={{ display: "flex" }}>
              {/* <DefaultInfoCard
                  icon="people_alt"
                  title="WHO ARE WE"
                  description="Grid Controller Of India Limited (GRID-INDIA) erstwhile Power System Operation Corporation Limited (POSOCO) is a wholly owned Government of India Enterprise under the Ministry Of Power."
                  // description="Regardless of the screen size, the website content will naturally fit the given resolution."
                /> */}

              <FilledInfoCard
                color="info"
                icon="people_alt"
                title="WHO ARE WE"
                description="Grid Controller Of India Limited (GRID-INDIA) erstwhile Power System Operation Corporation Limited (POSOCO) is a wholly owned Government of India Enterprise under the Ministry Of Power."
                action={{
                  type: "external",
                  route: "aboutus/readaboutus",
                  label: "Read more about us",
                }}
                sx={{ flex: 1, display: "flex", flexDirection: "column" }} // Ensures equal height and vertical layout
              />
              {/* <div>hii</div> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </MKBox>
  );
}

export default Information;
