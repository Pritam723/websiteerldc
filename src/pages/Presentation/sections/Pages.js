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
import { Link } from "react-router-dom";

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
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      {/* <MKBox position="relative">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGridIndia1&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="400"
          style={{ borderStyle: "solid", overflow: "hidden", borderRadius: "25px" }}
          scrolling="no"
          frameBorder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </MKBox> */}
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

          {/* <MKTypography variant="h2" fontWeight="bold">
            With our coded pages
          </MKTypography>
          <MKTypography variant="body1" color="text">
            The easiest way to get started is to use one of our
            <br /> pre-built example pages.
          </MKTypography> */}
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 6 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} sx={{ mt: 0, px: { xs: 0, lg: 8 } }}>
            {/* <Grid container spacing={4}>
              {renderData}
            </Grid> */}

            <Card sx={{ border: "1px solid", width: "400px", height: "545px", marginTop: 2 }}>
              {/* <CardContent> */} {/* <MKBox position="relative"> */}
              {/* </MKBox> */}
              {/* </CardContent> */}
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

          <Grid item xs={12} lg={4} sx={{ mt: 0, px: { xs: 0, lg: 8 } }}>
            {/* <Grid container spacing={4}>
              {renderData}
            </Grid> */}

            <Card sx={{ border: "1px solid", width: "400px", height: "545px", marginTop: 2 }}>
              {/* <CardContent> */} {/* <MKBox position="relative"> */}
              {/* </MKBox> */}
              {/* </CardContent> */}
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

          <Grid item xs={12} lg={4} sx={{ mt: 0, px: { xs: 0, lg: 8 } }}>
            <Card
              sx={{
                border: "0.5px solid rgb(133, 185, 187)",
                width: "545",
                height: "545px",
                marginTop: 2,
              }}
            >
              {/* <CardContent> */} {/* <MKBox position="relative"> */}
              {/* <Card className="parent"> */}
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
