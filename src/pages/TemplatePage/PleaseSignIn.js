import React, { useContext } from "react";

import BaseLayout from "layouts/sections/components/BaseLayout";
// import SignIn from "pages/FunctionalPages/Auth/SignIn";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "pages/TemplatePage/LoadingScreen.js";
import { AuthContext } from "context/AuthContext";

export default function PleaseSignIn({
  readPermission,
  breadcrumb,
  redirectionURL,
}) {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/user/signIn", { state: { redirectionURL: redirectionURL } });
  };
  const { user } = useContext(AuthContext);

  return (
    <BaseLayout title={"Please Sign In"} breadcrumb={breadcrumb}>
      {readPermission === null ? (
        <LoadingScreen />
      ) : user ? (
        <React.Fragment>
          You are not Authorized to View this page. Please contact
          erldcit@grid-india.in to elevate your user privilages.
        </React.Fragment>
      ) : (
        <React.Fragment>
          Please Sign in.
          <button onClick={handleRedirect}>Go to Sign In Page</button>
          <br />
        </React.Fragment>
      )}
    </BaseLayout>
  );
}
