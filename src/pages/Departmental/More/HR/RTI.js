import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { Grid, Container } from "@mui/material";
import React, { useState } from "react";

export default function RTI() {
  const pageTitle = "Right to Information";
  const [open, setOpen] = useState(false);

  const breadcrumb = [{ label: "HR" }, { label: "RTI" }];

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <Container style={{ marginTop: 5, marginBottom: 20 }}>
        <Grid container spacing={3} alignItems="center">
          <div className="container mx-auto p-6 text-gray-900">
            <p>
              <b>RTI </b> or <b>Right to Information Act</b> is an initiative
              that was taken in 1995 by the Department of Personnel and
              Training, Ministry of Personnel, Public Grievances and Pensions as
              a step forward to ensure the citizen of India have access to
              Government information. Every individual can ask for any
              information and they are rightful to receive a timely response.
              This is a major step which aims to promote transparency in
              government institutions in India. <br />
            </p>
            <p>
              This section of ERLDC website along with other relevant sections
              contains information as required to be published under Section 4
              (1) (b) of the Act.
            </p>
            <p>
              Compliance under Section 4 (1)(b) of Right to Information Act,
              2005
            </p>
          </div>{" "}
        </Grid>

        <Grid container spacing={1} alignItems="center">
          <Grid spacing={3} item xs={12} lg={12}>
            <div>
              <a
                href={
                  process.env.REACT_APP_READ_API +
                  "/files/InformationAvailableInElectronicForm.pdf"
                }
                style={{
                  color: "#6366f1",
                  textDecoration: "none",
                  fontWeight: "bold",
                  display: "inline-block",
                  paddingLeft: 20,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                INFORMATION AVAILABLE IN ELECTRONIC FORM
              </a>
            </div>
          </Grid>
          <Grid item xs={12} lg={12}>
            <div className="mt-4">
              <a
                href={
                  process.env.REACT_APP_READ_API +
                  "/files/EmployeeDirectory.pdf"
                }
                style={{
                  color: "#6366f1",
                  textDecoration: "none",
                  fontWeight: "bold",
                  display: "inline-block",
                  paddingLeft: 20,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                A DIRECTORY OF ITS OFFICERS EMPLOYEES.
              </a>
            </div>
          </Grid>
          <Grid item xs={12} lg={12}>
            <div className="mt-4">
              <a
                href={
                  process.env.REACT_APP_READ_API +
                  "/files/PublicInformationOfficers.pdf"
                }
                style={{
                  color: "#6366f1",
                  textDecoration: "none",
                  fontWeight: "bold",
                  display: "inline-block",
                  paddingLeft: 20,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                THE NAMES, DESIGNATIONS AND OTHER PARTICULARS OF THE PUBLIC
                INFORMATION OFFICERS.
              </a>
            </div>
          </Grid>

          <Grid item xs={12} lg={12}>
            <div style={{ marginTop: "10px", paddingLeft: 20 }}>
              {/* Clickable Header */}
              <div
                onClick={() => setOpen(!open)}
                style={{
                  cursor: "pointer",
                  padding: "6px",
                  fontWeight: "bold",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  color: "#6366f1",
                  width: "62%",
                }}
              >
                REQUEST AND REPLY UNDER RTI ACT 2005
                <span
                  style={{
                    marginLeft: "auto",
                    transition: "transform 0.3s",
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </div>

              {/* Collapsible Content */}
              <div
                style={{
                  maxHeight: open ? "500px" : "0",
                  overflow: "hidden",
                  transition: "0.3s",
                  paddingLeft: open ? "10px" : "0",
                  paddingTop: open ? "5px" : "0",
                }}
              >
                <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                  {["2016-17", "2017-18", "2018-19", "2019-20"].map((year) => (
                    <li key={year} style={{ padding: "5px 0" }}>
                      <a
                        href={`${process.env.REACT_APP_READ_API}/files/RTI-REQUEST-REPLY-${year}.pdf`}
                        // RTI-REQUEST-REPLY-2016-17.pdf
                        style={{ color: "#6366f1", textDecoration: "none" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RTI REQUEST REPLY {year}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </BaseLayout>
  );
}
