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
import PeakHours from "pages/Departmental/Scheduling/PeakHours.js";

const routes = [
  // {
  //           name: "Home",
  //           route: "layouts/pages/presentation",
  // },

  {
    name: "About Us",
    hindiName: "हमारे बारे में",
    // icon: <Icon>InfoIcon</Icon>,
    collapse: [
      {
        name: "Vision/Mission",

        route: "/sections/page-sections/page-headers",
        component: <PageHeaders />,
      },
      {
        name: "Salient features",
        hindiName: "मुख्य विशेषताएं",
        route: "/sections/page-sections/page-headers",
        component: <PageHeaders />,
      },

      {
        name: "GRID-INDIA Annual Reports",
        href: "http://posoco.in/about-us/annual-reports/",
      },
    ],
  },
  {
    name: "System Operation",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "TTC/ATC",
        href: "https://posoco.in/market/monthly-atc-intra-regional",
      },

      {
        name: "Outage",
        dropdown: true,
        collapse: [
          {
            name: "Outage Software LC Module",
            href: "https://mdp.erldc.in/en/outage/",
          },
          {
            name: "E-Logbook Software",
            href: "https://logbook.erldc.in/en/",
          },
          {
            name: "Shutdown Availed List",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "OCC Approved List",
            href: "http://erpc.gov.in/approved-shutdown/",
          },
          {
            name: "ERLDC Outage Procedure",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "LGBR",
            href: "http://erpc.gov.in/meeting-2/lgbr/",
          },
        ],
      },

      {
        name: "Forecasting",
        dropdown: true,
        collapse: [
          {
            name: "Day Ahead Forecasting error",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Intra Day Forecasting error",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Week Ahead Forecasting error",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Week ahead rolling Forecast",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Month Ahead Forecasting error",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Year Ahead Forecasting error",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "FRC",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Transmission Element Availability",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "System Reliability Indices",
        dropdown: true,
        collapse: [
          {
            name: "Inter-Regional",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Intra Regional ATC Violation Daily",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Intra Regional ATC Violation Weekly",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Intra Regional ATC Violation Monthly",
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
        name: "ISGS Real Time Data",
        route: "/sections/page-sections/page-headers",
      },

      {
        name: "Share Table",
        route: "/sections/page-sections/page-headers",
      },

      {
        name: "Final Schedule",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "WEB Based Application",
        dropdown: true,
        collapse: [
          {
            name: "New WBES",
            href: "https://newwbes.grid-india.in/",
          },
          {
            name: "OLD Web Based Application",
            href: "https://wbes.erldc.in/Account/Login?ReturnUrl=%2f",
          },
        ],
      },
      {
        name: "Payment Security Mechanism",
        href: "http://posoco.in/reports/psm-daily-reports/",
      },
      {
        cssOverlap: true,
        name: "Peak Hours and Season Declaration",
        route: "/scheduling/peakhours",
        component: <PeakHours />,
      },
    ],
  },

  {
    name: "Market Operation",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "TGNA",
        dropdown: true,
        collapse: [
          {
            name: "Reconciliation CTU",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Reconciliation Applicant",
            route: "/sections/page-sections/page-headers",
          },

          {
            name: "Disbursement",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "NOAR",
            href: "https://noar.in/landing",
          },
        ],
      },
      {
        name: "FTC",
        dropdown: true,
        collapse: [
          {
            name: "First Time Charging Documents",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },

      {
        name: "DSM",
        dropdown: true,
        collapse: [
          {
            name: "DSM rate",
            href: "https://dsm.posoco.in/newdsm",
          },
          {
            name: "DSM Disbursement Letter",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "DSM Reconciliation",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },

      {
        name: "Reactive",
        dropdown: true,
        collapse: [
          {
            name: "Reactive Reconciliation",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Reactive Disbursement Letter",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Ancilliary Services",
        dropdown: true,
        collapse: [
          {
            name: "RRAS Reconciliation",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "AGC Reconciliation",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Metering",
        dropdown: true,
        collapse: [
          {
            name: "SEM data",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Metering Software",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Time Correction manual",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Metering Manual",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Metering Error",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Fees & Charges",
        dropdown: true,
        collapse: [
          {
            name: "F&C User List",
            href: "http://fc.posoco.in/FnCWeb/#/landing/reg-users",
          },
          {
            name: "Monthly Bill Statement",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Supplementary & PLI Bill",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Quarterly Reconciliation Statement",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Reports",
        dropdown: true,
        collapse: [
          {
            name: "Congestion Report",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "PSDF",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Bank Details",
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
  {
    name: "Open Access",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Interest",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Regional Entities",
      },

      {
        name: "Regulation",
        href: "http://cercind.gov.in/Current_reg.html",
      },

      {
        name: "Transaction",
      },
      {
        name: "STOA Summary",
        dropdown: true,
        collapse: [
          {
            name: "Categorized No. of Approval",
            href: "http://noar.in/landing",
          },
          {
            name: "Categorized MU",
            href: "http://noar.in/landing",
          },
          {
            name: "Summary",
            href: "http://noar.in/landing",
          },
          {
            name: "Approved Transaction",
            href: "http://noar.in/landing",
          },
        ],
      },
      {
        name: "Transmission Loss",
        href: "http://posoco.in/side-menu-pages/applicable-transmission-losses/",
      },
      {
        name: "Transmission Charges",
        href: "http://noar.in/landing",
      },
      {
        name: "Reconciliation",
        dropdown: true,
        collapse: [
          {
            name: "Applicant Amount",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Beneficiary Amount",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "TDS Certificate",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Interest",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Procedures",
        href: "http://noar.in/procedures",
      },
      {
        name: "Web based Application",
        href: "http://noar.in/landing",
      },
    ],
  },

  {
    name: "Reports",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "ER Utility Performance",
        dropdown: true,
        collapse: [
          {
            name: "Hydro Reservoir",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Daily Report",
        dropdown: true,
        collapse: [
          {
            name: "Daily PSP report",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Generation Outage",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },

      {
        name: "Weekly Reports",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Monthly Reports",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Quarterly Reports",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Annual Reports",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Disturbance Reports",
        href: "http://posoco.in/grid-disturbancesincidence/",
      },

      {
        name: "Voltage Deviation Index",
        dropdown: true,
        collapse: [
          {
            name: "Daily",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Weekly",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Monthly",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Monthly Deviation Report",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Annual Compendium",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Grid Events (Flash report)",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Weather related events",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Technical Reports",
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
        name: "Telemetry",
        route: "/sections/page-sections/page-headers",
        isPrivate: true,
      },
      {
        name: "Scada vs SEM Report",
        route: "/sections/page-sections/page-headers",
      },

      {
        name: "Real-Time Data",
        dropdown: true,
        collapse: [
          {
            name: "Constituent Wise Schedule & Actual",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Inter-Regional Wise Deviation",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Constituent Wise Generation",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Station Wise Voltage",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Station Wise Generation",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "ER Generation",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "SCADA TeST Meeting",
        href: "http://erpc.gov.in/test-meetings/",
      },
    ],
  },

  {
    name: "Useful Links",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Grid-India Website",
        href: "https://grid-india.in/",
      },

      {
        name: "OTHER LINKS",
        dropdown: true,
        collapse: [
          {
            name: "FOLD",
            href: "http://forumofld.in/",
          },
          {
            name: "PSDF",
            href: "http://psdfindia.in/",
          },
          {
            name: "Vidyut PRAVAH",
            href: "http://vidyutpravah.in/",
          },
          {
            name: "MoP",
            href: "http://powermin.gov.in/",
          },
          {
            name: "CERC",
            href: "http://cercind.gov.in/",
          },
          {
            name: "MNRE",
            href: "http://mnre.gov.in/",
          },
        ],
      },
      {
        name: "Govt./PSU",
        href: "http://indianpsu.com/",
      },
      {
        name: "Application",
        dropdown: true,
        collapse: [
          {
            name: "WBES",
            href: "https://wbes.erldc.in/",
          },
          {
            name: "WBES Old",
            href: "https://wbes.erldc.in/wbes_test",
          },
          {
            name: "Fees & Charges",
            href: "http://fc.posoco.in/FnCWeb/",
          },
          {
            name: "Meter Data",
            href: "https://mdp.erldc.in/ERLDC_MDP",
          },
          {
            name: "E-Log Book",
            href: "https://logbook.erldc.in/en",
          },
          {
            name: "Open Access",
            href: "http://mnre.gov.in/",
          },
          {
            name: "Web-base report",
            href: "https://report.erldc.in/POSOCO/",
          },
        ],
      },
      {
        name: "RLDCs/NLDC",
        dropdown: true,
        collapse: [
          {
            name: "WRLDC",
            href: "http://www.wrldc.in/",
          },
          {
            name: "SRLDC",
            href: "http://www.srldc.in/",
          },
          {
            name: "NRLDC",
            href: "http://nrldc.in/",
          },
          {
            name: "NERLDC",
            href: "https://www.nerldc.in/",
          },
          {
            name: "NLDC",
            href: "http://posoco.in/",
          },
        ],
      },
      {
        name: "Renewable",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "REC Mechanism",
        href: "http://www.recregistryindia.nic.in/index.php/publics/Reference_Documents",
      },
      {
        name: "Weather",
        dropdown: true,
        collapse: [
          {
            name: "ER Weather Information",
            href: "http://14.139.247.5/power/ERLDC/MAIN.html",
          },
          {
            name: "IMD",
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
        name: "Documents",
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
  {
    name: "More",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Telemetry",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Scada vs SEM Report",
        route: "/sections/page-sections/page-headers",
      },

      {
        name: "HR",
        dropdown: true,
        collapse: [
          {
            name: "HR Initiatives",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Organizational Chart",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Our Employees",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Empaneled Hospitals",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Summer Internship",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Careers",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Live Map",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Download Map",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Tender",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Contracts Awarded",
        dropdown: true,
        collapse: [
          {
            name: "Open Tender",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Limited Tender",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Single Tender",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "राजभाषा",
        dropdown: true,
        collapse: [
          {
            name: "राजभाषा पत्रिका",
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
