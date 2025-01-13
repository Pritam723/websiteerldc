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
import Navbar from "examples/Navbars/DefaultNavbar/Navbar";

import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import Carousel from "examples/Carousel/carousel";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import video_posoco from "assets/videos/video_posoco.mp4";
import "./video.css";
// Images
import bgImage from "assets/images/transmission.jpg";
// import sample from './sample.mp4';
import Marquee from "react-fast-marquee";
import Chip from "@mui/material/Chip";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MKBadge from "components/MKBadge";

function Presentation() {
  return (
    <>
      {/* <div>Grid-India</div> */}
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://posoco.in/en/",
        //   label: "GRID-INDIA SITE",
        //   color: "info",
        // }}
        sticky
      />

      <MKBox
      // minHeight="75vh"
      // width="100%"
      // sx={{
      //   backgroundImage: `url(${bgImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "top",
      //   display: "grid",
      //   placeItems: "center",
      // }}
      >
        <video className="videoTag" autoPlay loop muted>
          <source src={video_posoco} type="video/mp4" />
        </video>
        {/* <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Material Kit 2 React{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Free & Open Source Web UI Kit built over ReactJS &amp; MUI. Join over 1.6 million
              developers around the world.
            </MKTypography>
          </Grid>
        </Container> */}
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Marquee>
          <MKBadge
            variant="contained"
            color="error"
            badgeContent="Vision: To be a global institution of excellence for reliable & resilient power systems,
             fostering efficient electricity markets, promoting economy and sustainability."
            container
            sx={{ mb: 2 }}
          />
          <div>{"   "}</div>
          <MKBadge
            variant="contained"
            color="success"
            badgeContent="Mission: Ensure Integrated Operation of the Indian Power System to facilitate transfer of
            electric power within and across the regions and trans-national exchange of power with
            Reliability, Economy and Sustainability."
            container
            sx={{ mb: 2 }}
          />
          <div>{"   "}</div>
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Who are we: Grid Controller Of India Limited (GRID-INDIA) erstwhile 
            Power System Operation Corporation Limited (POSOCO) is a wholly owned Government of India 
            Enterprise under the Ministry Of Power.

."
            container
            sx={{ mb: 2 }}
          />

          {/* <div>
            <Chip
              label="Mission: "
              color="success"
              // icon={<RemoveRedEyeIcon />}
              component="a"
              href="#basic-chip"
              clickable
            />{" "}
            Ensure Integrated Operation of the Indian Power System to facilitate transfer of
            electric power within and across the regions and trans-national exchange of power with
            Reliability, Economy and Sustainability. *Facilitate competitive and efficient wholesale
            electricity markets and administer settlement systems. *Promote innovation and adoption
            of latest technology with cyber security. *Nurturing human & intellectual capital.
          </div> */}
        </Marquee>
        <Counters />
        <Information />
        {/* <DesignBlocks /> */}
        <Pages />
        <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={2}>
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
            <Grid item xs={12} lg={2}>
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
            </Grid>
            <Grid item xs={12} lg={2}>
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
            </Grid>
            <Grid item xs={12} lg={2}>
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
            <Grid item xs={12} lg={2}>
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
            <Grid item xs={12} lg={2}>
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
        {/* <Testimonials /> */}
        {/* <Download /> */}
        {/* <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox> */}
        {/* <Container>
          <Grid container>
            {" "} */}
        <Carousel />
        {/* </Grid>
        </Container> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
