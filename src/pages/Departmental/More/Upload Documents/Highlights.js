import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import {  Container } from "@mui/material";
// import { Link } from "react-router-dom";
import React from "react";



export default function Highlights() {
  const pageTitle = "Highlights";
  const breadcrumb = [{ label: "More" }, { label: "Upload Documents" }, { label: "Highlights" }];

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <Container style={{ marginTop: 20, marginBottom: 20 }}>
        Highlights
      </Container>
    </BaseLayout>
  );
}
