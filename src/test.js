import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import "./test.css";
// import { ProductService } from "./service/ProductService";
// import appleLogo from "assets/images/courasol/1.png";
import pic1 from "assets/images/Courasal/1.png";
import pic2 from "assets/images/Courasal/2.png";
import pic3 from "assets/images/Courasal/3.png";
import pic4 from "assets/images/Courasal/4.png";
import pic5 from "assets/images/Courasal/5.png";
import pic6 from "assets/images/Courasal/6.png";
// import pic7 from "assets/images/courasol/8.png";
// import pic8 from "assets/images/Courasal/3.png";
// import pic9 from "assets/images/Courasal/4.png";
// import pic10 from "assets/images/Courasal/5.png";
// import pic11 from "assets/images/Courasal/6.png";
import pic8 from "assets/images/Courasal/12.png";

  return (
  
    <div className="slider">
      <div className="slide-track">
        {/* 9 slides */}
        <div className="slide">
          <a href="http://urjaindia.co.in/" target="_blank" rel="noopener noreferrer">
            <img src={pic1} alt="name" />
          </a>
        </div>
        <div className="slide">
          <a href="https://vidyutpravah.in/" target="_blank" rel="noopener noreferrer">
            <img src={pic2} alt="name" />
          </a>
        </div>
        <div className="slide">
          <a href="https://powermin.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={pic3} alt="name" />
          </a>
        </div>
        <div className="slide">
          <a href="https://npp.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={pic4} alt="name" />
          </a>
        </div>
        <div className="slide">
          <a href="http://ujala.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={pic5} alt="name" />
          </a>
        </div>
        <div className="slide">
          <a href="http://www.tarang.website/" target="_blank" rel="noopener noreferrer">
            <img src={pic6} alt="name" />
          </a>
        </div>

        {/* same  slides */}
        <div className="slide">
          <a href="http://urjaindia.co.in/" target="_blank" rel="noopener noreferrer">
            <img src={pic1} alt="name" />
          </a>
        </div>
        <div className="slide">
          <a href="https://vidyutpravah.in/" target="_blank" rel="noopener noreferrer">
            <img src={pic2} alt="name" />
          </a>
        </div>
        <div className="slide">
          <a href="https://powermin.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={pic3} alt="name" />
          </a>
        </div>
        <div className="slide">
          <a href="https://npp.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={pic4} alt="name" />
          </a>
        </div>
        <div className="slide">
          <a href="http://ujala.gov.in/" target="_blank" rel="noopener noreferrer">
            <img src={pic5} alt="name" />
          </a>
        </div>
        <div className="slide">
          <a href="http://www.tarang.website/" target="_blank" rel="noopener noreferrer">
            <img src={pic6} alt="name" />
          </a>
        </div>
      </div>
    </div>
  );
}
