import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import PleaseSignIn from "pages/TemplatePage/PleaseSignIn.js";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";


import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Container,
} from "@mui/material";


const states = [
  { name: "Eastern Region", route:process.env.REACT_APP_READ_API + "/files/ER_Power_Map.pdf", color: "#D4AF37" }, // Rich gold for significance
  { name: "Bihar", route:process.env.REACT_APP_READ_API + "/files/Bihar_Power_Map.pdf", color: "#FF6F61" }, // Terracotta & Madhubani art
  { name: "Jharkhand", route:process.env.REACT_APP_READ_API + "/files/Jharkhand_Power_Map.pdf", color: "#006400" }, // Dark forest green for minerals and forests
  { name: "DVC", route:process.env.REACT_APP_READ_API + "/files/DVC_Power_Map.pdf", color: "#1E90FF" }, // Bright blue for hydro & thermal power
  { name: "Odisha", route:process.env.REACT_APP_READ_API + "/files/Odisha_Power_Map.pdf", color: "#FF8C00" }, // Orange for Konark Sun Temple & tribal culture
  { name: "West Bengal", route:process.env.REACT_APP_READ_API + "/files/WB_Power_Map.pdf", color: "#8A2BE2" }, // Deep purple for cultural & intellectual richness
  { name: "Sikkim", route:process.env.REACT_APP_READ_API + "/files/Sikkim_Power_Map.pdf", color: "#4682B4" }, // Steel blue for serene mountains and biodiversity
];

export default function DownloadMap() {
  const pageTitle = "Power Maps";
  const breadcrumb = [{ label: "More" }, { label: "Download Power Maps" }];

  const redirectionURL = "/more/downloadpowermaps";

  const { authTokens } = useContext(AuthContext);


  if (!authTokens) {
    return <PleaseSignIn readPermission={false} breadcrumb={breadcrumb} redirectionURL={redirectionURL} />;
  }

  console.log(authTokens)
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
                <CardActionArea component="a" href={state.route} target="_blank" rel="noopener noreferrer">
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
