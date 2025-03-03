import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { Grid, Box, Typography, List, ListItem, ListItemText, Card, Container } from "@mui/material";

import React from "react";
import VISION from "assets/images/ERLDC_Icons/VISION.png";
import MISSION from "assets/images/ERLDC_Icons/MISSION.png";

export default function VisionMission() {
  const pageTitle = "Vision/Mission";

  const breadcrumb = [
    { label: "About Us" },
    { label: "Vision/Mission" },
  ];

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <Container style={{ marginTop: 20 ,marginBottom: 20}}> 
        <Grid container justifyContent="left" >
          <Grid item xs={12} >
              <Grid container spacing={4}>
                {/* Vision Section */}
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <img src={VISION} alt="Vision Icon" style={{ width: 60, height: 60, marginRight: 8 }} />
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0488c3" }}>
                      Vision:
                    </Typography>
                  </Box>
                  <Typography sx={{ color: "#333",fontSize: "medium" ,ml: 1 }}>
                    To be a global institution of excellence for reliable & resilient power
                    systems, fostering efficient electricity markets, promoting economy and
                    sustainability.
                  </Typography>
                </Grid>

                {/* Mission Section */}
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <img src={MISSION} alt="Mission Icon" style={{ width: 60, height: 60, marginRight: 8 }} />
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0488c3" }}>
                      Mission:
                    </Typography>
                  </Box>
                  <List sx={{ color: "#333", pl: 2, fontSize: "large", listStyleType: "disc", pl: 3 }}>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Ensure Integrated Operation of the Indian Power System to facilitate transfer of electric power within and across the regions and trans-national exchange of power with Reliability, Economy and Sustainability." 
                         primaryTypographyProps={{ fontSize: "medium" }} />
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Facilitate competitive and efficient wholesale electricity markets and administer settlement systems." 
                        primaryTypographyProps={{ fontSize: "medium" }}/>
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Promote innovation and adoption of latest technology with cyber security." 
                        primaryTypographyProps={{ fontSize: "medium" }}/>
                    </ListItem>
                    <ListItem sx={{ display: "list-item" }}>
                        <ListItemText primary="Nurturing human & intellectual capital." 
                        primaryTypographyProps={{ fontSize: "medium" }}/>
                    </ListItem>
                    </List>
                    </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Container>
    </BaseLayout>
  );
}
