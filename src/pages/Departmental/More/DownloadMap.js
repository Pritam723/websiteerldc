import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const states = [
  { name: "Eastern Region", route: "/eastern-region-route", color: "#D4AF37" }, // Rich gold for significance
  { name: "Bihar", route: "/bihar-route", color: "#FF6F61" }, // Terracotta & Madhubani art
  { name: "Jharkhand", route: "/jharkhand-route", color: "#006400" }, // Dark forest green for minerals and forests
  { name: "DVC", route: "/dvc-route", color: "#1E90FF" }, // Bright blue for hydro & thermal power
  { name: "Odisha", route: "/odisha-route", color: "#FF8C00" }, // Orange for Konark Sun Temple & tribal culture
  { name: "West Bengal", route: "/westbengal-route", color: "#8A2BE2" }, // Deep purple for cultural & intellectual richness
  { name: "Sikkim", route: "/sikkim-route", color: "#4682B4" }, // Steel blue for serene mountains and biodiversity
];

export default function HRInitiatives() {
  const pageTitle = "Power Maps";
  const breadcrumb = [{ label: "More" }, { label: "Download Power Maps" }];

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <Container style={{ marginTop: 20, marginBottom: 20 }}>
        <Grid container spacing={3}>
          {states.map((state) => (
            <Grid item xs={12} sm={6} md={4} key={state.name}>
              <Card
                sx={{
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: state.color,
                }}
              >
                <CardActionArea component={Link} to={state.route}>
                  <CardContent sx={{ textAlign: "center", padding: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", color: "#ffffff" }}
                    >
                      {state.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BaseLayout>
  );
}
