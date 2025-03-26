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
import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
// import pic1 from "assets/images/Courasal/1.png";
// import pic2 from "assets/images/Courasal/2.png";
// import pic3 from "assets/images/Courasal/3.png";
// import pic4 from "assets/images/Courasal/4.png";
// import pic5 from "assets/images/Courasal/5.png";
// import pic6 from "assets/images/Courasal/6.png";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
// import MKTypography from "components/MKTypography";

// Presentation page components
// import ExampleCard from "pages/Presentation/components/ExampleCard";
import EasternMap from "examples/Easternmap/EasternMap";

// Data
// import data from "pages/Presentation/sections/data/pagesData";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import cmd_image from "assets/images/test.jpg";
import "./pages.css";

import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

import bgFront from "assets/images/Flower-offering.jpg";
import bgBack from "assets/images/nscb.jpg";

// import EasternMap from "examples/Easternmap/EasternMap";

function Pages({ demandData, drawlData }) {
  const [content, setContent] = useState("test");
  const navigate = useNavigate();

  useEffect(() => {
    //Runs only on the first render
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const square = entry.target;
        if (entry.isIntersecting > 0) {
          square.classList.add("horizonal-courasol-show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".horizonal-courasol-hide"
    );
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

  const scrollContainerRef = useRef(null);
  const scrollItemsRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollItems = scrollItemsRef.current;

    if (scrollContainer && scrollItems) {
      const containerHeight = scrollContainer.offsetHeight;
      const itemsHeight = Array.from(scrollItems.children).reduce(
        (total, item) => total + item.offsetHeight,
        0
      );
      // console.log(itemsHeight);
      if (itemsHeight > containerHeight) {
        scrollItems.style.animationPlayState = "running";
      } else {
        scrollItems.style.animationPlayState = "paused"; // Disable scrolling
      }
    }
  }, []);

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
    <MKBox component="section" py={0} mt={2} mb={0}>
      <Container>
        <Grid
          container
          item
          xs={12}
          spacing={4}
          alignItems="center"
          sx={{
            mx: 2,
            ml: { xs: -2, lg: 2 }, // Shift left for xs & sm, keep normal for md+
          }}
        >
          <Grid
            item
            xs={12}
            lg={4}
            className="grid-item horizonal-courasol-hide"
          >
            <Card
              sx={{
                // border: "0.5px solid rgb(221, 170, 136)",
                // width: "350px",
                // height: "450px",
                marginTop: 2,
                boxShadow: "0px 0px 0px rgb(154, 216, 154)",
              }}
            >
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
                  title={<>R.N. Tagore 163rd Birth Anniversary</>}
                  description="R.N. Tagore 163rd Birth Anniversary"
                />
                <RotatingCardBack
                  image={bgBack}
                  title="Subash Chandra Bose Jayanti"
                  // description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                  action={{
                    type: "internal",
                    route: "/photogallery",
                    label: "Visit our gallery",
                  }}
                />
              </RotatingCard>

              <CardActions>
                {/* <a href="photogallery" target="_blank" rel="noreferrer"> */}
                <Button
                  size="small"
                  onClick={() => {
                    navigate("/photogallery");
                  }}
                >
                  Visit ERLDC Photo Gallery
                </Button>
                {/* </a> */}
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>

          {/* <Grid item xs={12} lg={2.5}>
          <Card
            sx={{
              border: "0.5px solid rgb(221, 170, 136)",
              width: "350px",
              height: "450px",
              marginTop: 2,
              boxShadow: "4px 6px 8px rgb(236, 161, 131)",
            }}
          >
            <div className="courasol-head">Latest News</div>
            <div className="scroll-container" ref={scrollContainerRef}>
              <div className="scroll-items" ref={scrollItemsRef}>
                <div ref={scrollItemsRef}>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a href="https://google.com">{items[0]}</a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a href="https://google.com">{items[1]}</a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a href="https://google.com">{items[2]}</a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a href="https://google.com">{items[3]}</a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a href="https://google.com">{items[4]}</a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a href="https://google.com">{items[5]}</a>
                  </div>
                  <div className="scroll-item">
                    <div className="scroll-item-child">New</div>
                    <a href="https://google.com">{items[5]}</a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Grid> */}

          <Grid
            item
            xs={12}
            lg={3.5}
            className="grid-item horizonal-courasol-hide"
          >
            <Card
              sx={{
                border: "0.5px rgb(133, 185, 187)",
                width: "350px",
                height: "450px",
                marginTop: 2,
                boxShadow: "0px 0px 0px rgb(133, 139, 212)",
              }}
            >
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGridIndia1&tabs=timeline&width=340&height=440&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="440"
                style={{
                  border: "none",
                  overflow: "hidden",
                  borderRadius: "25px",
                }}
                scrolling="no"
                frameBorder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
              {/* </MKBox> */}
              {/* </CardContent> */}
              <CardActions>
                <a
                  href="https://www.facebook.com/GridIndia1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="small">Visit GRID-INDIA on Facebook</Button>
                </a>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            lg={3.5}
            className="grid-item horizonal-courasol-hide"
          >
            <Card
              sx={{
                border: "0.5px rgb(133, 185, 187)",
                width: "350px",
                height: "450px",
                marginTop: 2,
                boxShadow: "0px 0px 0px rgb(133, 139, 212)",
              }}
            >
              <h6 className="no-margin center">
                Constituents of Eastern Region
              </h6>
              <EasternMap demandData={demandData} drawlData={drawlData} />
              <CardActions>
                <a
                  href="https://www.facebook.com/GridIndia1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="small">
                    See Eastern Regional Power Map (Login Required)
                  </Button>
                </a>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
