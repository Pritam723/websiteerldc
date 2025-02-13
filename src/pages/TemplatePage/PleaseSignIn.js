import React from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Message } from "primereact/message";
import Restricted_access from 'assets/images/Restricted_access.png';

export default function PleaseSignIn({ breadcrumb, redirectionURL }) {
  const navigate = useNavigate();
  
  const handleRedirect = () => {
    navigate("/user/signIn", { state: { redirectionURL } });
  };

  return (
    <BaseLayout breadcrumb={breadcrumb}>
      <Card className="shadow-3 p-5 text-center w-full max-w-md">
        <img 
          src={Restricted_access} 
          alt="Restricted Access"
          className="w-2 mx-auto"
        />
        <Divider />
        <h1 severity="warn">You need to sign in to view this page</h1>
        {/* <Message severity="warn" text="You need to sign in to view this page" /> */}
        <div className="mt-4">
          <Button 
            label="Go to Sign In Page" 
            onClick={handleRedirect} 
          />
        </div>
      </Card>
    </BaseLayout>
  );
}