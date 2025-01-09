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

// react-router-dom components
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import pic1 from "assets/images/Courasal/1.png";
import pic2 from "assets/images/Courasal/2.png";
import pic3 from "assets/images/Courasal/3.png";
import pic4 from "assets/images/Courasal/4.png";
import pic5 from "assets/images/Courasal/5.png";
import pic6 from "assets/images/Courasal/6.png";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/pagesData";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./pages.css";

function Pages() {
  useEffect(() => {
    //Runs only on the first render
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const square = entry.target;
        if (entry.isIntersecting > 0) {
          square.classList.add("horizonal-courasol-show");
          // obs.unobserve(square);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".horizonal-courasol-hide");
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 0, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Our Constituents: WEST BENGAL, ODISHA, BIHAR, JHARKHAND, SIKKIM, DVC"
            container
            sx={{ mb: 0 }}
          />
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 6 } }}>
        <Grid container spacing={2} className="grid-container ">
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ mt: 0, px: { xs: 0, lg: 8 } }}
            className="grid-item horizonal-courasol-hide"
          >
            <Card sx={{ border: "5px solid", width: "400px", height: "545px", marginTop: 2 }}>
              <div className="scroll-container">
                <div className="scroll-items">
                  {/* Original Items for  scroll */}

                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a>Flash report for Grid Event at 220/132 kV Darbhanga (Bihar) Substation</a>
                  </div>

                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a>Preliminary Load Crash Report</a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>

                    <a>
                      Transition from existing Web Based Energy Scheduling (WBES) software to the
                      New WBES software scheduled with effect from 05th August’2024.
                    </a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a>Flash report for Grid Event at 220/132 kV Bokaro Substation</a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a>
                      Hydro power stations would be scheduled maximum during non-solar peak hours
                    </a>
                  </div>
                  {/* Repeadted Items for 360 degree scroll */}
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a>Flash report for Grid Event at 220/132 kV Darbhanga (Bihar) Substation</a>
                  </div>

                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a>Preliminary Load Crash Report</a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>

                    <a>
                      Transition from existing Web Based Energy Scheduling (WBES) software to the
                      New WBES software scheduled with effect from 05th August’2024.
                    </a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a>Flash report for Grid Event at 220/132 kV Bokaro Substation</a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a>
                      Hydro power stations would be scheduled maximum during non-solar peak hours
                    </a>
                  </div>
                  {/* Repeadted Items for 360 degree scroll */}
                </div>
              </div>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            sx={{ mt: 0, px: { xs: 0, lg: 8 } }}
            className="grid-item horizonal-courasol-hide"
          >
            <Card sx={{ border: "1px solid", width: "400px", height: "545px", marginTop: 2 }}>
              <dl>
                <dt>Coffee</dt>
                <dd>- black hot drink</dd>
                <dt>Milk</dt>
                <dd>- white cold drink</dd>
                <dt>Coffee</dt>
                <dd>- black hot drink</dd>
                <dt>Milk</dt>
                <dd>- white cold drink</dd>
                <dt>Coffee</dt>
                <dd>- black hot drink</dd>
                <dt>Milk</dt>
                <dd>- white cold drink</dd>
                <dt>Coffee</dt>
                <dd>- black hot drink</dd>
                <dt>Milk</dt>
                <dd>- white cold drink</dd>
              </dl>
              <CardActions>
                <a href="https://www.facebook.com/GridIndia1" target="_blank" rel="noreferrer">
                  <Button size="small">Visit GRID-INDIA on Facebook</Button>
                </a>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            lg={4}
            sx={{ mt: 0, px: { xs: 0, lg: 8 } }}
            className="grid-item horizonal-courasol-hide"
          >
            <Card
              sx={{
                border: "0.5px solid rgb(133, 185, 187)",
                width: "545",
                height: "545px",
                marginTop: 2,
              }}
            >
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGridIndia1&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="fit-content"
                height="500"
                style={{ border: "none", overflow: "hidden", borderRadius: "25px" }}
                scrolling="no"
                frameBorder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
              {/* </MKBox> */}
              {/* </CardContent> */}
              <CardActions>
                <a href="https://www.facebook.com/GridIndia1" target="_blank" rel="noreferrer">
                  <Button size="small">Visit GRID-INDIA on Facebook</Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
