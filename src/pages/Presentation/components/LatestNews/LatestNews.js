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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import sampleMouImage from "assets/images/erldcconf.jpg";
import { Height } from "@mui/icons-material";
import Marquee from "react-fast-marquee";
import MKBadge from "components/MKBadge";

function BuiltByDevelopers() {
  const bgImage = sampleMouImage;
  // "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  const items = [
    "Flash report for Grid Event at 220/132 kV Darbhanga (Bihar) Substation",
    "Preliminary Load Crash Report",
    "Transition from existing Web Based Energy Scheduling (WBES) software to the New WBES software scheduled with effect from 05th August’2024.",
    "Flash report for Grid Event at 220/132 kV Bokaro Substation",
    "Hydro power stations would be scheduled maximum during non-solar peak hours",
    "Flash report for Grid Event at 220/132 kV Bokaro Substation",
    // "Preliminary Load Crash Report",
    // "Hydro power stations would be scheduled maximum during non-solar peak hours",
  ];

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { gradients },
        }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
      }}
    >
      {/* <Container> */}
      <Grid container item xs={12} lg={12} sx={{ ml: { xs: 0, lg: 2 } }}>
        <MKTypography
          variant="h5"
          color="white"
          fontWeight="bold"
          // sx={{ mb: 4 }}
        >
          Latest News of ERLDC{" "}
        </MKTypography>
        {/* <MKTypography variant="h1" color="white" mb={1}>
            MoU with IIT Bhubaneswar
          </MKTypography> */}
        {/* <Marquee style={{ height: 100 }}> */}
        <MKTypography
          component="a"
          variant="body1"
          href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
          target="_blank"
          rel="noreferrer"
          color="white"
          opacity={0.8}
          mb={2}
        >
          {items[3]}
        </MKTypography>
        {/* </Marquee> */}
        <MKTypography
          component="a"
          href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
          target="_blank"
          rel="noreferrer"
          variant="body2"
          color="white"
          fontWeight="regular"
          sx={{
            display: "flex",
            alignItems: "center",

            "& .material-icons-round": {
              fontSize: "1.125rem",
              transform: `translateX(3px)`,
              transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
            },

            "&:hover .material-icons-round, &:focus .material-icons-round": {
              transform: `translateX(6px)`,
            },
          }}
        >
          NEXT NEWS
          <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
        </MKTypography>
      </Grid>
      {/* </Container> */}
    </MKBox>
  );
}

export default BuiltByDevelopers;
