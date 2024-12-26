import React from "react";

export default function CarouselItem({ index, imgUrl, imgTitle }) {
  return (
    <div key={index} className="carousel-card">
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
  );
}
