/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
// import CssBaseline from "@mui/material/CssBaseline";
import Breadcrumbs from "examples/Breadcrumbs";
import "./Baselayout.css";
// Routes
import routes from "routes";
import { Global } from "@emotion/react";

// const MuiScopedCssBaseline = () => (
//   <Global
//     styles={{
//       ".mui-container *": {
//         all: "unset", // Reset only inside MUI container
//       },
//     }}
//   />
// );

function BaseLayout({ breadcrumb, title, children }) {
  return (
    <MKBox
      display="flex"
      flexDirection="column"
      bgColor="white"
      minHeight="100vh"
    >
      <MKBox bgColor="white" shadow="sm" py={0.25} className="mui-container">
        {/* <MuiScopedCssBaseline /> */}
        {/* <CssBaseline /> */}
        <DefaultNavbar routes={routes} transparent relative />
        {/* </CssBaseline> */}
      </MKBox>

      <Container sx={{ mt: 6 }}>
        <Grid
          container
          item
          xs={12}
          flexDirection="column"
          justifyContent="center"
          mx="auto"
        >
          <MKBox width={{ xs: "100%", md: "50%", lg: "25%" }} mb={3}>
            <Breadcrumbs routes={breadcrumb} />
          </MKBox>
          <MKTypography variant="h3" mb={1}>
            {title}
          </MKTypography>
          <MKBox
            width="100%"
            position="relative"
            borderRadius="xl"
            shadow="lg"
            mb={12}
            sx={{ overflow: "hidden" }}
          >
            <div className="prime-react-wrapper">{children}</div>
            {/* {children} */}
          </MKBox>
        </Grid>
      </Container>
      <MKBox mt="auto">
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </MKBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
