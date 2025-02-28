import React from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Message } from "primereact/message";
import { ExclamationTriangleIcon } from "primereact/icons/exclamationtriangle";
import Restricted_access from 'assets/images/Restricted_access.gif';
import { max } from "moment";

/**
 * PleaseSignIn Component
 * This component renders a message prompting the user to sign in to access a restricted page.
 * 
 * @param {Object} props - Component properties
 * @param {Array} props.breadcrumb - Breadcrumb navigation data
 * @param {string} props.redirectionURL - URL to redirect to after sign-in
 */
export default function PleaseSignIn({ breadcrumb, redirectionURL }) {
  const navigate = useNavigate();

  /**
   * Redirects the user to the sign-in page with the redirection URL in state.
   */
  const handleRedirect = () => {
    navigate("/user/signIn", { state: { redirectionURL } });
  };

  return (
    <BaseLayout breadcrumb={breadcrumb}>

      
      <Card className="shadow-3 p-5 text-center w-full max-w-md mx-400">
        <div><h1 style={{ color: '#cc8925' }}>RESTRICTED ACCESS</h1></div>
<br/>
        <img 
          src={Restricted_access} 
          alt="Restricted Access"
          className="w-2 mx-auto mb-4 rounded-full"
          height={max}
          width={max}
        />
        {/* <Divider /> */}
        {/* <div><Message severity="warn" text="You need to sign in to view this page" /></div> */}
        <div><Message 
  severity="warn" 
  content={
    <span style={{ fontSize: "1.5rem", display: "flex", alignItems: "center" }}>
      <ExclamationTriangleIcon style={{ width: "1.5rem", height: "1.5rem", marginRight: "0.5rem" }} />
      You need to sign in to view this page
    </span>
  } 
/></div>
        <div className="mt-4">
          <Button 
            label="Sign In to Continue" 
            style={{ backgroundColor: '#6366f1', borderColor: '#6366f1' }}
            icon="pi pi-sign-in" 
            className="p-button-warning p-button-rounded p-button-lg" 
            onClick={handleRedirect} 
          />
        </div>
      </Card>
    </BaseLayout>
  );
}