import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import MKBadge from "components/MKBadge";

import pic1 from "assets/images/Courasal/1.png";
import pic2 from "assets/images/Courasal/2.png";
import pic3 from "assets/images/Courasal/3.png";
import pic4 from "assets/images/Courasal/4.png";
import pic5 from "assets/images/Courasal/5.png";
import pic6 from "assets/images/Courasal/6.png";

export default function CircularDemo() {
  return (
    <Marquee>
      <MKBadge
        variant="contained"
        color="success"
        badgeContent="Vision: To be a global institution of excellence for reliable & resilient power systems,
   fostering efficient electricity markets, promoting economy and sustainability."
        container
        sx={{ mb: 2 }}
      />
      <div>{"   "}</div>
      <MKBadge
        variant="contained"
        color="success"
        badgeContent="Mission: Ensure Integrated Operation of the Indian Power System to facilitate transfer of
  electric power within and across the regions and trans-national exchange of power with
  Reliability, Economy and Sustainability."
        container
        sx={{ mb: 2 }}
      />
      <div>{"   "}</div>
      <MKBadge
        variant="contained"
        color="success"
        badgeContent="Who are we: Grid Controller Of India Limited (GRID-INDIA) erstwhile 
  Power System Operation Corporation Limited (POSOCO) is a wholly owned Government of India 
  Enterprise under the Ministry Of Power."
        container
        sx={{ mb: 2 }}
      />
    </Marquee>
  );
}
