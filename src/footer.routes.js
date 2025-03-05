// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";
import GridLogo from "assets/images/GridIndiaLogo1.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "ERLDC, GRID-INDIA",
    image: GridLogo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/GridIndia1",
      color: "info",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/power-system-operation-corporation-ltd",
      color: "info",
    },
    {
      icon: <XIcon />,
      link: "https://twitter.com/GridIndia1",
      color: "dark",
    },

    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/creativetimofficial",
    // },
    // {
    //   icon: <YouTubeIcon />,
    //   link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
  ],
  menus: [
    {
      name: "Quick Links",
      items: [
        { name: "Feedback & Grievance", href: "/presentation" },
        {
          name: "Organizational Chart",
          href:
            process.env.REACT_APP_READ_API + "/files/OgranizationalChart.pdf",
        },
        // { name: "Upload Documents", href: "https://www.creative-tim.com/templates/premium" },
        { name: "RTI", route: "/rti"  },
        {
          name: "GRID-INDIA Website",
          href: "https://grid-india.in/",
        },
      ],
    },
    {
      name: "Address",
      items: [
        {
          name: "Eastern Regional Load Despatch Centre, 14, Golf Club Road, Tollygunge, Kolkata -700 033",
          href: "https://www.google.com/maps/dir//erldc/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a0270c3a52e094b:0xe0462ed564bcee08?sa=X&ved=1t:3061&ictx=111",
        },
        // { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        // { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "Contact Us",
      items: [
        { name: "(+91) 33 30116900-09 (EPABX)" },
        { name: "2423-5875 / 24235265 / 30116990-96 (CONTROL ROOM)" },
        { name: "erldcit@grid-india.in", href: "mailto:erldcit@grid-india.in" },
      ],
    },
    {
      name: "Helpline",
      items: [
        {
          name: "NCW Women's HelpLine",
          // href: "https://www.creative-tim.com/contact-us",
        },
        { name: "Helpline No. 7827170170" },
        // { name: "custom development", href: "https://services.creative-tim.com/" },
        // { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. &copy; {date}{" "}
      <MKTypography
        component="a"
        href="https://erldc.in"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Eastern Regional Load Despatch Centre
      </MKTypography>
      .
    </MKTypography>
  ),
};
