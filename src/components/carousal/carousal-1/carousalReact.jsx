import React, { useState } from "react";

const images = [
  "/assets/carousal/sample1/img2.jpg",
  "/assets/carousal/sample1/img1.jpg",
  "/assets/carousal/sample1/img3.jpg",
  "/assets/carousal/sample1/img4.jpg",
];
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const decreseIndex = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(0);
    } else setCurrentIndex(currentIndex - 1);
  };

  const increseIndex = () => {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(images.length - 1);
    } else setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center bg-gray-300">
        <div className="w-[800px] relative">
          <div
            className="absolute inset-y-0 left-3 w-5 flex z-50"
            onClick={decreseIndex}
          >
            <img
              src={"/assets/carousal/sample1/left.svg"}
              alt="not found"
              className="cursor-pointer"
            />
          </div>
          <div>
            {images.map((img, index) => {
              if (currentIndex === index) {
                return (
                  <img
                    key={index}
                    src={img}
                    alt="not found"
                    className="object-cover w-full"
                  />
                );
              } else return null;
            })}
          </div>
          <div
            className="absolute inset-y-0 right-3  w-5 flex"
            onClick={increseIndex}
          >
            <img
              src={"/assets/carousal/sample1/right.svg"}
              alt="not found"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
