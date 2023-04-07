import { COMPONENT_LIST } from "@/utils/constant";
import RightArrow from "@/utils/images/RightArrow";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Card from "./Card";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={className}>
      <div className="w-12 h-12 absolute -left-7 ssm:-left-10 md:-left-6 lg:-left-12 xl:-left-12 -top-9 bg-white flex justify-center items-center rounded-full shadow-pupularCard">
        <RightArrow />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={classNames(className, "z-10")}>
      <div className="w-12 h-12 rotate-180 absolute lg:left-5 xl:left-5 -top-9 bg-white flex justify-center items-center rounded-full shadow-pupularCard">
        <RightArrow />
      </div>
    </div>
  );
}

const CustomSlider = ({ selectType, sliderData, type }) => {
  const sliderLength = sliderData.filter(
    (fil) => fil.type === selectType
  ).length;

  var componentSettings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: sliderLength < 4 ? sliderLength : 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="popular w-full">
      {type === "components" ? (
        <Slider {...componentSettings}>
          {sliderData
            .filter((fil) => fil.type === selectType)
            .map((data, index) => {
              return (
                <div key={index} data-testid={`card-${index}`}>
                  <Card type={type} data={data} />
                </div>
              );
            })}
        </Slider>
      ) : (
        <Slider {...templateSettings}>
          {sliderData.map((data, index) => {
            return (
              <div key={index} data-testid={`card-${index}`}>
                <Card type={type} data={data} />
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default CustomSlider;
