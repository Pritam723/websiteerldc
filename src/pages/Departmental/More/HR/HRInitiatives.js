import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { Grid, Box, Typography, List, ListItem, ListItemText, Card, Container } from "@mui/material";

import React from "react";
import SwachhBharatAbhiyaan from "assets/images/ERLDC_Icons/SwachhBharatAbhiyaan.png";
import CSRResponsibilities from "assets/images/ERLDC_Icons/CSRResponsibilities.png";

export default function HRInitiatives() {
  const pageTitle = "HR Initiatives";

  const breadcrumb = [
    { label: "More" },
    { label: "HR" },
    { label: "HR Initiatives" },
  ];

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <Container style={{ marginTop: 20 ,marginBottom: 20}}> 
        <Grid container justifyContent="left" >
          <Grid item xs={12} >
              <Grid container >
                {/* Vision Section */}
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <img src={SwachhBharatAbhiyaan} alt="Swachh Bharat Abhiyaan" style={{ width: 60, height: 60, marginRight: 8 }} />
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0488c3" }}>
                    Swachh Bharat Abhiyaan :
                    </Typography>
                  </Box>
                  <Typography sx={{ color: "#333",fontSize: "medium" ,ml: 8.5 ,mt: -2.5,mb:5 }}>
                  <a style={{textDecoration: "none"}} href={process.env.REACT_APP_READ_API + "/files/SAPActivities-2023-24.pdf"} target="_blank" rel="noopener">SAP-Activities-2023-24</a>
                  </Typography>
                </Grid>

                {/* Mission Section */}
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <img src={CSRResponsibilities} alt="CSRR esponsibilities" style={{ width: 60, height: 60, marginRight: 8 }} />
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0488c3" }}>
                    CSR Responsibilities :
                    </Typography>
                  </Box>
                  <Typography sx={{ color: "#333",fontSize: "medium" ,ml: 8.5 ,mt: -2.5}}>
                  <a style={{textDecoration: "none"}} href={process.env.REACT_APP_READ_API + "/files/CSRActivities-2023-24.pdf"} target="_blank" rel="noopener">CSR-Activities-by ERLDC-2023-24</a>
                  </Typography>
                    </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Container>
    </BaseLayout>
  );
}
