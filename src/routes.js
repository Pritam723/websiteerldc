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

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import FaceIcon from "@mui/icons-material/Face";
// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";
import UserProfile from "pages/FunctionalPages/UserProfile";
import SignIn from "pages/FunctionalPages/SignIn";

const routes = [
  // {
  //           name: <b>Home</b>,
  //           route: "layouts/pages/presentation",
  // },

  {
    name: "About Us",
    // icon: <Icon>InfoIcon</Icon>,
    collapse: [
      {
        name: (
          <b style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LightbulbIcon style={{ color: "gold", fontSize: "24px" }} />{" "}
            Vision/Mission
          </b>
        ),
        route: "/sections/page-sections/page-headers",
        component: <PageHeaders />,
      },
      {
        name: <b>Salient features</b>,
        route: "/sections/page-sections/page-headers",
        component: <PageHeaders />,
      },

      {
        name: <b>GRID-INDIA Annual Reports</b>,
        href: "http://posoco.in/about-us/annual-reports/",
      },
    ],
  },
  {
    name: "System Operation",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: <b>TTC/ATC</b>,
        href: "https://posoco.in/market/monthly-atc-intra-regional",
      },

      {
        name: <b>Outage</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Outage Software LC Module</b>,
            href: "https://mdp.erldc.in/en/outage/",
          },
          {
            name: <b>E-Logbook Software</b>,
            href: "https://logbook.erldc.in/en/",
          },
          {
            name: <b>Shutdown Availed List</b>,
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: <b>OCC Approved List</b>,
            href: "http://erpc.gov.in/approved-shutdown/",
          },
          {
            name: <b>ERLDC Outage Procedure</b>,
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: <b>LGBR</b>,
            href: "http://erpc.gov.in/meeting-2/lgbr/",
          },
        ],
      },

      {
        name: <b>Forecasting</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Day Ahead Forecasting error</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Intra Day Forecasting error</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Week Ahead Forecasting error</b>,
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: <b>Week ahead rolling Forecast</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Month Ahead Forecasting error</b>,
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: <b>Year Ahead Forecasting error</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>FRC</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Transmission Element Availability</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>System Reliability Indices</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Inter-Regional</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Intra Regional ATC Violation Daily</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Intra Regional ATC Violation Weekly</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Intra Regional ATC Violation Monthly</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
    ],
  },
  {
    name: "Scheduling",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: <b>ISGS Real Time Data</b>,
        route: "/sections/page-sections/page-headers",
      },

      {
        name: <b>Share Table</b>,
        route: "/sections/page-sections/page-headers",
      },

      {
        name: <b>Final Schedule</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>WEB Based Application</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>New WBES</b>,
            href: "https://newwbes.grid-india.in/",
          },
          {
            name: <b>OLD Web Based Application</b>,
            href: "https://wbes.erldc.in/Account/Login?ReturnUrl=%2f",
          },
        ],
      },
      {
        name: <b>Payment Security Mechanism</b>,
        href: "http://posoco.in/reports/psm-daily-reports/",
      },
      {
        name: <b>Peak Hours and Season Declaration</b>,
        route: "/sections/page-sections/page-headers",
      },
    ],
  },

  {
    name: "Market Operation",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: <b>TGNA</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Reconciliation CTU</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Reconciliation Applicant</b>,
            route: "/sections/page-sections/page-headers",
          },

          {
            name: <b>Disbursement</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>NOAR</b>,
            href: "https://noar.in/landing",
          },
        ],
      },
      {
        name: <b>FTC</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>First Time Charging Documents</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },

      {
        name: <b>DSM</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>DSM rate</b>,
            href: "https://dsm.posoco.in/newdsm",
          },
          {
            name: <b>DSM Disbursement Letter</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>DSM Reconciliation</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },

      {
        name: <b>Reactive</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Reactive Reconciliation</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Reactive Disbursement Letter</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>Ancilliary Services</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>RRAS Reconciliation</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>AGC Reconciliation</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>Metering</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>SEM data</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Metering Software</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Time Correction manual</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Metering Manual</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Metering Error</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>Fees & Charges</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>F&C User List</b>,
            href: "http://fc.posoco.in/FnCWeb/#/landing/reg-users",
          },
          {
            name: <b>Monthly Bill Statement</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Supplementary & PLI Bill</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Quarterly Reconciliation Statement</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>Reports</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Congestion Report</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>PSDF</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Bank Details</b>,
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
  {
    name: "Open Access",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: <b>Interest</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Regional Entities</b>,
      },

      {
        name: <b>Regulation</b>,
        href: "http://cercind.gov.in/Current_reg.html",
      },

      {
        name: <b>Transaction</b>,
      },
      {
        name: <b>STOA Summary</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Categorized No. of Approval</b>,
            href: "http://noar.in/landing",
          },
          {
            name: <b>Categorized MU</b>,
            href: "http://noar.in/landing",
          },
          {
            name: <b>Summary</b>,
            href: "http://noar.in/landing",
          },
          {
            name: <b>Approved Transaction</b>,
            href: "http://noar.in/landing",
          },
        ],
      },
      {
        name: <b>Transmission Loss</b>,
        href: "http://posoco.in/side-menu-pages/applicable-transmission-losses/",
      },
      {
        name: <b>Transmission Charges</b>,
        href: "http://noar.in/landing",
      },
      {
        name: <b>Reconciliation</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Applicant Amount</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Beneficiary Amount</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>TDS Certificate</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Interest</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>Procedures</b>,
        href: "http://noar.in/procedures",
      },
      {
        name: <b>Web based Application</b>,
        href: "http://noar.in/landing",
      },
    ],
  },

  {
    name: "Reports",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: <b>ER Utility Performance</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Hydro Reservoir</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>Daily Report</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Daily PSP report</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Generation Outage</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },

      {
        name: <b>Weekly Reports</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Monthly Reports</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Quarterly Reports</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Annual Reports</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Disturbance Reports</b>,
        href: "http://posoco.in/grid-disturbancesincidence/",
      },

      {
        name: <b>Voltage Deviation Index</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Daily</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Weekly</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Monthly</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>Monthly Deviation Report</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Annual Compendium</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Grid Events (Flash report)</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Weather related events</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Technical Reports</b>,
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
  {
    name: "SCADA",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        xp: "gii",
        name: <b>Telemetry</b>,
        route: "/sections/page-sections/page-headers",
        isPrivate: true,
      },
      {
        name: <b>Scada vs SEM Report</b>,
        route: "/sections/page-sections/page-headers",
      },

      {
        name: <b>Real-Time Data</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Constituent Wise Schedule & Actual</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Inter-Regional Wise Deviation</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Constituent Wise Generation</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Station Wise Voltage</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Station Wise Generation</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>ER Generation</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>SCADA TeST Meeting</b>,
        href: "http://erpc.gov.in/test-meetings/",
      },
    ],
  },

  {
    name: "Useful Links",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: <b>Grid-India Website</b>,
        href: "https://grid-india.in/",
      },

      {
        name: <b>OTHER LINKS</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>FOLD</b>,
            href: "http://forumofld.in/",
          },
          {
            name: <b>PSDF</b>,
            href: "http://psdfindia.in/",
          },
          {
            name: <b>Vidyut PRAVAH</b>,
            href: "http://vidyutpravah.in/",
          },
          {
            name: <b>MoP</b>,
            href: "http://powermin.gov.in/",
          },
          {
            name: <b>CERC</b>,
            href: "http://cercind.gov.in/",
          },
          {
            name: <b>MNRE</b>,
            href: "http://mnre.gov.in/",
          },
        ],
      },
      {
        name: <b>Govt./PSU</b>,
        href: "http://indianpsu.com/",
      },
      {
        name: <b>Application</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>WBES</b>,
            href: "https://wbes.erldc.in/",
          },
          {
            name: <b>WBES Old</b>,
            href: "https://wbes.erldc.in/wbes_test",
          },
          {
            name: <b>Fees & Charges</b>,
            href: "http://fc.posoco.in/FnCWeb/",
          },
          {
            name: <b>Meter Data</b>,
            href: "https://mdp.erldc.in/ERLDC_MDP",
          },
          {
            name: <b>E-Log Book</b>,
            href: "https://logbook.erldc.in/en",
          },
          {
            name: <b>Open Access</b>,
            href: "http://mnre.gov.in/",
          },
          {
            name: <b>Web-base report</b>,
            href: "https://report.erldc.in/POSOCO/",
          },
        ],
      },
      {
        name: <b>RLDCs/NLDC</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>WRLDC</b>,
            href: "http://www.wrldc.in/",
          },
          {
            name: <b>SRLDC</b>,
            href: "http://www.srldc.in/",
          },
          {
            name: <b>NRLDC</b>,
            href: "http://nrldc.in/",
          },
          {
            name: <b>NERLDC</b>,
            href: "https://www.nerldc.in/",
          },
          {
            name: <b>NLDC</b>,
            href: "http://posoco.in/",
          },
        ],
      },
      {
        name: <b>Renewable</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>REC Mechanism</b>,
        href: "http://www.recregistryindia.nic.in/index.php/publics/Reference_Documents",
      },
      {
        name: <b>Weather</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>ER Weather Information</b>,
            href: "http://14.139.247.5/power/ERLDC/MAIN.html",
          },
          {
            name: <b>IMD</b>,
            href: "http://mausam.imd.gov.in/",
          },
        ],
      },
    ],
  },
  {
    name: "Documents",
    // icon: <Icon>article</Icon>,
    dropdown: true,
    collapse: [
      {
        name: <b>Documents</b>,
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
  {
    name: "More",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: <b>Telemetry</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Scada vs SEM Report</b>,
        route: "/sections/page-sections/page-headers",
      },

      {
        name: <b>HR</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>HR Initiatives</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Organizational Chart</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Our Employees</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Empaneled Hospitals</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Summer Internship</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Careers</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>Live Map</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Download Map</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Tender</b>,
        route: "/sections/page-sections/page-headers",
      },
      {
        name: <b>Contracts Awarded</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>Open Tender</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Limited Tender</b>,
            route: "/sections/page-sections/page-headers",
          },
          {
            name: <b>Single Tender</b>,
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: <b>राजभाषा</b>,
        dropdown: true,
        collapse: [
          {
            name: <b>राजभाषा पत्रिका</b>,
            route: "/sections/page-sections/page-headers",
            isPrivate: true,
            // cssOverlap: true,
          },
        ],
      },
    ],
  },

  // {
  //   name: "IMS & ISMS",
  //   // icon: <Icon>article</Icon>,
  // },
  {
    isDynamic: true,
    name: "Login",
    // icon: <FaceIcon />,
    // route: "/sections/page-sections/page-headers",
    route: "/user/signin",
    component: <SignIn />,
    cssOverlap: true,
    isPrivate: true,
  },
];

export default routes;
