import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import "./carouselgoi.css";
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
import pic7 from "assets/images/Courasal/7.png";
// import pic1 from "assets/images/courasol/1.png";
import Marquee from "react-fast-marquee";

// import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
export default function CircularDemo() {
  //   const [products, setProducts] = useState([]);
  //   const responsiveOptions = [
  //     {
  //       breakpoint: "1400px",
  //       numVisible: 2,
  //       numScroll: 1,
  //     },
  //     {
  //       breakpoint: "1199px",
  //       numVisible: 3,
  //       numScroll: 1,
  //     },
  //     {
  //       breakpoint: "767px",
  //       numVisible: 2,
  //       numScroll: 1,
  //     },
  //     {
  //       breakpoint: "575px",
  //       numVisible: 1,
  //       numScroll: 1,
  //     },
  //   ];

  //   useEffect(() => {
  //     // setProducts([pic1, pic2]);
  //     // setProducts([pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12]);
  //     setProducts([pic1, pic2, pic3, pic4, pic5, pic6]);
  //   }, []);

  //   const productTemplate = (product) => {
  //     return (
  //       <div className="border-round m-2 text-center py-1 px-0 ">
  //         <div className="mb-1">
  //           <img src={product} alt="name" height="40" width="60%" />
  //         </div>
  //       </div>
  //     );
  //   };

  return (
    <div className="slider-goi">
      {/* <div className="slide-track-goi"> */}
      <Marquee pauseOnHover={true} direction="left">
        <div class="slide-goi">
          <a
            href="http://urjaindia.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic1} />
          </a>
        </div>

        <div class="slide-goi">
          <a
            href="http://urjaindia.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic2} />
          </a>
        </div>
        <div class="slide-goi">
          <a
            href="http://urjaindia.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic3} />
          </a>
        </div>
        <div class="slide-goi">
          <a
            href="http://urjaindia.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic4} />
          </a>
        </div>
        <div class="slide-goi">
          <a
            href="http://urjaindia.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic5} />
          </a>
        </div>
        <div class="slide-goi">
          <a
            href="http://urjaindia.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic6} />
          </a>
        </div>
        <div class="slide-goi">
          <a
            href="https://www.digitalindia.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic7} />
          </a>
        </div>
      </Marquee>
      {/* </div> */}
    </div>
  );
}
