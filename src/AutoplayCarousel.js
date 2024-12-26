import React from "react";
// import "./autoplaycarousel.scss";
import "./test.css";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem.js";
// import { isValidDateOrTimeValue } from "@testing-library/user-event/dist/types/utils";

export default function AutoplayCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* <div>
      <div> */}
        {Object.keys(cardDetails).map((detailKey) => {
          return (
            <CarouselItem
              key={detailKey} // Add a unique key for each item
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );

  //     <div>
  //       <div>
  //         {Object.keys(cardDetails).map((detailKey) => {
  //           return (
  //             <CarouselItem
  //               //   key={i}
  //               imgUrl={cardDetails[detailKey].imgUrl}
  //               imgTitle={cardDetails[detailKey].title}
  //             ></CarouselItem>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
}
