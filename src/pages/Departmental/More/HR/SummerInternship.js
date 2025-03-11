import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { Container } from "@mui/material";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React from "react";

export default function SummerInternship() {
  const pageTitle = "Summer Internship";

  const breadcrumb = [
    { label: "More" },
    { label: "HR" },
    { label: "Summer Internship" },
  ];

  // Sample data for the table with download links
  const internshipData = [
    {
      title: "Gyanoday Internship Guidelines GRID-INDIA",
      note: "Gyanoday Internship Guidelines GRID-INDIA",
      download_links: "/documents/Gyanoday_Internship_Guidelines.pdf", // Change this to actual file path
    },
  ];

  // Custom template for rendering the download column as a clickable link
  const downloadTemplate = (rowData) => (
    <a href={rowData.download_links} target="_blank" rel="noopener noreferrer">
      Download
    </a>
  );

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <Container style={{ marginTop: 20, marginBottom: 20 }}>
        <DataTable value={internshipData} responsiveLayout="scroll" paginator rows={10} style={{ borderCollapse: "separate", borderSpacing: 0  }}>
          <Column field="title" header="Title" sortable></Column>
          <Column field="note" header="Note" sortable></Column>
          <Column field="download_links" header="Important Documents/Download Links" body={downloadTemplate} sortable></Column>
        </DataTable>
      </Container>
    </BaseLayout>
  );
}
