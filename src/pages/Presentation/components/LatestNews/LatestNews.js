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
import { motion } from "framer-motion";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import sampleMouImage from "assets/images/erldcconf.jpg";
import { Height } from "@mui/icons-material";
import Marquee from "react-fast-marquee";
import MKBadge from "components/MKBadge";
import { useState } from "react";

function BuiltByDevelopers() {
  const bgImage = sampleMouImage;
  const [newsnumber, setNewsnumber] = useState(0);

  const latestNews = [
    "Flash report for Grid Event at 220/132 kV Darbhanga (Bihar) Substation",
    "Preliminary Load Crash Report",
    "Transition from existing Web Based Energy Scheduling (WBES) software to the New WBES software scheduled with effect from 05th August’2024.",
    "Flash report for Grid Event at 220/132 kV Bokaro Substation",
    "Hydro power stations would be scheduled maximum during non-solar peak hours",
    "Flash report for Grid Event at 220/132 kV Bokaro Substation",
    "Preliminary Load Crash Report",
    "Hydro power stations would be scheduled maximum during non-solar peak hours",
  ];

  const latestNewsLength = latestNews.length;
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
    exit: { opacity: 0, transition: { duration: 1.5 } },
  };
  const handlePreviousNewsClick = (event) => {
    event.preventDefault();
    setNewsnumber(newsnumber - 1);
  };

  const handleNextNewsClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    // // console.log("Next news clicked");
    setNewsnumber(newsnumber + 1);
  };
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
        padding: "16px",
      }}
    >
      <Grid container item xs={12} sx={{ ml: { xs: 0, lg: 2 } }}>
        {/* News Heading */}
        <Grid item xs={12}>
          <MKTypography variant="h5" color="white" fontWeight="bold">
            Latest News of ERLDC
          </MKTypography>
        </Grid>

        {/* News Content */}
        {/* <Grid item xs={12} sx={{ mb: 1, height: "100px" }}>
          <MKTypography variant="body1" color="white" opacity={0.8}>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              {latestNews[newsnumber]}
            </a>
          </MKTypography>
        </Grid> */}
        <Grid item xs={12} sx={{ mb: 1, height: "100px", overflow: "hidden" }}>
          <motion.div
            key={newsnumber}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={textVariants}
          >
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              sx={{ fontSize: "16px" }}
            >
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                {latestNews[newsnumber]}
              </a>
            </MKTypography>
          </motion.div>
        </Grid>

        {/* Navigation Buttons */}
        <Grid
          container
          item
          xs={12}
          sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
        >
          {/* Previous News Button (Left Side) */}
          {newsnumber !== 0 ? (
            <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="white"
              fontWeight="regular"
              onClick={handlePreviousNewsClick}
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: `translateX(3px)`,
                  transition:
                    "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },
                "&:hover .material-icons-round, &:focus .material-icons-round":
                  {
                    transform: `translateX(6px)`,
                  },
              }}
            >
              <Icon sx={{ fontWeight: "bold", mr: { xs: 0, lg: 1 } }}>
                arrow_backward
              </Icon>
              PREVIOUS NEWS
            </MKTypography>
          ) : (
            <div /> // Empty div to maintain alignment
          )}

          {/* Next News Button (Right Side) */}
          {newsnumber !== latestNewsLength - 1 ? (
            <MKTypography
              component="a"
              href="#"
              variant="body2"
              color="white"
              fontWeight="regular"
              onClick={handleNextNewsClick}
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: `translateX(3px)`,
                  transition:
                    "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },
                "&:hover .material-icons-round, &:focus .material-icons-round":
                  {
                    transform: `translateX(6px)`,
                  },
              }}
            >
              NEXT NEWS
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          ) : (
            <div /> // Empty div to maintain alignment
          )}
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default BuiltByDevelopers;
