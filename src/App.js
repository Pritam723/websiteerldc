// Copyright ERLDC Website

import React, { useEffect } from "react";

// react-router componentsfhfhhghjjhmjkmjhu
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PrivateRoute from "PrivateRoute";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";
import { AuthContext, AuthProvider } from "context/AuthContext";
import ForgotPassword from "pages/FunctionalPages/Auth/ForgotPassword";
import Register from "pages/FunctionalPages/Auth/Register";

import Gallery from "pages/Gallery/Gallery";
import RTI from "pages/Departmental/More/HR/RTI.js";

import UserProfile from "pages/FunctionalPages/Auth/UserProfile";
import Test from "./Test";

// import WebSocketComponent from "./WebSocketComponent";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
      // console.log(route.name + index.toString());
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.name}
          />
        );
      }
      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <AuthProvider>
        <Routes>
          {getRoutes(routes)}

          <Route
            key="LandingPage"
            path="/"
            element={
              <React.Fragment>
                <CssBaseline />
                <Presentation />
              </React.Fragment>
            }
          />

          <Route
            key="forgotpassword"
            path="user/forgotpassword"
            element={<ForgotPassword />}
          />
          <Route key="register" path="user/register" element={<Register />} />
          <Route key="photogallery" path="photogallery" element={<Gallery />} />

          <Route path="rti" element={<RTI />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route key="default" path="*" element={<Navigate to="/" />} />
          {/* <Route path="/user/userprofile" element={<UserProfile />} /> */}
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}
