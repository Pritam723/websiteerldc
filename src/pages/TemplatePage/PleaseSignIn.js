import React, { useContext } from "react";

import BaseLayout from "layouts/sections/components/BaseLayout";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "pages/TemplatePage/LoadingScreen.js";
import { AuthContext } from "context/AuthContext";

import { Card } from "primereact/card";
import { Message } from "primereact/message";
import { ExclamationTriangleIcon } from "primereact/icons/exclamationtriangle";
import Restricted_access from "assets/images/Restricted_access.gif";
import { Button } from "primereact/button";

export default function PleaseSignIn({
  readPermission,
  breadcrumb,
  redirectionURL,
}) {
  const navigate = useNavigate();

  /**
   * Redirects the user to the sign-in page with the redirection URL in state.
   */
  const handleRedirect = () => {
    navigate("/user/signIn", { state: { redirectionURL } });
  };
  const { user } = useContext(AuthContext);

  return (
    <BaseLayout title={"Please Sign In"} breadcrumb={breadcrumb}>
      {readPermission === null ? (
        <LoadingScreen />
      ) : (
        <Card className="shadow-3 text-center w-full max-w-md mx-400">
          <div>
            <h3 style={{ color: "#cc8925" }}>RESTRICTED ACCESS</h3>
          </div>
          <br />
          <img
            src={Restricted_access}
            alt="Restricted Access"
            className="w-4 mx-auto mb-4 rounded-full"
            height="auto"
            width="auto"
          />
          {/* <Divider /> */}
          {/* <div><Message severity="warn" text="You need to sign in to view this page" /></div> */}
          <div>
            <Message
              severity="error"
              content={
                <React.Fragment>
                  <ExclamationTriangleIcon
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  {user
                    ? "You are not Authorized to View this page." +
                      "Please contact erldcit@grid-india.in to elevate your user privilages."
                    : "You need to sign in to view this page."}
                </React.Fragment>
              }
            />
          </div>
          {!user && (
            <div className="mt-4">
              <Button
                label="Sign In to Continue"
                style={{ backgroundColor: "#6366f1", borderColor: "#6366f1" }}
                icon="pi pi-sign-in"
                // className="p-button-warning p-button-rounded p-button-lg"
                onClick={handleRedirect}
              />
            </div>
          )}
        </Card>
      )}
    </BaseLayout>
  );
}
