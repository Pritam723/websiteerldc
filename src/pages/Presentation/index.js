/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import Navbar from "examples/Navbars/DefaultNavbar/Navbar";

import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import CarouselGOI from "examples/CarouselGOI/carouselgoi";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";
import Disclaimer from "examples/Disclaimer/Disclaimer.js";

// Presentation page components
import Highlights from "pages/Presentation/components/Highlights/Highlights";
import LatestNews from "pages/Presentation/components/LatestNews/LatestNews";

import React, { useState, useEffect } from "react";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import video_posoco from "assets/videos/video_posoco.mp4";
import ERLDC_IMG from "assets/images/ERLDC.png";

import "./video.css";
// Images
// import bgImage from "assets/images/transmission.jpg";
// import sample from './sample.mp4';
import FlasherSlider from "examples/FlasherSlider/flasherSlider.js";

// import Chip from "@mui/material/Chip";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import MKBadge from "components/MKBadge";
import AppBar from "examples/AppBar/AppBar";
// import Banner from "examples/Banner/Banner";
import axios from "axios";
function Presentation() {
  const [views, setViews] = useState("NAN");

  const [counterData, setCounterData] = useState({
    LAST_UPDATED: "NOT ABLE TO REACH SERVER",
    ER_DEMAND_MET: 0,
    SCED_REV: -1,
    ER_FREQ: 0,
  });

  const [demandData, setDemandData] = useState({
    LAST_UPDATED: "NOT ABLE TO REACH SERVER",
    WB: 0,
    BH: 0,
    JH: 0,
    OD: 0,
    SI: 0,
    DVC: 0,
  });

  const [drawlData, setDrawlData] = useState({
    LAST_UPDATED: "NOT ABLE TO REACH SERVER",
    WB: 0,
    BH: 0,
    JH: 0,
    OD: 0,
    SI: 0,
    DVC: 0,
  });

  const updateTotalViews = async () => {
    try {
      let response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_READ_API}/updateTotalViews`,
      });
      console.log(response.data.data);
      setViews(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchRealTimeData = async () => {
    console.log("Fetching realtime data");
    try {
      let response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_READ_API}/getScadaData`,
      });
      console.log(response.data);
      setCounterData(response.data.counterData);
      setDemandData(response.data.demandData);
      setDrawlData(response.data.drawlData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchRealTimeData();

    // Set up polling every 30 seconds
    const interval = setInterval(fetchRealTimeData, 30000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    //Runs only on the first render

    console.log("Here");
    updateTotalViews();

    fetchRealTimeData();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const square = entry.target;
        if (entry.isIntersecting > 0) {
          square.classList.add("vertical-courasol-show");
          // obs.unobserve(square);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".vertical-courasol-hide");
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <React.Fragment>
      {/* <Banner /> */}
      <Disclaimer />
      <AppBar />
      <DefaultNavbar routes={routes} sticky />

      <MKBox>
        <video
          className="videoTag"
          autoPlay
          loop
          muted
          poster={ERLDC_IMG}
          // controls="controls"
          preload="none"
          // onclick="this.play()"
          // onclick={this.play()}
        >
          <source src={video_posoco} type="video/mp4" />
        </video>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: { xs: -3.5, lg: -10.3 },
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <FlasherSlider />

        {/* <Counters counterData={counterData} /> */}
        <Information demandData={demandData} />
        {/* <DesignBlocks /> */}
        <Pages demandData={demandData} drawlData={drawlData} />
        <Container
          sx={{ mt: 3, ml: 2 }}
          className="grid-item vertical-courasol-hide"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Highlights />
            </Grid>
            <Grid item xs={12} lg={4}>
              <LatestNews />
            </Grid>
          </Grid>
        </Container>

        <Container sx={{ ml: 2 }} className="grid-item vertical-courasol-hide">
          <Grid container spacing={1}>
            <Grid item xs={6} sm={6} lg={3}>
              <FilledInfoCard
                // variant="gradient"
                color="info"
                icon="bolt"
                title="New WBES"
                // description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://newwbes.grid-india.in/",
                  label: "Visit Site",
                }}
              />
            </Grid>
            {/* <Grid item xs={6} sm={4} lg={2}>
              <FilledInfoCard
                color="info"
                icon="earbuds_battery"
                title="FTC Application"
                // description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://ftc.erldc.in/FTC_ERLDC/",
                  label: "Visit FTC Application",
                }}
              />
            </Grid> */}
            {/* <Grid item xs={6} sm={4} lg={2.4}>
              <FilledInfoCard
                color="info"
                icon="menu_book"
                title="M.Presentation"
                // description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://mp.erldc.in/",
                  label: "Moring Presentation",
                }}
              />
            </Grid> */}
            <Grid item xs={6} sm={6} lg={3}>
              <FilledInfoCard
                // variant="gradient"
                color="info"
                icon="app_registration"
                title="NOAR"
                // description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://noar.in/",
                  label: "Visit NOAR Site",
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6} lg={3}>
              <FilledInfoCard
                color="info"
                icon="assessment"
                title="Reporting"
                // description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://report.erldc.in/POSOCO/",
                  label: "Go to site",
                }}
              />
            </Grid>
            <Grid item xs={6} sm={6} lg={3}>
              <FilledInfoCard
                color="info"
                icon="currency_rupee"
                title="Fees & Charges"
                // description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://fc.posoco.in/FnCWeb/#/landing",
                  label: "Visit F&C Application",
                }}
              />
            </Grid>
          </Grid>
        </Container>

        <CarouselGOI />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} views={views} />
      </MKBox>
    </React.Fragment>
  );
}

export default Presentation;
