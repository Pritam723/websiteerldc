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

function Information() {
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
        alignItems="center"
        sx={{ mx: 0 }}
      >
        <Grid item xs={12} lg={5} sx={{ mx: "auto" }}>
          <GridDataInfographics />
        </Grid>

        <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
              <DefaultInfoCard
                icon="crisis_alert"
                title="MISSION"
                // description="Ensure Integrated Operation of the Indian Power System to facilitate transfer of electric power within & across the regions and transnational exchange of power with Reliability, Economy & Sustainability."
                description={
                  <div>
                    Ensure Integrated Operation of the Indian Power System to
                    facilitate transfer of electric power within & across the
                    regions and Transnational exchange of power with
                    Reliability, Economy & Sustainability.
                  </div>
                }
                // description="Regardless of the screen size, the website content will naturally fit the given resolution."
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <DefaultInfoCard
                icon="visibility"
                title="VISION"
                description="To be a global institution of excellence for reliable & resilient power systems, fostering efficient electricity markets, promoting economy and sustainability."
                // description="Regardless of the screen size, the website content will naturally fit the given resolution."
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
            <Grid
              style={{ paddingLeft: 0, paddingTop: 0 }}
              item
              xs={12}
              md={12}
            >
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
              />
              {/* <div>hii</div> */}
            </Grid>
            {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Fully Responsive"
                  description="Regardless of the screen size, the website content will naturally fit the given resolution."
                />
              </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </MKBox>
  );
}

export default Information;
