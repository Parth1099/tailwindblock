import React, { useState } from "react";

const images = [
  "/assets/carousal/sample2/image1.jpg",
  "/assets/carousal/sample2/image2.jpg",
  "/assets/carousal/sample2/image3.jpg",
];
const text = ["lorem ipsum", "lorem ipsum dollar", "lorem ipsum dollar amet"];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const decreseIndex = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(images.length - 1);
    } else setCurrentIndex(currentIndex - 1);
  };

  const increseIndex = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center bg-gray-300">
        <div className="w-[800px] relative">
          <div
            className="absolute inset-y-0 left-3 w-5 flex"
            onClick={decreseIndex}
          >
            <img
              src={"/assets/carousal/sample2/left.svg"}
              alt="not found"
              className="cursor-pointer z-50"
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
                    className="object-cover w-full temporary-bounce animate-[pulse_3s_linear_infinite] relative"
                  />
                );
              } else return null;
            })}
          </div>
          <div
            className="absolute inset-y-0 right-3 w-5 flex"
            onClick={increseIndex}
          >
            <img
              src={"/assets/carousal/sample2/right.svg"}
              alt="not found"
              className="cursor-pointer"
            />
          </div>

          {/* text portion */}
          <div className="absolute bottom-6 inset-x-0 bg-cyan-900 opacity-50 ">
            {text.map((textdata, index) => {
              if (currentIndex === index) {
                return (
                  <span
                    key={index}
                    className="text-xl text-white flex justify-center"
                  >
                    {textdata}
                  </span>
                );
              } else return null;
            })}
          </div>

          {/* custom dot portion */}
          <div className="absolute bottom-2 inset-x-0 flex flex-row gap-2 justify-center">
            {images.map((a, index) =>
              currentIndex === index ? (
                <div
                  key={index}
                  className="w-2 h-2 bg-gray-400 rounded-[50%] cursor-pointer"
                ></div>
              ) : (
                <div
                  key={index}
                  className="w-2 h-2 bg-gray-600 rounded-[50%] cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                ></div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
