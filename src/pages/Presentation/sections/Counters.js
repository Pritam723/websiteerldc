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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={3} display="centre">
            <DefaultCounterCard
              // count={70}
              // prefix="hj"
              suffix="11:04:22 AM"
              title="Last Updated On"
              // description="From buttons, to inputs, navbars, alerts or cards, you are covered"
            />
          </Grid>

          <Grid item xs={12} md={3} display="centre">
            {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} /> */}
            {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} /> */}

            <DefaultCounterCard
              count={25070}
              suffix=" MW"
              title="ER Demand Met"
              // description="Mix the sections, change the colors and unleash your creativity"
            />
          </Grid>

          <Grid item xs={12} md={3} display="centre">
            {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} /> */}

            <DefaultCounterCard
              count={49.95}
              decimals={2}
              suffix=" Hz"
              title="ER Grid Frequency"
              // description="From buttons, to inputs, navbars, alerts or cards, you are covered"
            />
            {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} /> */}
          </Grid>

          <Grid item xs={12} md={3} display="centre">
            {/* <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} /> */}

            <DefaultCounterCard
              count={87}
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
