/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

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

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            // element={
            //   <>{(route.cssOverlap && <CssBaseline />) || route.component}</>
            // }

            element={
              route.cssOverlap ? (
                <div>{route.component}</div>
              ) : (
                <div>
                  <div>
                    <CssBaseline />
                    {route.component}
                  </div>
                </div>
              )
            }
            key={route.key}
          />
        );
      }
      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {" "}
        <Routes>
          {getRoutes(routes)}
          <Route
            path="/"
            element={
              <div>
                <CssBaseline />
                <Presentation />
              </div>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}
