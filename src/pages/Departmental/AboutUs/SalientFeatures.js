import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { Grid, Box, Typography, List, ListItem, ListItemText, Card, Container } from "@mui/material";

import React from "react";
import VisionIcon from "assets/images/ERLDC_Icons/VisionIcon.png";
import MissionIcon from "assets/images/ERLDC_Icons/MissionIcon.png";
import Trans_Connectivity from "assets/images/ERLDC_Icons/Trans_Connectivity.png";
import Utilities from "assets/images/ERLDC_Icons/Utilities.png";
import Capacity from "assets/images/ERLDC_Icons/Capacity.png";
import HydroCapacity from "assets/images/ERLDC_Icons/HydroCapacity.png";
import ISGS from "assets/images/ERLDC_Icons/ISGS.png";
import ISTS from "assets/images/ERLDC_Icons/ISTS.png";
import PumpStorage from "assets/images/ERLDC_Icons/PumpStorage.png";
import STATCOM from "assets/images/ERLDC_Icons/STATCOM.png";
import HDVC from "assets/images/ERLDC_Icons/HDVC.png";
import distribution from "assets/images/ERLDC_Icons/distribution.png";

export default function SalientFeatures() {
  const pageTitle = "Salient Features";

  const breadcrumb = [
    { label: "About Us" },
    { label: "Salient Features" },
  ];

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <Container style={{ marginTop: 20 ,marginBottom: 20}}> 

      {/* <Grid >         <div className="container mx-auto p-6 text-gray-900">
      <h2>
      Salient Features of ER Power System
      </h2>

    </div>    </Grid> */}

    <Grid container  spacing={3} alignItems="center">

        
    <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ width: 64, height: 64, marginRight: 10 }}
        src={Trans_Connectivity}
        alt="Facilitates"
      />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Eastern Region Connectivity
        </h5>
        <p style={{ margin: 0 }}>
        Eastern Region is the only region having connectivity with all other
regions of the Country i.e., North, West, South and North-East, besides
international connection with Nepal, Bhutan, and Bangladesh.
        </p>
      </div>
    </div>
  </Grid>

  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ width: 64, height: 64, marginRight: 10 }}
        src={Utilities}
        alt="Provides"
      />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        ER Grid Power Utilities
        </h5>
        <p style={{ margin: 0 }}>
        ER Grid comprises of Power Utilities belonging to Bihar, Jharkhand, DVC,
        Odisha, Sikkim, and West Bengal.
        </p>
      </div>
    </div>
  </Grid>

  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ width: 64, height: 64, marginRight: 10 }}
        src={Capacity}
        alt="Telemeters"
      />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Installed Capacity in ER (As on 31.03.2023)
        </h5>
        <p style={{ margin: 0 }}>
        Installed Capacity: 41,052 MW (10,460 MW is allocated to the outside of
            ER)
        </p>
      </div>
    </div>
  </Grid>




  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={HydroCapacity}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Thermal, Hydro, and RES Capacity
        </h5>
        <p style={{ margin: 0 }}>
        Thermal : Hydro: RES Capacity is 82 : 15 : 3
        </p>
      </div>
    </div>
  </Grid>
  
  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={ISGS}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        ISGS
        </h5>
        <p style={{ margin: 0 }}>
        ISGS: NHPC(CS), NTPC(CS)
        </p>
      </div>
    </div>
  </Grid>
  
  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={ISTS}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Number of ISTS Licensees
        </h5>
        <p style={{ margin: 0 }}>
        Number of ISTS Licensees: 12
        </p>
      </div>
    </div>
  </Grid>

  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={PumpStorage}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Pump Storage Project
        </h5>
        <p style={{ margin: 0 }}>
        One of the successful pumped storage projects in India is the Purulia Pump
Storage Project (PPSP) of 900MW (in Generation mode). It is a completely
“Off the River” or “closed loop” Pump storage power plant (Under WBSEDCL).
        </p>
      </div>
    </div>
  </Grid>



  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={STATCOM}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Number of STATCOM installed in ER
        </h5>
        <p style={{ margin: 0 }}>
        Number of STATCOM installed in ER: 4
        </p>
      </div>
    </div>
  </Grid>




  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={HDVC}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        HVDC Links  
        </h5>
                          <List sx={{ color: "#333", pl: 2, fontSize: "large", listStyleType: "disc", pl: 3 }}>
                            <ListItem sx={{ display: "list-item" }}>
                                <ListItemText primary="± 800 kV Agra-Alipurdwar- Bishwand Chariyali (NR-ER-NER)" 
                                 primaryTypographyProps={{ fontSize: "medium" }} />
                            </ListItem>
                            <ListItem sx={{ display: "list-item" }}>
                                <ListItemText primary="± 500 kV Talcher-Kolar (ER-SR)" 
                                primaryTypographyProps={{ fontSize: "medium" }}/>
                            </ListItem>
                            <ListItem sx={{ display: "list-item" }}>
                                <ListItemText primary="Back-to-Back at Gazuwaka (ER-SR)" 
                                primaryTypographyProps={{ fontSize: "medium" }}/>
                            </ListItem>
                            <ListItem sx={{ display: "list-item" }}>
                                <ListItemText primary="Back-to-Back at Sasaram (ER-NR)" 
                                primaryTypographyProps={{ fontSize: "medium" }}/>
                            </ListItem>
                            <ListItem sx={{ display: "list-item" }}>
                                <ListItemText primary="Back-to-Back at Bheramara (India-Bangladesh)" 
                                primaryTypographyProps={{ fontSize: "medium" }}/>
                            </ListItem>
                            </List>
      </div>
    </div>
  </Grid>

  <Grid item xs={6} lg={6}>
    <div style={{ display: "flex", alignItems: "center" }}>
    <img
                style={{ width: 64, height: 64, marginRight: 10 }}
                src={distribution}
              />
      <div>
        <h5 style={{ color: "#007bff", fontWeight: "bold", margin: 0 }}>
        Distribution Utilities in States
        </h5>

        <table
        style={{
          borderCollapse: "collapse",
        //   width: "100%",
        //   marginTop: "5px",
        }}
      >
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "5px",  fontWeight: "bold" }}>
            State
            </td>
            <td style={{ border: "1px solid #ddd", padding: "5px" ,fontWeight: "bold"}}>Distribution Utilities</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "5px", fontWeight: "530" }}>
            Bihar
            </td>
            <td style={{ border: "1px solid #ddd", padding: "5px" }}>NBPDCL, SBPDCL</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "5px" ,fontWeight: "530"}}>
            Jharkhand
            </td>
            <td style={{ border: "1px solid #ddd", padding: "5px" }}>JBVNL, TISCO, TSUISL, SAIL-BOKARO, MES</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "5px",fontWeight: "530" }}>
            DVC
            </td>
            <td style={{ border: "1px solid #ddd", padding: "5px" }}>DVC</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "5px",fontWeight: "530" }}>
            Odisha
            </td>
            <td style={{ border: "1px solid #ddd", padding: "5px" }}>TPNODL, TPWODL, TPCODL, TPSODL</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "5px",fontWeight: "530" }}>
            West Bengal	
            </td>
            <td style={{ border: "1px solid #ddd", padding: "5px" }}>WBSEDCL, CESC, IPCL</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "5px" ,fontWeight: "530"}}>
            Sikkim
            </td>
            <td style={{ border: "1px solid #ddd", padding: "5px" }}>Energy & Power Department, Govt. Of Sikkim
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </Grid>


    </Grid >
      </Container>
    </BaseLayout>
  );
}
