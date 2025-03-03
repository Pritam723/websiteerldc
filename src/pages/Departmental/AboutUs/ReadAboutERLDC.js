import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { Grid, Box, Typography, List, ListItem, ListItemText, Card, Container } from "@mui/material";

import React from "react";
import VISION from "assets/images/ERLDC_Icons/VISION.png";
import MISSION from "assets/images/ERLDC_Icons/MISSION.png";
import facilitation from "assets/images/ERLDC_Icons/facilitation.png";
import coordinates from "assets/images/ERLDC_Icons/coordinates.png";
import Issues from "assets/images/ERLDC_Icons/Issues.png";
import Persuades from "assets/images/ERLDC_Icons/Persuades.png";
import Provides from "assets/images/ERLDC_Icons/Provides.png";
import Supplies from "assets/images/ERLDC_Icons/Supplies.png";
import Supports from "assets/images/ERLDC_Icons/Supports.png";
import Telemeters from "assets/images/ERLDC_Icons/Telemeters.png";
import Monitors from "assets/images/ERLDC_Icons/Monitors.png";
import Endeavours from "assets/images/ERLDC_Icons/Endeavours.png";
import Processes from "assets/images/ERLDC_Icons/Processes.png";
import Implements from "assets/images/ERLDC_Icons/Implements.png";

export default function ReadAboutERLDC() {
  const pageTitle = "Read About ERLDC";

  const breadcrumb = [
    { label: "About Us" },
    { label: "Read About ERLDC" },
  ];

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <Container style={{ marginTop: 20 ,marginBottom: 20}}> 


    <Grid container  spacing={3} alignItems="center">

    <Grid >         <div className="container mx-auto p-6 text-gray-900">

      <p>
        <b>Grid Corporation of India Limited (GRID-INDIA)</b> erstwhile Power System Operation Corporation Limited (POSOCO) (CIN: <b>U40105DL2009GOI188682 </b>) is a wholly owned
        Government of India Enterprise under the Ministry of Power. It consists
        of five Regional Load Despatch Centres (RLDC) and a National Load
        Despatch Centre (NLDC). <br />
        </p>
        <p>    <b>Eastern Regional Load Despatch Centre (ERLDC)</b> looks after RLDC
        functions of Eastern Region of India.</p>


    </div>    </Grid>
        
    <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ width: 64, height: 64, marginRight: 10 }}
        src={facilitation}
        alt="Facilitates"
      />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
          Facilitates
        </h5>
        <p style={{ margin: 0 }}>
          Integrated operation for improved quality, Security and Reliability of Power Supply on Regional Basis
        </p>
      </div>
    </div>
  </Grid>

  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ width: 64, height: 64, marginRight: 10 }}
        src={Provides}
        alt="Provides"
      />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
          Provides
        </h5>
        <p style={{ margin: 0 }}>
          Avenues for Intra-Regional and Inter Regional Exchanges
        </p>
      </div>
    </div>
  </Grid>

  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ width: 64, height: 64, marginRight: 10 }}
        src={Telemeters}
        alt="Telemeters"
      />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
          Telemeters
        </h5>
        <p style={{ margin: 0 }}>
          Live Data from Major Generating Plants and Sub-stations
        </p>
      </div>
    </div>
  </Grid>




  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={coordinates}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Co-ordinates
        </h5>
        <p style={{ margin: 0 }}>
        Drawal Schedule from for all ISGS constituents
        </p>
      </div>
    </div>
  </Grid>
  
  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={Persuades}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Persuades
        </h5>
        <p style={{ margin: 0 }}>
        Constituents to Match Drawal Schedule
        </p>
      </div>
    </div>
  </Grid>
  
  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={Issues}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Issues
        </h5>
        <p style={{ margin: 0 }}>
        Clearance for outage of Elements for Maintenance Work
        </p>
      </div>
    </div>
  </Grid>


  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={Supplies}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Supplies
        </h5>
        <p style={{ margin: 0 }}>
        Management Information about Performance of Grid Operation
        </p>
      </div>
    </div>
  </Grid>


  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={Supports}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Supports
        </h5>
        <p style={{ margin: 0 }}>
        Constituents in Power System Studies
        </p>
      </div>
    </div>
  </Grid>


  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={Monitors}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Monitors
        </h5>
        <p style={{ margin: 0 }}>
        Generation of C.S. Power Stations and Power Flow in Major Lines and Tie Lines
        </p>
      </div>
    </div>
  </Grid>

  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={Endeavours}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Endeavours
        </h5>
        <p style={{ margin: 0 }}>
        To Maintain Network Security
        </p>
      </div>
    </div>
  </Grid>


  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={Processes}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Processes
        </h5>
        <p style={{ margin: 0 }}>
        Special Enegry Meter Readings for Bulk Power Energy Settlement
        </p>
      </div>
    </div>
  </Grid>

  <Grid item xs={6} lg={3}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={Implements}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Implements
        </h5>
        <p style={{ margin: 0 }}>
        IEGC and Regulatory Directives
        </p>
      </div>
    </div>
  </Grid>

       



  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={VISION}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        VISION
        </h5>
        <p style={{ margin: 0 }}>
        To be a global institution of excellence for reliable & resilient
              power systems,fostering efficient electricity markets, promoting
              economy and sustainability.
        </p>
      </div>
    </div>
  </Grid>


  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={MISSION}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        MISSION
        </h5>
        <p style={{ margin: 0 }}>
        Ensure Integrated Operation of the Indian Power System to
              facilitate transfer of electric power within and across the
              regions and trans-national exchange of power with Reliability,
              Economy and Sustainability
              <br />
              Facilitate competitive and efficient wholesale electricity markets
              and administer settlement systems.
              <br />
              Promote innovation and adoption of latest technology with cyber
              security
              <br />
              Nurturing human & intellectual capital
        </p>
      </div>
    </div>
  </Grid>


    </Grid >
      </Container>
    </BaseLayout>
  );
}
