import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { Grid, Container } from "@mui/material";
import React from "react";

export default function BankDetails() {
  const pageTitle = "Bank Details";


  const breadcrumb = [
    { label: "Market Operation" },
    { label: "Bank Details" },
  ];

  return (
    <BaseLayout title={pageTitle} breadcrumb={breadcrumb}>
      <Container style={{ marginTop: 5 ,marginBottom: 20}}> 


        <Grid container spacing={3} >

        <Grid item xs={6} lg={6}>
        
<p style={{textDecoration: "underline"}}><b><span style={{color: "#000000"}}>Bank Account Details</span></b></p>
<p><b>Bank Name - State Bank of India</b></p>
<p><b>Branch- Southern Avenue Branch, Kolkata</b></p>
<p><b>IFSC Code - SBIN0001505</b></p>
<p><b>Grid Controller Of India Limited PAN Number - AAFCP2086B</b></p>
<p><b>Type of Account - Current</b></p>
<p><b><a style={{textDecoration: "none"}} href={process.env.REACT_APP_READ_API + "/files/GRIDINDIADSMBankAccountMandate.pdf"} target="_blank" rel="noopener">GRID-INDIA- ER - Deviation & Ancillary Services Pool Account</a></b></p>


        </Grid>

        <Grid item xs={6} lg={6}>

            
      
<p style={{textDecoration: "underline"}}><b><span style={{color: "#000000"}}>Bank Account Details for ERLDC Fees & Charges</span></b></p>
<p ><b><a style={{textDecoration: "none"}} href={process.env.REACT_APP_READ_API + "/files/GRIDINDIAHDFCBankAccountConfirmationLetter.pdf"} target="_blank" rel="noopener">Bank Account details</a></b></p>

        </Grid>


          </Grid>
      </Container>
    </BaseLayout>
  );
}





