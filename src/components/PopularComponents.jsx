import { COMPONENT_LIST } from "@/utils/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "./button/CustomButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider";

const PopularComponents = () => {
  const [type, setType] = useState([]);
  const [selectType, setSelectType] = useState("pricing");
  useEffect(() => {
    const arr = [];
    COMPONENT_LIST.map((data) => {
      arr.push(data.type);
    });
    setType([
      ...new Set(
        arr.sort(
          (a, b) =>
            arr.filter((ar) => ar === b).length -
            arr.filter((ar) => ar === a).length
        )
      ),
    ]);
  }, []);

  const color = [
    { color: "#8C0B0BCC", opacity: "rgba(140, 11, 11, 0.08)" },
    { color: "#2C6617CC", opacity: "rgba(183, 99, 1, 0.08)" },
    { color: "#B76301CC", opacity: "rgba(44, 102, 23, 0.08)" },
    { color: "#129999CC", opacity: "rgba(18, 153, 153, 0.08)" },
    { color: "#D14850CC", opacity: "rgba(209, 72, 80, 0.08)" },
    { color: "#D70375CC", opacity: "rgba(215, 3, 117, 0.08)" },
    { color: "#1300E3CC", opacity: "rgba(19, 0, 227, 0.08)" },
    { color: "#7A22AFCC", opacity: "rgba(122, 34, 175, 0.08)" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 md:gap-12 items-center justify-center px-5 sm:px-8 md:px-10">
      <div className="flex flex-col gap-9 items-center">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold  text-xl sm:text-3xl md:text-4xl xl:text-5xl leadin-[59px] leading-tight text-black opacity-80">
            Popular Components
          </h2>
          <div className="w-9 md:w-24 border md:border-2 border-[#365CCE] rounded-lg"></div>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center w-full max-w-3xl">
          {type.slice(0, 7)?.map((type, index) => {
            return (
              <div key={index}>
                <CustomButton
                  onClick={() => setSelectType(type)}
                  color={color}
                  selected={selectType}
                >
                  {type}
                </CustomButton>
              </div>
            );
          })}
          <Link href={"/components"}>
            <CustomButton color={color}>+More</CustomButton>
          </Link>
        </div>
      </div>
      <div>
        <CustomSlider
          type="components"
          selectType={selectType}
          sliderData={COMPONENT_LIST}
        />
      </div>
    </div>
  );
};

export default PopularComponents;
