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
import UserProfile from "pages/FunctionalPages/Auth/UserProfile";
import SignIn from "pages/FunctionalPages/Auth/SignIn";
import PeakHours from "pages/Departmental/Scheduling/PeakHours.js";
import ShutdownAvailedList from "pages/Departmental/SystemOperation/ShutdownAvailedList.js";

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
        hindiName: "दृष्टि/उद्देश्य",
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
        hindiName: "ग्रिड-इंडिया वार्षिक रिपोर्ट्स",
        href: "http://posoco.in/about-us/annual-reports/",
      },
    ],
  },
  {
    name: "System Operation",
    hindiName: "सिस्टम संचालन",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "TTC/ATC",
        hindiName: "TTC/ATC",
        href: "https://posoco.in/market/monthly-atc-intra-regional",
      },

      {
        name: "Outage",
        hindiName: "आउटेज",
        dropdown: true,
        collapse: [
          {
            name: "Outage Software LC Module",
            hindiName: "आउटेज सॉफ्टवेयर एलसी मॉड्यूल",
            href: "https://mdp.erldc.in/en/outage/",
          },
          {
            name: "E-Logbook Software",
            hindiName: "ई-लॉगबुक सॉफ्टवेयर",
            href: "https://logbook.erldc.in/en/",
          },
          {
            name: "Shutdown Availed List",
            hindiName: "शटडाउन प्राप्त सूची",
            route: "/systemoperation/outage/shutdownavailedlist",
            component: <ShutdownAvailedList />,
          },
          {
            name: "OCC Approved List",
            hindiName: "ओसीसी अनुमोदित सूची",
            href: "http://erpc.gov.in/approved-shutdown/",
          },
          {
            name: "ERLDC Outage Procedure",
            hindiName: "ईआरएलडीसी आउटेज प्रक्रिया",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "LGBR",
            hindiName: "एलजीबीआर",
            href: "http://erpc.gov.in/meeting-2/lgbr/",
          },
        ],
      },

      {
        name: "Forecasting",
        hindiName: "पूर्वानुमान",
        dropdown: true,
        collapse: [
          {
            name: "Day Ahead Forecasting error",
            hindiName: "आगे के दिन का पूर्वानुमान त्रुटि",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Intra Day Forecasting error",
            hindiName: "इंट्राडे  का पूर्वानुमान त्रुटि",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Week Ahead Forecasting error",
            hindiName: "आगे के सप्ताह का पूर्वानुमान त्रुटि",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Week ahead rolling Forecast",
            hindiName: "आगे के सप्ताह का रोलिंग पूर्वानुमान",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Month Ahead Forecasting error",
            hindiName: "आगे के महीने का पूर्वानुमान त्रुटि",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Year Ahead Forecasting error",
            hindiName: "आगे के साल का पूर्वानुमान त्रुटि",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "FRC",
        hindiName: "एफआरसी",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Transmission Element Availability",
        hindiName: "संचरण तत्व उपलब्धता",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "System Reliability Indices",
        hindiName: "प्रणाली विश्वसनीयता सूचकांक",
        dropdown: true,
        collapse: [
          {
            name: "Inter-Regional",
            hindiName: "अंतर क्षेत्रीय",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Intra Regional ATC Violation Daily",
            hindiName: "दैनिक अंतर क्षेत्रीय एटीसी उल्लंघन",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Intra Regional ATC Violation Weekly",
            hindiName: "साप्ताहिक अंतर क्षेत्रीय एटीसी उल्लंघन",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Intra Regional ATC Violation Monthly",
            hindiName: "मासिक अंतर क्षेत्रीय एटीसी उल्लंघन",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
    ],
  },
  {
    name: "Scheduling",
    hindiName: "निर्धारण",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "ISGS Real Time Data",
        hindiName: "आईएसजीएस वास्तविक काल डेटा",
        route: "/sections/page-sections/page-headers",
      },

      {
        name: "Share Table",
        hindiName: "साझा टैबल",
        route: "/sections/page-sections/page-headers",
      },

      {
        name: "Final Schedule",
        hindiName: "अंतिम निर्धारण",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "WEB Based Application",
        hindiName: "वेब आधारित एप्लिकेशन",
        dropdown: true,
        collapse: [
          {
            name: "New WBES",
            hindiName: "नई डब्ल्यूबीईएस",
            href: "https://newwbes.grid-india.in/",
          },
          {
            name: "OLD Web Based Application",
            hindiName: "पुरानी वेब आधारित एप्लिकेशन",
            href: "https://wbes.erldc.in/Account/Login?ReturnUrl=%2f",
          },
        ],
      },
      {
        name: "Payment Security Mechanism",
        hindiName: "भुगतान सुरक्षा तंत्र",
        href: "http://posoco.in/reports/psm-daily-reports/",
      },
      {
        cssOverlap: true,
        name: "Peak Hours and Season Declaration",
        hindiName: "पीक घंटे और सीजन घोषणा",
        route: "/scheduling/peakhours",
        component: <PeakHours />,
      },
    ],
  },

  {
    name: "Market Operation",
    hindiName: "बाजार संचालन",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "TGNA",
        hindiName: "टीजीएनए",
        dropdown: true,
        collapse: [
          {
            name: "Reconciliation CTU",
            hindiName: "सुलह सीटीयू",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Reconciliation Applicant",
            hindiName: "सुलह आवेदक",
            route: "/sections/page-sections/page-headers",
          },

          {
            name: "Disbursement",
            hindiName: "संवितरण",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "NOAR",
            hindiName: "एनओएआर",
            href: "https://noar.in/landing",
          },
        ],
      },
      {
        name: "FTC",
        hindiName: "एफटीसी",
        dropdown: true,
        collapse: [
          {
            name: "First Time Charging Documents",
            hindiName: "पहली बार चार्जिंग दस्तावेज",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },

      {
        name: "DSM",
        hindiName: "डीएसएम",
        dropdown: true,
        collapse: [
          {
            name: "DSM rate",
            hindiName: "डीएसएम दर",
            href: "https://dsm.posoco.in/newdsm",
          },
          {
            name: "DSM Disbursement Letter",
            hindiName: "डीएसएम संवितरण पत्र",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "DSM Reconciliation",
            hindiName: "डीएसएम सुलह",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },

      {
        name: "Reactive",
        hindiName: "रिएक्टिव",
        dropdown: true,
        collapse: [
          {
            name: "Reactive Reconciliation",
            hindiName: "रिएक्टिव सुलह",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Reactive Disbursement Letter",
            hindiName: "रिएक्टिव संवितरण पत्र",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Ancilliary Services",
        hindiName: "सहायक सेवाएं",
        dropdown: true,
        collapse: [
          {
            name: "RRAS Reconciliation",
            hindiName: "आरआरएस सुलह",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "AGC Reconciliation",
            hindiName: "एजीसी सुलह",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Metering",
        hindiName: "मीटरिंग",
        dropdown: true,
        collapse: [
          {
            name: "SEM data",
            hindiName: "एसईएम डेटा",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Metering Software",
            hindiName: "मीटरिंग सॉफ्टवेयर",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Time Correction manual",
            hindiName: "समय सुधार पुस्तिका",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Metering Manual",
            hindiName: "मीटरिंग पुस्तिका",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Metering Error",
            hindiName: "मीटरिंग त्रुटि",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Fees & Charges",
        hindiName: "फीस एवं शुल्क",
        dropdown: true,
        collapse: [
          {
            name: "F&C User List",
            hindiName: "एफ&सी उपयोगकर्ता सूची",
            href: "http://fc.posoco.in/FnCWeb/#/landing/reg-users",
          },
          {
            name: "Monthly Bill Statement",
            hindiName: "मासिक बिल विवरण",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Supplementary & PLI Bill",
            hindiName: "अनुपूरक एवं पीएलआई बिल",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Quarterly Reconciliation Statement",
            hindiName: "त्रैमासिक सुलह विवरण",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Reports",
        hindiName: "रिपोर्ट्स",
        dropdown: true,
        collapse: [
          {
            name: "Congestion Report",
            hindiName: "कंगेसन रिपोर्ट",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "PSDF",
        hindiName: "पीएसडीएफ",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Bank Details",
        hindiName: "बैंक विवरण",
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
  {
    name: "Open Access",
    hindiName: "ओपन एक्सेस",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Interest",
        hindiName: "ब्याज",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Regional Entities",
        hindiName: "क्षेत्रीय प्रतिनिधित्व",
      },

      {
        name: "Regulation",
        hindiName: "अधिनियम",
        href: "http://cercind.gov.in/Current_reg.html",
      },

      {
        name: "Transaction",
        hindiName: "लेन-देन विधि",
      },
      {
        name: "STOA Summary",
        hindiName: "एसटीओए सारांश",
        dropdown: true,
        collapse: [
          {
            name: "Categorized No. of Approval",
            hindiName: "अनुमोदन की वर्गीकृत संख्या",
            href: "http://noar.in/landing",
          },
          {
            name: "Categorized MU",
            hindiName: "वर्गीकृत एमयू",
            href: "http://noar.in/landing",
          },
          {
            name: "Summary",
            hindiName: "सारांश",
            href: "http://noar.in/landing",
          },
          {
            name: "Approved Transaction",
            hindiName: "अनुमोदित लेन-देन विधि",
            href: "http://noar.in/landing",
          },
        ],
      },
      {
        name: "Transmission Loss",
        hindiName: "ट्रांसमिशन हानि",
        href: "http://posoco.in/side-menu-pages/applicable-transmission-losses/",
      },
      {
        name: "Transmission Charges",
        hindiName: "ट्रांसमिशन शुल्क",
        href: "http://noar.in/landing",
      },
      {
        name: "Reconciliation",
        hindiName: "सुलह",
        dropdown: true,
        collapse: [
          {
            name: "Applicant Amount",
            hindiName: "आवेदक राशि",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Beneficiary Amount",
            hindiName: "लाभार्थी राशि",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "TDS Certificate",
            hindiName: "टीडीएस प्रमाणपत्र",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Interest",
            hindiName: "ब्याज",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Procedures",
        hindiName: "प्रक्रिया",
        href: "http://noar.in/procedures",
      },
      {
        name: "Web based Application",
        hindiName: "वेब आधारित एप्लिकेशन",
        href: "http://noar.in/landing",
      },
    ],
  },

  {
    name: "Reports",
    hindiName: "रिपोर्ट्स",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "ER Utility Performance",
        hindiName: "ईआर उपयोगिता प्रदर्शन",
        dropdown: true,
        collapse: [
          {
            name: "Hydro Reservoir",
            hindiName: "जलाशय",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Daily Report",
        hindiName: "दैनिक रिपोर्ट",
        dropdown: true,
        collapse: [
          {
            name: "Daily PSP report",
            hindiName: "दैनिक पीएसपी रिपोर्ट",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Generation Outage",
            hindiName: "उत्पादन आउटेज",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },

      {
        name: "Weekly Reports",
        hindiName: "साप्ताहिक रिपोर्ट्स",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Monthly Reports",
        hindiName: "मासिक रिपोर्ट्स",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Quarterly Reports",
        hindiName: "त्रीमासिक रिपोर्ट्स",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Annual Reports",
        hindiName: "वार्षिक रिपोर्ट्स",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Disturbance Reports",
        hindiName: "डिस्टर्बेंस रिपोर्ट्स",
        href: "http://posoco.in/grid-disturbancesincidence/",
      },

      {
        name: "Voltage Deviation Index",
        hindiName: "वोल्टेज विचलन सूचकांक",
        dropdown: true,
        collapse: [
          {
            name: "Daily",
            hindiName: "दैनिक",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Weekly",
            hindiName: "साप्ताहिक",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Monthly",
            hindiName: "मासिक",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Monthly Deviation Report",
        hindiName: "मासिक विचलन रिपोर्ट",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Annual Compendium",
        hindiName: "वार्षिक सारांश",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Grid Events (Flash report)",
        hindiName: "ग्रिड इवेंट्स (फ्लैश रिपोर्ट)",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Weather related events",
        hindiName: "मौसम संबंधित घटनाएँ",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Technical Reports",
        hindiName: "तकनीकी रिपोर्ट्स",
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
  {
    name: "SCADA",
    hindiName: "स्काडा",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        xp: "gii",
        name: "Telemetry",
        hindiName: "टेलीमेट्री",
        route: "/sections/page-sections/page-headers",
        isPrivate: true,
      },
      {
        name: "Scada vs SEM Report",
        hindiName: "स्काडा बनाम एसईएम रिपोर्ट",
        route: "/sections/page-sections/page-headers",
      },

      {
        name: "Real-Time Data",
        hindiName: "वास्तविक काल डेटा",
        dropdown: true,
        collapse: [
          {
            name: "Constituent Wise Schedule & Actual",
            hindiName: "गठन वार निर्धारण और वास्तविक",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Inter-Regional Wise Deviation",
            hindiName: "अंतर-क्षेत्रीय वार विचलन",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Constituent Wise Generation",
            hindiName: "गठन वार उत्पादन",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Station Wise Voltage",
            hindiName: "स्टेशन वार वोल्टेज",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Station Wise Generation",
            hindiName: "स्टेशन वार उत्पादन",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "ER Generation",
            hindiName: "ईआर उत्पादन",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "SCADA TeST Meeting",
        hindiName: "स्काडा टेस्ट बैठक",
        href: "http://erpc.gov.in/test-meetings/",
      },
    ],
  },

  {
    name: "Useful Links",
    hindiName: "उपयोगी लिंक्स",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Grid-India Website",
        hindiName: "ग्रिड-इंडिया वेबसाइट",
        href: "https://grid-india.in/",
      },

      {
        name: "OTHER LINKS",
        hindiName: "अन्य लिंक्स",
        dropdown: true,
        collapse: [
          {
            name: "FOLD",
            hindiName: "फोल्ड",
            href: "http://forumofld.in/",
          },
          {
            name: "PSDF",
            hindiName: "पीएसडीएफ",
            href: "http://psdfindia.in/",
          },
          {
            name: "Vidyut PRAVAH",
            hindiName: "विद्युत प्रवाह",
            href: "http://vidyutpravah.in/",
          },
          {
            name: "MoP",
            hindiName: "एमओपी",
            href: "http://powermin.gov.in/",
          },
          {
            name: "CERC",
            hindiName: "सीईआरसी",
            href: "http://cercind.gov.in/",
          },
          {
            name: "MNRE",
            hindiName: "एमएनआरई",
            href: "http://mnre.gov.in/",
          },
        ],
      },
      {
        name: "Govt./PSU",
        hindiName: "सरकारी/पीएसयू",
        href: "http://indianpsu.com/",
      },
      {
        name: "Application",
        hindiName: "एप्लिकेशन",
        dropdown: true,
        collapse: [
          {
            name: "WBES",
            hindiName: "डब्ल्यूबीईएस",
            href: "https://wbes.erldc.in/",
          },
          {
            name: "WBES Old",
            hindiName: "पुराना डब्ल्यूबीईएस",
            href: "https://wbes.erldc.in/wbes_test",
          },
          {
            name: "Fees & Charges",
            hindiName: "फीस एवं शुल्क",
            href: "http://fc.posoco.in/FnCWeb/",
          },
          {
            name: "Meter Data",
            hindiName: "मीटर डेटा",
            href: "https://mdp.erldc.in/ERLDC_MDP",
          },
          {
            name: "E-Log Book",
            hindiName: "ई-कार्यपंजी",
            href: "https://logbook.erldc.in/en",
          },
          {
            name: "Open Access",
            hindiName: "ओपन एक्सेस",
            href: "http://mnre.gov.in/",
          },
          {
            name: "Web-base report",
            hindiName: "वेब आधारित रिपोर्ट",
            href: "https://report.erldc.in/POSOCO/",
          },
        ],
      },
      {
        name: "RLDCs/NLDC",
        hindiName: "आरएलडीसी/एनएलडीसी",
        dropdown: true,
        collapse: [
          {
            name: "WRLDC",
            hindiName: "डब्ल्यूआरएलडीसी",
            href: "http://www.wrldc.in/",
          },
          {
            name: "SRLDC",
            hindiName: "एसआरएलडीसी",
            href: "http://www.srldc.in/",
          },
          {
            name: "NRLDC",
            hindiName: "एनआरएलडीसी",
            href: "http://nrldc.in/",
          },
          {
            name: "NERLDC",
            hindiName: "एनईआरएलडीसी",
            href: "https://www.nerldc.in/",
          },
          {
            name: "NLDC",
            hindiName: "एनएलडीसी",
            href: "http://posoco.in/",
          },
        ],
      },
      {
        name: "Renewable",
        hindiName: "नवीकरणीय",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "REC Mechanism",
        hindiName: "आरईसी क्रियाविधि",
        href: "http://www.recregistryindia.nic.in/index.php/publics/Reference_Documents",
      },
      {
        name: "Weather",
        hindiName: "मौसम",
        dropdown: true,
        collapse: [
          {
            name: "ER Weather Information",
            hindiName: "ईआर मौसम की जानकारी",
            href: "http://14.139.247.5/power/ERLDC/MAIN.html",
          },
          {
            name: "IMD",
            hindiName: "आईएमडी",
            href: "http://mausam.imd.gov.in/",
          },
        ],
      },
    ],
  },
  {
    name: "Documents",
    hindiName: "दस्तावेज",
    // icon: <Icon>article</Icon>,
    dropdown: true,
    collapse: [
      {
        name: "Documents",
        hindiName: "दस्तावेज",
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
  {
    name: "More",
    hindiName: "अतिरिक्त",
    // icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "HR",
        hindiName: "मानव संसाधन",
        dropdown: true,
        collapse: [
          {
            name: "HR Initiatives",
            hindiName: "मानव संसाधन पहल",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Organizational Chart",
            hindiName: "संगठन चार्ट",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Our Employees",
            hindiName: "हमारे कर्मचारी",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Empaneled Hospitals",
            hindiName: "सूचीबद्ध अस्पताल",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Summer Internship",
            hindiName: "ग्रीष्म प्रशिक्षण",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Careers",
            hindiName: "करियर",
            route: "/sections/page-sections/page-headers",
          },
        ],
      },
      {
        name: "Live Map",
        hindiName: "लाइव मैप",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Download Map",
        hindiName: "डाउनलोड मैप",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Tender",
        hindiName: "निविदा",
        route: "/sections/page-sections/page-headers",
      },
      {
        name: "Contracts Awarded",
        hindiName: "प्रदान किये गये अनुबंध",
        dropdown: true,
        collapse: [
          {
            name: "Open Tender",
            hindiName: "खुली निविदा",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Limited Tender",
            hindiName: "सीमित निविदा",
            route: "/sections/page-sections/page-headers",
          },
          {
            name: "Single Tender",
            hindiName: "एकल निविदा",
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
    hindiName: "लॉगिन",
    // icon: <FaceIcon />,
    // route: "/sections/page-sections/page-headers",
    route: "/user/signin",
    component: <SignIn />,
    cssOverlap: true,
    isPrivate: true,
  },
];

export default routes;
