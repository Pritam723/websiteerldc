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
import pic8 from "assets/images/Courasal/12.png";
// import pic1 from "assets/images/courasol/1.png";

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
    // <div className="">
    //   <Carousel
    //     // value={products}
    //     value={[...products, ...products]}
    //     numVisible={8}
    //     numScroll={0.2}
    //     backgroundColor="black"
    //     responsiveOptions={responsiveOptions}
    //     className="custom-carousels"
    //     circular
    //     autoplayInterval={1000}
    //     itemTemplate={productTemplate}
    //   />
    // </div>
    <div className="slider-goi">
      <div className="slide-track-goi">
        {/* 9 slides */}
        <div className="slide-goi">
          <a
            href="http://urjaindia.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic1} alt="name" />
          </a>
        </div>
        <div className="slide-goi">
          <a
            href="https://vidyutpravah.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic2} alt="name" />
          </a>
        </div>
        <div className="slide-goi">
          <a
            href="https://powermin.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic3} alt="name" />
          </a>
        </div>
        <div className="slide-goi">
          <a
            href="https://npp.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic4} alt="name" />
          </a>
        </div>
        <div className="slide-goi">
          <a
            href="http://ujala.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic5} alt="name" />
          </a>
        </div>
        <div className="slide-goi">
          <a
            href="http://www.tarang.website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic6} alt="name" />
          </a>
        </div>

        {/* same  slides */}
        <div className="slide-goi">
          <a
            href="http://urjaindia.co.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic1} alt="name" />
          </a>
        </div>
        <div className="slide-goi">
          <a
            href="https://vidyutpravah.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic2} alt="name" />
          </a>
        </div>
        <div className="slide-goi">
          <a
            href="https://powermin.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic3} alt="name" />
          </a>
        </div>
        <div className="slide-goi">
          <a
            href="https://npp.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic4} alt="name" />
          </a>
        </div>
        <div className="slide-goi">
          <a
            href="http://ujala.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic5} alt="name" />
          </a>
        </div>
        <div className="slide-goi">
          <a
            href="http://www.tarang.website/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic6} alt="name" />
          </a>
        </div>
      </div>
    </div>
  );
}
