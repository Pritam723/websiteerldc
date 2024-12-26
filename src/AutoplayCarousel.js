import React from "react";
import "./autoplaycarousel.scss";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {Object.keys(cardDetails).map((index, detailKey) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {/* {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })} */}
      </div>
    </div>
  );
}
