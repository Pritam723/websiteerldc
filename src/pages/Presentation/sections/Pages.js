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
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import cmd_image from "assets/images/logo_cmd_person.jpg";
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
      <Container sx={{ mt: { xs: 8, lg: 6 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} sx={{ mt: 0, px: { xs: 0, lg: 8 } }}>
            {/* <Grid container spacing={4}>
              {renderData}
            </Grid> */}

            <Card
              sx={{
                border: "0.5px solid rgb(221, 170, 136)",
                width: "400px",
                height: "545px",
                marginTop: 2,
                boxShadow: "4px 6px 8px rgb(236, 161, 131)",
              }}
            >
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

            <Card
              sx={{
                border: "0.5px solid rgb(189, 233, 176)",
                width: "400px",
                height: "545px",
                marginTop: 2,
                boxShadow: "4px 6px 8px rgb(185, 235, 175)",
              }}
            >
              <Card
                sx={{
                  height: "300px",
                }}
              >
                <CardMedia component="img" alt="green iguana" height="545" image={cmd_image} />
                {/* <CardContent> */}
                {/* <Typography gutterBottom variant="h5" component="div"> */}
                {/* Mr. S. R. Narasimhan */}
                {/* <br /> */}
                {/* </Typography> */}
                {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Chairman & Managing Director
                  </Typography> */}

                <CardActions>
                  {/* <Button size="small">Share</Button> */}
                  <Button size="small">Message from Mr. S. R. Narasimhan, CMD Grid-India</Button>
                </CardActions>
                {/* </CardContent> */}
              </Card>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4} sx={{ mt: 0, px: { xs: 0, lg: 8 } }}>
            <Card
              sx={{
                border: "0.5px solid rgb(133, 185, 187)",
                width: "452px",
                height: "545px",
                marginTop: 2,
                boxShadow: "4px 6px 8px rgb(133, 139, 212)",
              }}
            >
              {/* <CardContent> */} {/* <MKBox position="relative"> */}
              {/* <Card className="parent"> */}
              {/* <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGridIndia1&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                // width="fit-content"
                width="800"
                height="500"
                style={{ border: "none", overflow: "hidden", borderRadius: "25px" }}
                scrolling="no"
                frameBorder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe> */}
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGridIndia1&tabs=timeline&width=450&height=545&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="450"
                height="545"
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
