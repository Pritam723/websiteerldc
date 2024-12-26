import React from "react";
// import "./autoplaycarousel.scss";
import "./test.css";
export default function CarouselItem({ imgUrl, imgTitle }) {
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={imgTitle}></img>
      {/* <img
        src="https://www.google.com/imgres?q=image%20carousel%20uniform%20size&imgurl=http%3A%2F%2Fwww.greensselfstorage.co.uk%2Fwp-content%2Fuploads%2F2015%2F06%2Fdhl-box-size-3-carousel.jpg&imgrefurl=http%3A%2F%2Fwww.greensselfstorage.co.uk%2Fdhl-service-pont%2Fdhl-box-size-3-carousel%2F&docid=QO26akPO1MZsjM&tbnid=dyeH9qkto8v7NM&vet=12ahUKEwie4-C0zL2KAxVOUWwGHd6-HRkQM3oECBgQAA..i&w=234&h=293&hcb=2&ved=2ahUKEwie4-C0zL2KAxVOUWwGHd6-HRkQM3oECBgQAA"
        alt={imgTitle}
      ></img> */}
    </div>
  );
}
