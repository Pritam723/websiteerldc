import React from "react";
import BaseLayout from "layouts/sections/components/BaseLayout";
// import SignIn from "pages/FunctionalPages/Auth/SignIn";
import { useNavigate } from "react-router-dom";

export default function PleaseSignIn({ breadcrumb, redirectionURL }) {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/user/signIn", { state: { redirectionURL: redirectionURL } });
  };
  return (
    <BaseLayout title={"Please Sign In"} breadcrumb={breadcrumb}>
      Please Sign in.
      <br />
      <button onClick={handleRedirect}>Go to Sign In Page</button>
    </BaseLayout>
  );
}
